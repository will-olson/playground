# Sigma Playground - Security Implementation Guide

## Executive Summary
This document provides comprehensive security implementation guidelines for Sigma Playground, covering authentication, authorization, data protection, input validation, and security monitoring. It ensures the platform maintains the highest security standards throughout development and production.

---

## Table of Contents
1. [Authentication Security](#authentication-security)
2. [Authorization Patterns](#authorization-patterns)
3. [Data Encryption](#data-encryption)
4. [Input Validation & Sanitization](#input-validation--sanitization)
5. [SQL Injection Prevention](#sql-injection-prevention)
6. [XSS & CSRF Protection](#xss--csrf-protection)
7. [Security Headers & CSP](#security-headers--csp)
8. [Penetration Testing](#penetration-testing)
9. [Security Monitoring](#security-monitoring)
10. [Incident Response](#incident-response)

---

## Authentication Security

### Password Security Implementation

```typescript
// Password Security Service
@Injectable()
export class PasswordSecurityService {
  private readonly SALT_ROUNDS = 12;
  private readonly PASSWORD_MIN_LENGTH = 8;
  private readonly PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;

  async hashPassword(password: string): Promise<string> {
    this.validatePasswordStrength(password);
    return bcrypt.hash(password, this.SALT_ROUNDS);
  }

  async verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  private validatePasswordStrength(password: string): void {
    if (password.length < this.PASSWORD_MIN_LENGTH) {
      throw new BadRequestException('Password must be at least 8 characters long');
    }

    if (!this.PASSWORD_PATTERN.test(password)) {
      throw new BadRequestException(
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      );
    }

    // Check for common passwords
    if (this.isCommonPassword(password)) {
      throw new BadRequestException('Password is too common. Please choose a stronger password');
    }
  }

  private isCommonPassword(password: string): boolean {
    const commonPasswords = [
      'password', '123456', '123456789', 'qwerty', 'abc123',
      'password123', 'admin', 'letmein', 'welcome', 'monkey'
    ];
    return commonPasswords.includes(password.toLowerCase());
  }
}
```

### JWT Security Implementation

```typescript
// JWT Security Service
@Injectable()
export class JwtSecurityService {
  private readonly ACCESS_TOKEN_EXPIRY = '15m';
  private readonly REFRESH_TOKEN_EXPIRY = '7d';
  private readonly TOKEN_ISSUER = 'sigma-playground';

  constructor(
    private jwtService: JwtService,
    private redis: Redis
  ) {}

  async generateTokenPair(userId: string, userRole: string): Promise<TokenPair> {
    const payload = {
      sub: userId,
      role: userRole,
      iat: Math.floor(Date.now() / 1000),
      iss: this.TOKEN_ISSUER
    };

    const accessToken = this.jwtService.sign(
      { ...payload, type: 'access' },
      {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: this.ACCESS_TOKEN_EXPIRY
      }
    );

    const refreshToken = this.jwtService.sign(
      { ...payload, type: 'refresh' },
      {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: this.REFRESH_TOKEN_EXPIRY
      }
    );

    // Store refresh token in Redis with expiry
    await this.redis.setex(
      `refresh_token:${userId}:${refreshToken}`,
      this.getSecondsFromExpiry(this.REFRESH_TOKEN_EXPIRY),
      'valid'
    );

    return { accessToken, refreshToken };
  }

  async validateToken(token: string, type: 'access' | 'refresh'): Promise<JWTPayload> {
    try {
      const secret = type === 'access' 
        ? process.env.JWT_ACCESS_SECRET 
        : process.env.JWT_REFRESH_SECRET;

      const payload = this.jwtService.verify(token, { secret }) as JWTPayload;

      // Additional validation for refresh tokens
      if (type === 'refresh') {
        const isValid = await this.redis.get(`refresh_token:${payload.sub}:${token}`);
        if (!isValid) {
          throw new UnauthorizedException('Invalid refresh token');
        }
      }

      return payload;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  async revokeRefreshToken(userId: string, token?: string): Promise<void> {
    if (token) {
      await this.redis.del(`refresh_token:${userId}:${token}`);
    } else {
      // Revoke all refresh tokens for user
      const keys = await this.redis.keys(`refresh_token:${userId}:*`);
      if (keys.length > 0) {
        await this.redis.del(...keys);
      }
    }
  }

  private getSecondsFromExpiry(expiry: string): number {
    const match = expiry.match(/(\d+)([smhd])/);
    if (!match) return 0;

    const value = parseInt(match[1]);
    const unit = match[2];

    switch (unit) {
      case 's': return value;
      case 'm': return value * 60;
      case 'h': return value * 3600;
      case 'd': return value * 86400;
      default: return 0;
    }
  }
}
```

### Multi-Factor Authentication

```typescript
// MFA Service
@Injectable()
export class MFAService {
  constructor(
    private redis: Redis,
    private emailService: EmailService
  ) {}

  async generateMFACode(userId: string): Promise<string> {
    const code = this.generateSecureCode();
    const expiry = 300; // 5 minutes

    await this.redis.setex(`mfa:${userId}`, expiry, code);
    
    // Send code via email
    await this.emailService.sendMFACode(userId, code);
    
    return code;
  }

  async verifyMFACode(userId: string, code: string): Promise<boolean> {
    const storedCode = await this.redis.get(`mfa:${userId}`);
    
    if (!storedCode || storedCode !== code) {
      return false;
    }

    // Remove code after successful verification
    await this.redis.del(`mfa:${userId}`);
    return true;
  }

  private generateSecureCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
}
```

---

## Authorization Patterns

### Role-Based Access Control

```typescript
// RBAC Service
@Injectable()
export class RBACService {
  private readonly permissions = {
    user: [
      'workbook:create',
      'workbook:read:own',
      'workbook:update:own',
      'workbook:delete:own',
      'user:read:own',
      'user:update:own'
    ],
    admin: [
      'workbook:create',
      'workbook:read:all',
      'workbook:update:all',
      'workbook:delete:all',
      'user:read:all',
      'user:update:all',
      'user:delete:all',
      'admin:feature',
      'admin:moderate',
      'admin:analytics'
    ]
  };

  hasPermission(userRole: string, permission: string): boolean {
    const rolePermissions = this.permissions[userRole] || [];
    return rolePermissions.includes(permission);
  }

  canAccessResource(userId: string, resourceUserId: string, userRole: string): boolean {
    // Admin can access any resource
    if (userRole === 'admin') {
      return true;
    }

    // Users can only access their own resources
    return userId === resourceUserId;
  }
}

// Permission Decorator
export const RequirePermissions = (...permissions: string[]) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const request = args[0] as Request;
      const user = request.user;

      if (!user) {
        throw new UnauthorizedException('Authentication required');
      }

      const rbacService = this.rbacService;
      const hasPermission = permissions.some(permission => 
        rbacService.hasPermission(user.role, permission)
      );

      if (!hasPermission) {
        throw new ForbiddenException('Insufficient permissions');
      }

      return originalMethod.apply(this, args);
    };
  };
};
```

### Resource-Based Authorization

```typescript
// Resource Authorization Guard
@Injectable()
export class ResourceAuthorizationGuard implements CanActivate {
  constructor(
    private prisma: PrismaService,
    private rbacService: RBACService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const resourceId = request.params.id;
    const resourceType = this.getResourceType(request.route.path);

    if (!user || !resourceId) {
      return false;
    }

    // Get resource owner
    const resource = await this.getResource(resourceType, resourceId);
    if (!resource) {
      throw new NotFoundException('Resource not found');
    }

    // Check authorization
    return this.rbacService.canAccessResource(
      user.id,
      resource.author_id || resource.id,
      user.role
    );
  }

  private getResourceType(path: string): string {
    if (path.includes('/workbooks/')) return 'workbook';
    if (path.includes('/users/')) return 'user';
    throw new Error('Unknown resource type');
  }

  private async getResource(type: string, id: string) {
    switch (type) {
      case 'workbook':
        return this.prisma.workbook.findUnique({
          where: { id },
          select: { id: true, author_id: true }
        });
      case 'user':
        return this.prisma.user.findUnique({
          where: { id },
          select: { id: true }
        });
      default:
        return null;
    }
  }
}
```

---

## Data Encryption

### Data at Rest Encryption

```typescript
// Encryption Service
@Injectable()
export class EncryptionService {
  private readonly algorithm = 'aes-256-gcm';
  private readonly keyLength = 32;
  private readonly ivLength = 16;
  private readonly tagLength = 16;

  constructor() {
    this.validateEncryptionKey();
  }

  encrypt(text: string): EncryptedData {
    const key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
    const iv = crypto.randomBytes(this.ivLength);
    const cipher = crypto.createCipher(this.algorithm, key);
    cipher.setAAD(Buffer.from('sigma-playground'));

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    const tag = cipher.getAuthTag();

    return {
      encrypted,
      iv: iv.toString('hex'),
      tag: tag.toString('hex')
    };
  }

  decrypt(encryptedData: EncryptedData): string {
    const key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
    const iv = Buffer.from(encryptedData.iv, 'hex');
    const tag = Buffer.from(encryptedData.tag, 'hex');

    const decipher = crypto.createDecipher(this.algorithm, key);
    decipher.setAAD(Buffer.from('sigma-playground'));
    decipher.setAuthTag(tag);

    let decrypted = decipher.update(encryptedData.encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }

  private validateEncryptionKey(): void {
    const key = process.env.ENCRYPTION_KEY;
    if (!key || key.length !== 64) {
      throw new Error('ENCRYPTION_KEY must be a 64-character hex string');
    }
  }
}

// Encrypted Field Decorator
export function Encrypted(target: any, propertyKey: string) {
  let value: string;

  const getter = function() {
    return value;
  };

  const setter = function(newVal: string) {
    if (newVal) {
      const encryptionService = new EncryptionService();
      value = JSON.stringify(encryptionService.encrypt(newVal));
    } else {
      value = newVal;
    }
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}
```

### Data in Transit Security

```typescript
// HTTPS Configuration
export const httpsOptions = {
  key: fs.readFileSync(process.env.SSL_KEY_PATH),
  cert: fs.readFileSync(process.env.SSL_CERT_PATH),
  ca: fs.readFileSync(process.env.SSL_CA_PATH)
};

// Security Headers Middleware
@Injectable()
export class SecurityHeadersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // HTTPS enforcement
    if (process.env.NODE_ENV === 'production' && !req.secure) {
      return res.redirect(301, `https://${req.get('host')}${req.url}`);
    }

    // Security headers
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

    next();
  }
}
```

---

## Input Validation & Sanitization

### Comprehensive Input Validation

```typescript
// Custom Validation Decorators
export function IsValidUsername() {
  return function (target: any, propertyKey: string) {
    registerDecorator({
      name: 'isValidUsername',
      target: target.constructor,
      propertyName: propertyKey,
      constraints: [],
      options: {
        message: 'Username must be 3-50 characters and contain only letters, numbers, underscores, and hyphens'
      },
      validator: {
        validate(value: any) {
          return typeof value === 'string' && 
                 value.length >= 3 && 
                 value.length <= 50 && 
                 /^[a-zA-Z0-9_-]+$/.test(value);
        }
      }
    });
  };
}

export function IsValidEmbedUrl() {
  return function (target: any, propertyKey: string) {
    registerDecorator({
      name: 'isValidEmbedUrl',
      target: target.constructor,
      propertyName: propertyKey,
      constraints: [],
      options: {
        message: 'Must be a valid Sigma embed URL'
      },
      validator: {
        validate(value: any) {
          if (typeof value !== 'string') return false;
          
          try {
            const url = new URL(value);
            return url.protocol === 'https:' && 
                   /.*sigma.*\/(embed|public|viz)\//.test(url.href);
          } catch {
            return false;
          }
        }
      }
    });
  };
}

// Sanitization Service
@Injectable()
export class SanitizationService {
  sanitizeHtml(html: string): string {
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br'],
      ALLOWED_ATTR: []
    });
  }

  sanitizeFilename(filename: string): string {
    return filename
      .replace(/[^a-zA-Z0-9.-]/g, '_')
      .replace(/_{2,}/g, '_')
      .substring(0, 100);
  }

  sanitizeSearchQuery(query: string): string {
    return query
      .trim()
      .replace(/[<>]/g, '')
      .substring(0, 100);
  }
}
```

---

## SQL Injection Prevention

### Parameterized Queries with Prisma

```typescript
// Safe Database Queries
@Injectable()
export class SafeDatabaseService {
  constructor(private prisma: PrismaService) {}

  // Safe user search
  async searchUsers(query: string, limit: number = 10) {
    return this.prisma.user.findMany({
      where: {
        OR: [
          { username: { contains: query, mode: 'insensitive' } },
          { full_name: { contains: query, mode: 'insensitive' } }
        ]
      },
      take: limit,
      select: {
        id: true,
        username: true,
        full_name: true,
        profile_image_url: true
      }
    });
  }

  // Safe workbook filtering
  async getWorkbooksByTags(tags: string[], limit: number = 20) {
    return this.prisma.workbook.findMany({
      where: {
        is_publicly_visible: true,
        tags: {
          some: {
            tag: {
              name: { in: tags }
            }
          }
        }
      },
      take: limit,
      include: {
        author: {
          select: {
            id: true,
            username: true,
            profile_image_url: true
          }
        },
        tags: {
          include: {
            tag: true
          }
        }
      }
    });
  }

  // Safe raw queries when needed
  async getWorkbookStats(workbookId: string) {
    return this.prisma.$queryRaw`
      SELECT 
        COUNT(DISTINCT wv.user_id) as unique_viewers,
        COUNT(wv.id) as total_views,
        COUNT(f.id) as total_favorites
      FROM workbooks w
      LEFT JOIN workbook_views wv ON w.id = wv.workbook_id
      LEFT JOIN favorites f ON w.id = f.workbook_id
      WHERE w.id = ${workbookId}
      GROUP BY w.id
    `;
  }
}
```

---

## XSS & CSRF Protection

### XSS Protection Implementation

```typescript
// XSS Protection Middleware
@Injectable()
export class XSSProtectionMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Sanitize request body
    if (req.body && typeof req.body === 'object') {
      req.body = this.sanitizeObject(req.body);
    }

    // Sanitize query parameters
    if (req.query && typeof req.query === 'object') {
      req.query = this.sanitizeObject(req.query);
    }

    next();
  }

  private sanitizeObject(obj: any): any {
    if (typeof obj === 'string') {
      return DOMPurify.sanitize(obj);
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.sanitizeObject(item));
    }

    if (obj && typeof obj === 'object') {
      const sanitized: any = {};
      for (const key in obj) {
        sanitized[key] = this.sanitizeObject(obj[key]);
      }
      return sanitized;
    }

    return obj;
  }
}

// CSRF Protection
@Injectable()
export class CSRFProtectionService {
  constructor(private redis: Redis) {}

  async generateCSRFToken(userId: string): Promise<string> {
    const token = crypto.randomBytes(32).toString('hex');
    await this.redis.setex(`csrf:${userId}`, 3600, token); // 1 hour
    return token;
  }

  async validateCSRFToken(userId: string, token: string): Promise<boolean> {
    const storedToken = await this.redis.get(`csrf:${userId}`);
    return storedToken === token;
  }

  async revokeCSRFToken(userId: string): Promise<void> {
    await this.redis.del(`csrf:${userId}`);
  }
}
```

---

## Security Headers & CSP

### Content Security Policy Configuration

```typescript
// CSP Configuration
export const cspConfig = {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'", // Only for development
      "https://cdn.jsdelivr.net",
      "https://unpkg.com"
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      "https://fonts.googleapis.com",
      "https://cdn.jsdelivr.net"
    ],
    fontSrc: [
      "'self'",
      "https://fonts.gstatic.com"
    ],
    imgSrc: [
      "'self'",
      "data:",
      "https:",
      "blob:"
    ],
    connectSrc: [
      "'self'",
      "https://api.sigmaplayground.com",
      "wss://api.sigmaplayground.com"
    ],
    frameSrc: [
      "'self'",
      "https://*.sigma.com",
      "https://app.sigma.com"
    ],
    objectSrc: ["'none'"],
    baseUri: ["'self'"],
    formAction: ["'self'"],
    frameAncestors: ["'none'"],
    upgradeInsecureRequests: []
  }
};

// Security Headers Service
@Injectable()
export class SecurityHeadersService {
  configureSecurityHeaders(app: INestApplication) {
    app.use(helmet({
      contentSecurityPolicy: cspConfig,
      crossOriginEmbedderPolicy: false,
      hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
      }
    }));
  }
}
```

---

## Penetration Testing

### Security Testing Framework

```typescript
// Security Test Suite
describe('Security Tests', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prisma = moduleFixture.get<PrismaService>(PrismaService);
    
    await app.init();
  });

  describe('SQL Injection Tests', () => {
    it('should prevent SQL injection in user search', async () => {
      const maliciousQuery = "'; DROP TABLE users; --";
      
      const response = await request(app.getHttpServer())
        .get(`/users/search?q=${encodeURIComponent(maliciousQuery)}`)
        .expect(200);

      // Verify users table still exists
      const users = await prisma.user.findMany();
      expect(users).toBeDefined();
    });

    it('should prevent SQL injection in workbook filtering', async () => {
      const maliciousTag = "'; DROP TABLE workbooks; --";
      
      const response = await request(app.getHttpServer())
        .get(`/workbooks?tags=${encodeURIComponent(maliciousTag)}`)
        .expect(200);

      // Verify workbooks table still exists
      const workbooks = await prisma.workbook.findMany();
      expect(workbooks).toBeDefined();
    });
  });

  describe('XSS Protection Tests', () => {
    it('should sanitize malicious script in user bio', async () => {
      const maliciousBio = '<script>alert("XSS")</script>Hello World';
      
      const response = await request(app.getHttpServer())
        .post('/users/profile')
        .set('Authorization', `Bearer ${validToken}`)
        .send({ bio: maliciousBio })
        .expect(200);

      expect(response.body.bio).not.toContain('<script>');
      expect(response.body.bio).toContain('Hello World');
    });
  });

  describe('Authentication Security Tests', () => {
    it('should prevent brute force attacks', async () => {
      const loginAttempts = Array(10).fill(null).map(() => 
        request(app.getHttpServer())
          .post('/auth/login')
          .send({
            email: 'test@example.com',
            password: 'wrongpassword'
          })
      );

      const responses = await Promise.all(loginAttempts);
      
      // Should eventually return 429 (Too Many Requests)
      const rateLimitedResponses = responses.filter(r => r.status === 429);
      expect(rateLimitedResponses.length).toBeGreaterThan(0);
    });

    it('should prevent JWT token manipulation', async () => {
      const validToken = 'valid.jwt.token';
      const manipulatedToken = validToken.slice(0, -1) + 'x';
      
      await request(app.getHttpServer())
        .get('/users/profile')
        .set('Authorization', `Bearer ${manipulatedToken}`)
        .expect(401);
    });
  });
});
```

---

## Security Monitoring

### Security Event Logging

```typescript
// Security Logger Service
@Injectable()
export class SecurityLoggerService {
  private readonly logger = new Logger(SecurityLoggerService.name);

  logSecurityEvent(event: SecurityEvent) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      event: event.type,
      severity: event.severity,
      userId: event.userId,
      ipAddress: event.ipAddress,
      userAgent: event.userAgent,
      details: event.details,
      metadata: event.metadata
    };

    this.logger.warn(`Security Event: ${event.type}`, logEntry);
    
    // Send to security monitoring system
    this.sendToSecurityMonitoring(logEntry);
  }

  private sendToSecurityMonitoring(logEntry: any) {
    // Implementation for sending to SIEM or security monitoring tool
    console.log('Security event sent to monitoring:', logEntry);
  }
}

// Security Event Types
interface SecurityEvent {
  type: 'LOGIN_FAILURE' | 'SUSPICIOUS_ACTIVITY' | 'UNAUTHORIZED_ACCESS' | 'DATA_BREACH_ATTEMPT';
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  userId?: string;
  ipAddress: string;
  userAgent: string;
  details: string;
  metadata?: any;
}
```

### Rate Limiting & DDoS Protection

```typescript
// Advanced Rate Limiting
@Injectable()
export class AdvancedRateLimitService {
  constructor(private redis: Redis) {}

  async checkRateLimit(
    identifier: string,
    limit: number,
    windowMs: number,
    blockDurationMs?: number
  ): Promise<RateLimitResult> {
    const now = Date.now();
    const window = Math.floor(now / windowMs);
    const key = `rate_limit:${identifier}:${window}`;

    const current = await this.redis.incr(key);
    
    if (current === 1) {
      await this.redis.expire(key, Math.ceil(windowMs / 1000));
    }

    const isBlocked = await this.isBlocked(identifier);
    if (isBlocked) {
      throw new TooManyRequestsException('IP address is temporarily blocked');
    }

    if (current > limit) {
      // Implement progressive blocking
      await this.handleRateLimitExceeded(identifier, current - limit);
      throw new TooManyRequestsException('Rate limit exceeded');
    }

    return {
      allowed: true,
      remaining: Math.max(0, limit - current),
      resetTime: (window + 1) * windowMs
    };
  }

  private async isBlocked(identifier: string): Promise<boolean> {
    const blockKey = `blocked:${identifier}`;
    return await this.redis.exists(blockKey) === 1;
  }

  private async handleRateLimitExceeded(identifier: string, excess: number) {
    const blockDuration = Math.min(excess * 60000, 3600000); // Max 1 hour
    const blockKey = `blocked:${identifier}`;
    
    await this.redis.setex(blockKey, Math.ceil(blockDuration / 1000), 'true');
  }
}
```

---

## Incident Response

### Security Incident Response Plan

```typescript
// Incident Response Service
@Injectable()
export class IncidentResponseService {
  constructor(
    private securityLogger: SecurityLoggerService,
    private emailService: EmailService,
    private adminService: AdminService
  ) {}

  async handleSecurityIncident(incident: SecurityIncident) {
    // Log the incident
    this.securityLogger.logSecurityEvent({
      type: 'SECURITY_INCIDENT',
      severity: incident.severity,
      userId: incident.userId,
      ipAddress: incident.ipAddress,
      userAgent: incident.userAgent,
      details: incident.description,
      metadata: incident
    });

    // Take immediate action based on severity
    switch (incident.severity) {
      case 'CRITICAL':
        await this.handleCriticalIncident(incident);
        break;
      case 'HIGH':
        await this.handleHighSeverityIncident(incident);
        break;
      case 'MEDIUM':
        await this.handleMediumSeverityIncident(incident);
        break;
      case 'LOW':
        await this.handleLowSeverityIncident(incident);
        break;
    }

    // Notify security team
    await this.notifySecurityTeam(incident);
  }

  private async handleCriticalIncident(incident: SecurityIncident) {
    // Immediate actions for critical incidents
    if (incident.userId) {
      await this.adminService.suspendUser(incident.userId, 'Security incident');
    }
    
    await this.blockIPAddress(incident.ipAddress);
    await this.triggerEmergencyResponse();
  }

  private async notifySecurityTeam(incident: SecurityIncident) {
    const notification = {
      to: process.env.SECURITY_TEAM_EMAIL,
      subject: `Security Incident: ${incident.type}`,
      template: 'security-incident',
      data: incident
    };

    await this.emailService.sendEmail(notification);
  }
}
```

---

## References & Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [JWT Security Best Practices](https://tools.ietf.org/html/rfc8725)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [NestJS Security](https://docs.nestjs.com/security/authentication)

---

## Version Control

- **Version:** 1.0.0
- **Last Updated:** 2024-01-01
- **Next Review:** 2024-02-01
- **Maintainer:** Security Team
