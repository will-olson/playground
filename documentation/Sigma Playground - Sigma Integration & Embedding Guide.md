# Sigma Playground - Sigma Integration & Embedding Guide

## Executive Summary
This document provides comprehensive guidance for integrating Sigma workbooks into the Sigma Playground platform using secure JWT-based embedding. It covers the complete workflow from generating embed credentials to implementing secure, responsive embeds with proper error handling and security measures.

**Key Requirements:**
- Admin account type required for embed credential generation
- JWT-based secure embedding (premium feature)
- Client credentials (client ID + embed secret) for JWT signing
- Proper user access management and team assignments

---

## Table of Contents
1. [Sigma Secure Embedding Overview](#sigma-secure-embedding-overview)
2. [Embed Credential Management](#embed-credential-management)
3. [JWT Implementation & Claims](#jwt-implementation--claims)
4. [Embed URL Construction](#embed-url-construction)
5. [User Access Management](#user-access-management)
6. [Iframe Security & Sandboxing](#iframe-security--sandboxing)
7. [Responsive Embedding Strategies](#responsive-embedding-strategies)
8. [Performance Optimization](#performance-optimization)
9. [Error Handling & Fallbacks](#error-handling--fallbacks)
10. [Testing Procedures](#testing-procedures)
11. [Security Considerations](#security-considerations)
12. [Monitoring & Analytics](#monitoring--analytics)
13. [Troubleshooting Guide](#troubleshooting-guide)

---

## Sigma Secure Embedding Overview

### Authentication Flow
The secure embedding process follows this authentication flow:

1. **End user** loads the client application and logs in
2. **Frontend** requests a JWT from the backend
3. **Backend** responds with JWT signed with client secret
4. **Frontend** loads `app.sigmacomputing.com/<org-slug>?:jwt=<jwt>`
5. **Sigma** authenticates user and returns content based on the JWT

### Key Security Features
- **JWT Replay Protection**: Each JWT includes a unique `jti` (JWT ID) that prevents reuse
- **User-Specific Claims**: JWT claims are specific to users, not sessions
- **Automatic User Management**: Sigma can auto-create embed users or use existing internal users
- **Team-Based Access Control**: Users inherit permissions from assigned teams

### Embed URL Patterns

```typescript
// Sigma Secure Embed URL Patterns
export const SIGMA_EMBED_PATTERNS = {
  // JWT-signed secure embed URLs
  secureEmbed: /^https:\/\/app\.sigmacomputing\.com\/[^\/]+\/workbook\/[^\/]+-([^\/]+)(?:\/page\/[^\/]+)?(?:\/element\/[^\/]+)?(?:\/tag\/[^\/]+)?\?:jwt=.*&:embed=true$/,
  
  // Different content types
  workbook: /^https:\/\/app\.sigmacomputing\.com\/[^\/]+\/workbook\/[^\/]+-[^\/]+$/,
  page: /^https:\/\/app\.sigmacomputing\.com\/[^\/]+\/workbook\/[^\/]+-[^\/]+\/page\/[^\/]+$/,
  element: /^https:\/\/app\.sigmacomputing\.com\/[^\/]+\/workbook\/[^\/]+-[^\/]+\/element\/[^\/]+$/,
  askSigma: /^https:\/\/app\.sigmacomputing\.com\/[^\/]+\/ask$/,
  
  // Required JWT parameters
  requiredJWTParams: ['jwt'],
  requiredEmbedParams: [':embed=true'],
  
  // Optional URL parameters
  optionalParams: ['hide_bookmarks', 'hide_folder_navigation', 'hide_menu', 'hide_tooltip', 'lng', 'lng_variant', 'menu_position', 'responsive_height', 'theme']
};

// Embed URL Validation Service
@Injectable()
export class SigmaEmbedValidationService {
  constructor(private httpService: HttpService) {}

  async validateEmbedUrl(url: string): Promise<EmbedValidationResult> {
    try {
      // Parse URL
      const parsedUrl = new URL(url);
      
      // Validate protocol
      if (!SIGMA_EMBED_PATTERNS.protocols.includes(parsedUrl.protocol)) {
        return {
          isValid: false,
          error: 'Only HTTPS URLs are supported',
          code: 'INVALID_PROTOCOL'
        };
      }

      // Validate domain
      const isValidDomain = SIGMA_EMBED_PATTERNS.domains.some(domain => {
        if (domain.startsWith('*.')) {
          const baseDomain = domain.substring(2);
          return parsedUrl.hostname.endsWith(baseDomain);
        }
        return parsedUrl.hostname === domain;
      });

      if (!isValidDomain) {
        return {
          isValid: false,
          error: 'Invalid Sigma domain',
          code: 'INVALID_DOMAIN'
        };
      }

      // Validate path pattern
      const pathMatch = parsedUrl.pathname.match(SIGMA_EMBED_PATTERNS.standard);
      if (!pathMatch) {
        return {
          isValid: false,
          error: 'Invalid embed URL pattern',
          code: 'INVALID_PATTERN'
        };
      }

      // Test embed accessibility
      const accessibilityTest = await this.testEmbedAccessibility(url);
      if (!accessibilityTest.accessible) {
        return {
          isValid: false,
          error: accessibilityTest.error,
          code: 'INACCESSIBLE_EMBED'
        };
      }

      return {
        isValid: true,
        workbookId: this.extractWorkbookId(url),
        embedType: this.determineEmbedType(url),
        metadata: await this.extractEmbedMetadata(url)
      };

    } catch (error) {
      return {
        isValid: false,
        error: 'Invalid URL format',
        code: 'INVALID_URL'
      };
    }
  }

  private async testEmbedAccessibility(url: string): Promise<AccessibilityTestResult> {
    try {
      const response = await this.httpService.head(url).toPromise();
      
      return {
        accessible: response.status === 200,
        statusCode: response.status,
        contentType: response.headers['content-type'],
        error: response.status !== 200 ? `HTTP ${response.status}` : null
      };
    } catch (error) {
      return {
        accessible: false,
        error: error.message,
        statusCode: null,
        contentType: null
      };
    }
  }

  private extractWorkbookId(url: string): string {
    const match = url.match(/\/(embed|public|viz)\/([a-zA-Z0-9-_]+)/);
    return match ? match[2] : null;
  }

  private determineEmbedType(url: string): EmbedType {
    if (url.includes('/embed/')) return 'embed';
    if (url.includes('/public/')) return 'public';
    if (url.includes('/viz/')) return 'viz';
    return 'unknown';
  }

  private async extractEmbedMetadata(url: string): Promise<EmbedMetadata> {
    // Extract metadata from URL parameters
    const parsedUrl = new URL(url);
    const params = parsedUrl.searchParams;
    
    return {
      theme: params.get('theme') || 'default',
      locale: params.get('locale') || 'en',
      toolbar: params.get('toolbar') !== 'false',
      fullscreen: params.get('fullscreen') === 'true',
      width: params.get('width') || '100%',
      height: params.get('height') || '600px'
    };
  }
}
```

### Sigma API Integration

```typescript
// Sigma API Service
@Injectable()
export class SigmaApiService {
  constructor(private httpService: HttpService) {}

  async getWorkbookMetadata(workbookId: string): Promise<WorkbookMetadata> {
    try {
      // Attempt to fetch metadata from Sigma API
      const response = await this.httpService.get(`/api/workbooks/${workbookId}/metadata`).toPromise();
      
      return {
        title: response.data.title,
        description: response.data.description,
        author: response.data.author,
        created_at: response.data.created_at,
        updated_at: response.data.updated_at,
        thumbnail_url: response.data.thumbnail_url,
        tags: response.data.tags || []
      };
    } catch (error) {
      // Fallback to URL-based extraction
      return this.extractMetadataFromUrl(workbookId);
    }
  }

  async generateEmbedUrl(workbookId: string, options: EmbedOptions = {}): Promise<string> {
    const baseUrl = process.env.SIGMA_EMBED_BASE_URL || 'https://app.sigma.com';
    const embedPath = options.type === 'public' ? 'public' : 'embed';
    
    const url = new URL(`/${embedPath}/${workbookId}`, baseUrl);
    
    // Add options as query parameters
    Object.entries(options).forEach(([key, value]) => {
      if (value !== undefined && key !== 'type') {
        url.searchParams.set(key, value.toString());
      }
    });

    return url.toString();
  }

  private extractMetadataFromUrl(workbookId: string): WorkbookMetadata {
    // Basic metadata extraction when API is not available
    return {
      title: `Workbook ${workbookId}`,
      description: 'Sigma workbook',
      author: 'Unknown',
      created_at: new Date(),
      updated_at: new Date(),
      thumbnail_url: null,
      tags: []
    };
  }
}
```

---

## Embed Credential Management

### Generating Client Credentials

```typescript
// Embed Credential Management Service
@Injectable()
export class EmbedCredentialService {
  constructor(private configService: ConfigService) {}

  async generateClientCredentials(adminUserId: string): Promise<EmbedCredentials> {
    // This would typically call Sigma's API to generate credentials
    // For now, we'll use environment variables for the credentials
    
    const clientId = this.configService.get<string>('SIGMA_CLIENT_ID');
    const clientSecret = this.configService.get<string>('SIGMA_CLIENT_SECRET');
    
    if (!clientId || !clientSecret) {
      throw new Error('Sigma embed credentials not configured');
    }

    return {
      clientId,
      clientSecret,
      ownerId: adminUserId,
      privileges: ['embedding'],
      createdAt: new Date(),
      isActive: true
    };
  }

  async revokeCredentials(clientId: string): Promise<void> {
    // Revoke credentials in Sigma
    // This would invalidate all existing embeds using these credentials
    console.log(`Revoking credentials for client ID: ${clientId}`);
  }
}

interface EmbedCredentials {
  clientId: string;
  clientSecret: string;
  ownerId: string;
  privileges: string[];
  createdAt: Date;
  isActive: boolean;
}
```

### Security Rules for Credential Ownership

```typescript
// Credential Ownership Security
export class CredentialOwnershipService {
  static validateCredentialUsage(ownerAccountType: string, targetUser: string): boolean {
    // If owner is admin, can generate JWTs for any user
    if (ownerAccountType === 'admin') {
      return true;
    }
    
    // Non-admin users can only generate JWTs for themselves
    return false;
  }

  static getRequiredPermissions(): string[] {
    return ['Admin account type', 'Embedding privileges'];
  }
}
```

---

## JWT Implementation & Claims

### Required JWT Claims

```typescript
// JWT Claims Interface
interface SigmaJWTClaims {
  // Required claims
  sub: string;        // User email address (RFC-1035 compliant)
  jti: string;        // Unique JWT ID for replay protection
  iat: number;        // Issued at time (seconds from epoch)
  exp: number;        // Expiration time (max 30 days from iat)
  
  // Header claims
  alg: 'HS256';       // Algorithm (must be HS256)
  kid: string;        // Client ID (embed client ID)
  
  // Optional claims
  iss?: string;       // Issuer (embed client ID)
  aud?: string;       // Audience (must be 'sigmacomputing' for ver 1.1)
  ver?: '1.0' | '1.1'; // JWT version (defaults to 1.0)
  
  // User management claims (for embed users only)
  first_name?: string;
  last_name?: string;
  user_attributes?: Record<string, string>;
  account_type?: string;
  teams?: string[];
  
  // Connection claims (for ver 1.1 only)
  oauth_token?: string;                    // Encrypted OAuth token
  connection_oauth_tokens?: Record<string, string>; // Encrypted connection tokens
  eval_connection_id?: string;             // Connection ID override
}

// JWT Generation Service
@Injectable()
export class SigmaJWTService {
  constructor(
    private configService: ConfigService,
    private cryptoService: CryptoService
  ) {}

  async generateJWT(userEmail: string, options: JWTGenerationOptions): Promise<string> {
    const clientId = this.configService.get<string>('SIGMA_CLIENT_ID');
    const clientSecret = this.configService.get<string>('SIGMA_CLIENT_SECRET');
    
    const now = Math.floor(Date.now() / 1000);
    const expirationTime = now + Math.min(options.sessionLength || 3600, 2592000); // Max 30 days
    
    const claims: SigmaJWTClaims = {
      sub: userEmail,
      jti: uuidv4(), // Unique JWT ID for replay protection
      iat: now,
      exp: expirationTime,
      alg: 'HS256',
      kid: clientId,
      iss: clientId,
      ver: '1.1',
      aud: 'sigmacomputing'
    };

    // Add optional claims for embed users
    if (options.isEmbedUser) {
      claims.first_name = options.firstName;
      claims.last_name = options.lastName;
      claims.user_attributes = options.userAttributes;
      claims.account_type = options.accountType;
      claims.teams = options.teams;
    }

    // Add connection tokens if provided (for ver 1.1)
    if (options.oauthToken) {
      claims.oauth_token = await this.encryptOAuthToken(options.oauthToken, clientSecret);
    }

    if (options.connectionTokens) {
      const encryptedTokens: Record<string, string> = {};
      for (const [connectionId, token] of Object.entries(options.connectionTokens)) {
        encryptedTokens[connectionId] = await this.encryptOAuthToken(token, clientSecret);
      }
      claims.connection_oauth_tokens = encryptedTokens;
    }

    if (options.evalConnectionId) {
      claims.eval_connection_id = options.evalConnectionId;
    }

    return jwt.sign(claims, clientSecret, {
      algorithm: 'HS256',
      header: {
        kid: clientId,
        alg: 'HS256'
      }
    });
  }

  private async encryptOAuthToken(token: string, secret: string): Promise<string> {
    // Use Sigma's Node.js Embed SDK for token encryption
    // This is a placeholder - actual implementation would use the SDK
    return this.cryptoService.encrypt(token, secret);
  }
}

interface JWTGenerationOptions {
  sessionLength?: number;
  isEmbedUser?: boolean;
  firstName?: string;
  lastName?: string;
  userAttributes?: Record<string, string>;
  accountType?: string;
  teams?: string[];
  oauthToken?: string;
  connectionTokens?: Record<string, string>;
  evalConnectionId?: string;
}
```

---

## Embed URL Construction

### URL Structure and Parameters

```typescript
// Embed URL Construction Service
@Injectable()
export class EmbedURLService {
  constructor(
    private configService: ConfigService,
    private jwtService: SigmaJWTService
  ) {}

  async buildEmbedURL(
    workbookPath: string,
    userEmail: string,
    options: EmbedURLOptions = {}
  ): Promise<string> {
    const baseUrl = this.configService.get<string>('SIGMA_BASE_URL', 'https://app.sigmacomputing.com');
    const orgSlug = this.configService.get<string>('SIGMA_ORG_SLUG');
    
    // Generate JWT
    const jwt = await this.jwtService.generateJWT(userEmail, options.jwtOptions);
    
    // Build base URL
    const embedPath = this.buildEmbedPath(workbookPath, orgSlug);
    const url = new URL(embedPath, baseUrl);
    
    // Add JWT and embed parameters
    url.searchParams.set(':jwt', jwt);
    url.searchParams.set(':embed', 'true');
    
    // Add optional parameters
    this.addOptionalParameters(url, options);
    
    return url.toString();
  }

  private buildEmbedPath(workbookPath: string, orgSlug: string): string {
    // Convert API path to embed path
    // API: /workbook/workbookName/workbookId
    // Embed: /workbook/workbookName-workbookId
    
    const pathParts = workbookPath.split('/');
    if (pathParts[0] === 'workbook' && pathParts.length >= 3) {
      const workbookName = pathParts[1];
      const workbookId = pathParts[2];
      let embedPath = `/${orgSlug}/workbook/${workbookName}-${workbookId}`;
      
      // Add additional path segments (page, element, tag)
      if (pathParts.length > 3) {
        embedPath += '/' + pathParts.slice(3).join('/');
      }
      
      return embedPath;
    }
    
    throw new Error('Invalid workbook path format');
  }

  private addOptionalParameters(url: URL, options: EmbedURLOptions): void {
    const {
      hideBookmarks,
      hideFolderNavigation,
      hideMenu,
      hideTooltip,
      language,
      languageVariant,
      menuPosition,
      responsiveHeight,
      theme,
      controlValues
    } = options;

    if (hideBookmarks) url.searchParams.set('hide_bookmarks', 'true');
    if (hideFolderNavigation) url.searchParams.set('hide_folder_navigation', 'true');
    if (hideMenu) url.searchParams.set('hide_menu', 'true');
    if (hideTooltip) url.searchParams.set('hide_tooltip', 'true');
    if (language) url.searchParams.set('lng', language);
    if (languageVariant) url.searchParams.set('lng_variant', languageVariant);
    if (menuPosition) url.searchParams.set('menu_position', menuPosition);
    if (responsiveHeight) url.searchParams.set('responsive_height', 'true');
    if (theme) url.searchParams.set('theme', theme);
    
    // Add control values
    if (controlValues) {
      for (const [controlId, value] of Object.entries(controlValues)) {
        url.searchParams.set(controlId, value);
      }
    }
  }
}

interface EmbedURLOptions {
  jwtOptions?: JWTGenerationOptions;
  hideBookmarks?: boolean;
  hideFolderNavigation?: boolean;
  hideMenu?: boolean;
  hideTooltip?: boolean;
  language?: string;
  languageVariant?: string;
  menuPosition?: 'top' | 'bottom' | 'none';
  responsiveHeight?: boolean;
  theme?: string;
  controlValues?: Record<string, string>;
}
```

---

## User Access Management

### User Management Strategies

```typescript
// User Access Management Service
@Injectable()
export class UserAccessService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService
  ) {}

  async manageEmbedUsers(strategy: 'automatic' | 'manual'): Promise<void> {
    // Configure user management strategy in Sigma
    if (strategy === 'automatic') {
      // Enable automatic embed user creation
      await this.enableAutomaticUserCreation();
    } else {
      // Disable automatic user creation - requires manual provisioning
      await this.disableAutomaticUserCreation();
    }
  }

  async createEmbedUser(userData: EmbedUserData): Promise<EmbedUser> {
    const embedUser = await this.prisma.embedUser.create({
      data: {
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        accountType: userData.accountType,
        teams: userData.teams,
        userAttributes: userData.userAttributes,
        isActive: true,
        createdAt: new Date()
      }
    });

    return embedUser;
  }

  async assignUserToTeam(userId: string, teamId: string): Promise<void> {
    await this.prisma.embedUserTeam.create({
      data: {
        userId,
        teamId
      }
    });
  }

  async grantWorkbookAccess(teamId: string, workbookId: string, accessLevel: string): Promise<void> {
    await this.prisma.workbookAccess.create({
      data: {
        teamId,
        workbookId,
        accessLevel,
        grantedAt: new Date()
      }
    });
  }

  private async enableAutomaticUserCreation(): Promise<void> {
    // This would call Sigma's API to enable automatic user creation
    console.log('Enabling automatic embed user creation');
  }

  private async disableAutomaticUserCreation(): Promise<void> {
    // This would call Sigma's API to disable automatic user creation
    console.log('Disabling automatic embed user creation');
  }
}

interface EmbedUserData {
  email: string;
  firstName?: string;
  lastName?: string;
  accountType: string;
  teams: string[];
  userAttributes?: Record<string, string>;
}

interface EmbedUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  accountType: string;
  teams: string[];
  userAttributes?: Record<string, string>;
  isActive: boolean;
  createdAt: Date;
}
```

---

## Embed URL Validation

### Comprehensive Validation

```typescript
// Embed URL Validator
export class EmbedUrlValidator {
  private static readonly VALIDATION_RULES = {
    protocol: /^https:$/,
    domain: /^.*\.sigma\.(com|io)$/,
    path: /^\/(embed|public|viz)\/[a-zA-Z0-9-_]+/,
    maxLength: 1000,
    allowedParams: ['theme', 'locale', 'toolbar', 'fullscreen', 'width', 'height']
  };

  static validate(url: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Basic URL validation
    try {
      const parsedUrl = new URL(url);
      
      // Protocol validation
      if (!this.VALIDATION_RULES.protocol.test(parsedUrl.protocol)) {
        errors.push('Only HTTPS URLs are allowed');
      }

      // Domain validation
      if (!this.VALIDATION_RULES.domain.test(parsedUrl.hostname)) {
        errors.push('Invalid Sigma domain');
      }

      // Path validation
      if (!this.VALIDATION_RULES.path.test(parsedUrl.pathname)) {
        errors.push('Invalid embed path format');
      }

      // Length validation
      if (url.length > this.VALIDATION_RULES.maxLength) {
        errors.push('URL exceeds maximum length');
      }

      // Parameter validation
      const invalidParams = this.validateParameters(parsedUrl.searchParams);
      if (invalidParams.length > 0) {
        warnings.push(`Unknown parameters: ${invalidParams.join(', ')}`);
      }

      // Security validation
      const securityIssues = this.validateSecurity(parsedUrl);
      if (securityIssues.length > 0) {
        errors.push(...securityIssues);
      }

    } catch (error) {
      errors.push('Invalid URL format');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  private static validateParameters(params: URLSearchParams): string[] {
    const invalidParams: string[] = [];
    
    for (const [key] of params) {
      if (!this.VALIDATION_RULES.allowedParams.includes(key)) {
        invalidParams.push(key);
      }
    }

    return invalidParams;
  }

  private static validateSecurity(url: URL): string[] {
    const issues: string[] = [];

    // Check for potentially dangerous parameters
    const dangerousParams = ['script', 'javascript', 'data', 'vbscript'];
    for (const [key, value] of url.searchParams) {
      if (dangerousParams.some(param => 
        key.toLowerCase().includes(param) || 
        value.toLowerCase().includes(param)
      )) {
        issues.push(`Potentially dangerous parameter: ${key}`);
      }
    }

    // Check for suspicious characters
    if (/[<>'"]/.test(url.href)) {
      issues.push('URL contains potentially dangerous characters');
    }

    return issues;
  }
}
```

### Real-time Validation

```typescript
// Real-time URL validation hook
export function useEmbedUrlValidation() {
  const [url, setUrl] = useState('');
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const [isValidating, setIsValidating] = useState(false);

  const validateUrl = useCallback(async (urlToValidate: string) => {
    if (!urlToValidate) {
      setValidation(null);
      return;
    }

    setIsValidating(true);
    
    try {
      // Client-side validation
      const clientValidation = EmbedUrlValidator.validate(urlToValidate);
      
      if (!clientValidation.isValid) {
        setValidation(clientValidation);
        setIsValidating(false);
        return;
      }

      // Server-side validation
      const serverValidation = await validateEmbedUrlOnServer(urlToValidate);
      setValidation(serverValidation);
      
    } catch (error) {
      setValidation({
        isValid: false,
        errors: ['Validation failed'],
        warnings: []
      });
    } finally {
      setIsValidating(false);
    }
  }, []);

  // Debounced validation
  const debouncedValidate = useMemo(
    () => debounce(validateUrl, 500),
    [validateUrl]
  );

  useEffect(() => {
    debouncedValidate(url);
  }, [url, debouncedValidate]);

  return {
    url,
    setUrl,
    validation,
    isValidating
  };
}
```

---

## Iframe Security & Sandboxing

### Secure Iframe Implementation

```typescript
// Secure Iframe Component
interface SecureIframeProps {
  src: string;
  title: string;
  width?: string | number;
  height?: string | number;
  allowFullscreen?: boolean;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export function SecureIframe({
  src,
  title,
  width = '100%',
  height = '600px',
  allowFullscreen = true,
  onLoad,
  onError
}: SecureIframeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback((error: ErrorEvent) => {
    setHasError(true);
    onError?.(new Error('Iframe failed to load'));
  }, [onError]);

  // Security attributes
  const securityAttributes = {
    sandbox: [
      'allow-scripts',
      'allow-same-origin',
      'allow-forms',
      'allow-popups',
      'allow-popups-to-escape-sandbox',
      allowFullscreen ? 'allow-fullscreen' : '',
      'allow-presentation'
    ].filter(Boolean).join(' '),
    
    referrerPolicy: 'strict-origin-when-cross-origin',
    
    loading: 'lazy' as const,
    
    // Content Security Policy
    'data-csp': 'frame-src https://*.sigma.com; script-src \'self\' https://*.sigma.com; style-src \'self\' \'unsafe-inline\' https://*.sigma.com;'
  };

  if (hasError) {
    return (
      <div className="flex items-center justify-center h-96 bg-muted rounded-lg">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Failed to load Sigma workbook</p>
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2"
            onClick={() => {
              setHasError(false);
              setIsLoaded(false);
            }}
          >
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-lg">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Loading workbook...</p>
          </div>
        </div>
      )}
      
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        width={width}
        height={height}
        className={`w-full rounded-lg border ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        {...securityAttributes}
      />
    </div>
  );
}
```

### Content Security Policy

```typescript
// CSP Configuration for Sigma Embeds
export const sigmaCSPConfig = {
  directives: {
    frameSrc: [
      "'self'",
      "https://*.sigma.com",
      "https://app.sigma.com",
      "https://sigma.io"
    ],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'", // Required for Sigma embeds
      "https://*.sigma.com",
      "https://cdn.sigma.com"
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'", // Required for Sigma styling
      "https://*.sigma.com",
      "https://fonts.googleapis.com"
    ],
    fontSrc: [
      "'self'",
      "https://*.sigma.com",
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
      "https://*.sigma.com",
      "wss://*.sigma.com"
    ],
    objectSrc: ["'none'"],
    baseUri: ["'self'"],
    formAction: ["'self'"]
  }
};

// CSP Middleware
@Injectable()
export class CSPMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const cspHeader = this.buildCSPHeader();
    res.setHeader('Content-Security-Policy', cspHeader);
    next();
  }

  private buildCSPHeader(): string {
    const directives = Object.entries(sigmaCSPConfig.directives)
      .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
      .join('; ');
    
    return `${directives}; upgrade-insecure-requests;`;
  }
}
```

---

## Responsive Embedding Strategies

### Responsive Container

```typescript
// Responsive Embed Container
interface ResponsiveEmbedProps {
  embedUrl: string;
  title: string;
  aspectRatio?: number;
  minHeight?: number;
  maxHeight?: number;
}

export function ResponsiveEmbed({
  embedUrl,
  title,
  aspectRatio = 16 / 9,
  minHeight = 300,
  maxHeight = 800
}: ResponsiveEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const calculatedHeight = Math.min(
          Math.max(containerWidth / aspectRatio, minHeight),
          maxHeight
        );
        
        setDimensions({
          width: containerWidth,
          height: calculatedHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [aspectRatio, minHeight, maxHeight]);

  return (
    <div 
      ref={containerRef}
      className="w-full relative"
      style={{ height: dimensions.height }}
    >
      <SecureIframe
        src={embedUrl}
        title={title}
        width="100%"
        height={dimensions.height}
      />
    </div>
  );
}
```

### Mobile Optimization

```typescript
// Mobile-optimized embed
export function MobileOptimizedEmbed({ embedUrl, title }: { embedUrl: string; title: string }) {
  const { isMobile, isTablet } = useResponsive();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenToggle = useCallback(() => {
    setIsFullscreen(!isFullscreen);
  }, [isFullscreen]);

  if (isMobile) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Button
            variant="outline"
            size="sm"
            onClick={handleFullscreenToggle}
          >
            <Maximize2 className="h-4 w-4 mr-2" />
            {isFullscreen ? 'Exit' : 'Fullscreen'}
          </Button>
        </div>
        
        <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-background' : ''}`}>
          <SecureIframe
            src={embedUrl}
            title={title}
            width="100%"
            height={isFullscreen ? '100vh' : '300px'}
          />
        </div>
      </div>
    );
  }

  return (
    <ResponsiveEmbed
      embedUrl={embedUrl}
      title={title}
      aspectRatio={isTablet ? 4 / 3 : 16 / 9}
    />
  );
}
```

---

## Performance Optimization

### Lazy Loading Implementation

```typescript
// Lazy Loading Hook
export function useLazyEmbed(embedUrl: string, threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsVisible(true);
          setIsLoaded(true);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, isLoaded]);

  return {
    elementRef,
    isVisible,
    isLoaded
  };
}

// Lazy Loaded Embed Component
export function LazyLoadedEmbed({ embedUrl, title }: { embedUrl: string; title: string }) {
  const { elementRef, isVisible, isLoaded } = useLazyEmbed(embedUrl);

  return (
    <div ref={elementRef} className="w-full">
      {isVisible ? (
        <SecureIframe
          src={embedUrl}
          title={title}
          width="100%"
          height="600px"
        />
      ) : (
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          <div className="text-center">
            <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Click to load workbook</p>
          </div>
        </div>
      )}
    </div>
  );
}
```

### Embed Preloading

```typescript
// Embed Preloader Service
@Injectable()
export class EmbedPreloaderService {
  private preloadedEmbeds = new Set<string>();

  async preloadEmbed(embedUrl: string): Promise<void> {
    if (this.preloadedEmbeds.has(embedUrl)) {
      return;
    }

    try {
      // Create hidden iframe to preload
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = embedUrl;
      
      document.body.appendChild(iframe);
      
      // Wait for load or timeout
      await Promise.race([
        new Promise<void>((resolve) => {
          iframe.onload = () => resolve();
        }),
        new Promise<void>((resolve) => {
          setTimeout(() => resolve(), 5000); // 5 second timeout
        })
      ]);

      document.body.removeChild(iframe);
      this.preloadedEmbeds.add(embedUrl);
      
    } catch (error) {
      console.warn('Failed to preload embed:', embedUrl, error);
    }
  }

  isPreloaded(embedUrl: string): boolean {
    return this.preloadedEmbeds.has(embedUrl);
  }
}
```

---

## Error Handling & Fallbacks

### Sigma-Specific Error Codes

```typescript
// Sigma Embed Error Handler
export class SigmaEmbedErrorHandler {
  static handleError(error: SigmaEmbedError): ErrorHandlingResult {
    switch (error.code) {
      // General error codes
      case 'EEXIST':
        return {
          fallback: 'placeholder',
          message: 'Duplicate record detected. User or team already exists.',
          retryable: false
        };
      
      case 'EPERM':
        return {
          fallback: 'placeholder',
          message: 'Operation not permitted. User does not exist and automatic user creation is disabled.',
          retryable: false
        };
      
      case 'ESTALE':
        return {
          fallback: 'placeholder',
          message: 'Content is no longer available. The workbook, page, or element may have been deleted.',
          retryable: false
        };
      
      case 'ENOENT':
        return {
          fallback: 'placeholder',
          message: 'Workbook not found or user is deactivated.',
          retryable: false
        };
      
      case 'EACCES':
        return {
          fallback: 'placeholder',
          message: 'Permission denied. Check workbook sharing and user permissions.',
          retryable: false
        };
      
      case 'EINVAL':
        return {
          fallback: 'placeholder',
          message: 'Invalid argument. Check URL format and JWT validity.',
          retryable: false
        };
      
      case 'ETIMEDOUT':
        return {
          fallback: 'retry',
          message: 'Request timed out. The data warehouse may be overloaded.',
          retryable: true
        };
      
      case 'NETWORK':
        return {
          fallback: 'retry',
          message: 'Unable to connect to Sigma. Check your network connection.',
          retryable: true
        };
      
      case 'UNKNOWN':
        return {
          fallback: 'placeholder',
          message: 'An unexpected error occurred.',
          retryable: true
        };
      
      // Session-specific errors
      case 'SESSION_EXPIRED':
        return {
          fallback: 'refresh',
          message: 'Session expired. Reload the page.',
          retryable: true
        };
      
      case 'INVALID_CLIENT_ID':
        return {
          fallback: 'placeholder',
          message: 'Invalid client ID. Contact administrator.',
          retryable: false
        };
      
      case 'INVALID_SUB_FIELD':
        return {
          fallback: 'placeholder',
          message: 'Invalid email address in JWT. Check user email format.',
          retryable: false
        };
      
      case 'INTERNAL_USER_CLAIMS_ERROR':
        return {
          fallback: 'placeholder',
          message: 'Cannot update account type for internal users.',
          retryable: false
        };
      
      default:
        return {
          fallback: 'placeholder',
          message: 'Unable to load workbook.',
          retryable: true
        };
    }
  }

  static getErrorMessage(errorCode: string): string {
    const errorMessages: Record<string, string> = {
      'EEXIST': 'Duplicate record detected. User or team already exists.',
      'EPERM': 'Operation not permitted. User does not exist and automatic user creation is disabled.',
      'ESTALE': 'Content is no longer available. The workbook, page, or element may have been deleted.',
      'ENOENT': 'Workbook not found or user is deactivated.',
      'EACCES': 'Permission denied. Check workbook sharing and user permissions.',
      'EINVAL': 'Invalid argument. Check URL format and JWT validity.',
      'ETIMEDOUT': 'Request timed out. The data warehouse may be overloaded.',
      'NETWORK': 'Unable to connect to Sigma. Check your network connection.',
      'UNKNOWN': 'An unexpected error occurred.',
      'SESSION_EXPIRED': 'Session expired. Reload the page.',
      'INVALID_CLIENT_ID': 'Invalid client ID. Contact administrator.',
      'INVALID_SUB_FIELD': 'Invalid email address in JWT. Check user email format.',
      'INTERNAL_USER_CLAIMS_ERROR': 'Cannot update account type for internal users.'
    };

    return errorMessages[errorCode] || 'An unexpected error occurred.';
  }
}

interface SigmaEmbedError {
  code: string;
  message?: string;
  details?: any;
}

interface ErrorHandlingResult {
  fallback: 'placeholder' | 'retry' | 'refresh' | 'proxy';
  message: string;
  retryable: boolean;
}

// Fallback Components
export function EmbedFallback({ 
  error, 
  onRetry, 
  embedUrl 
}: { 
  error: EmbedError; 
  onRetry: () => void; 
  embedUrl: string;
}) {
  const errorHandling = EmbedErrorHandler.handleError(error);

  return (
    <div className="flex items-center justify-center h-96 bg-muted rounded-lg">
      <div className="text-center space-y-4">
        <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto" />
        <div>
          <h3 className="text-lg font-semibold mb-2">Unable to Load Workbook</h3>
          <p className="text-muted-foreground mb-4">{errorHandling.message}</p>
          
          {errorHandling.retryable && (
            <div className="space-x-2">
              <Button onClick={onRetry} variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Retry
              </Button>
              <Button asChild variant="outline">
                <a 
                  href={embedUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open in New Tab
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
```

### Proxy Fallback

```typescript
// Embed Proxy Service
@Injectable()
export class EmbedProxyService {
  constructor(private httpService: HttpService) {}

  async proxyEmbed(embedUrl: string): Promise<string> {
    try {
      // Create proxy endpoint
      const proxyUrl = `/api/embed/proxy?url=${encodeURIComponent(embedUrl)}`;
      
      // Test proxy accessibility
      const response = await this.httpService.head(proxyUrl).toPromise();
      
      if (response.status === 200) {
        return proxyUrl;
      }
      
      throw new Error(`Proxy returned status ${response.status}`);
      
    } catch (error) {
      throw new Error(`Proxy failed: ${error.message}`);
    }
  }
}

// Proxy Controller
@Controller('embed')
export class EmbedProxyController {
  constructor(private embedProxyService: EmbedProxyService) {}

  @Get('proxy')
  async proxyEmbed(@Query('url') url: string, @Res() res: Response) {
    try {
      // Validate URL
      const validation = await this.validateEmbedUrl(url);
      if (!validation.isValid) {
        return res.status(400).json({ error: 'Invalid embed URL' });
      }

      // Proxy the request
      const response = await this.httpService.get(url).toPromise();
      
      res.set({
        'Content-Type': response.headers['content-type'],
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "frame-ancestors 'self'"
      });
      
      res.send(response.data);
      
    } catch (error) {
      res.status(500).json({ error: 'Failed to proxy embed' });
    }
  }
}
```

---

## Testing Procedures

### Embed Sandbox Testing

```typescript
// Embed Sandbox Testing Service
@Injectable()
export class EmbedSandboxService {
  constructor(private configService: ConfigService) {}

  async testEmbedInSandbox(config: SandboxTestConfig): Promise<SandboxTestResult> {
    // This would integrate with Sigma's embed sandbox API
    // For now, we'll simulate the testing process
    
    const testUrl = await this.buildTestURL(config);
    
    try {
      // Test the embed URL
      const response = await fetch(testUrl, {
        method: 'HEAD',
        headers: {
          'User-Agent': 'Sigma-Embed-Test/1.0'
        }
      });

      return {
        success: response.ok,
        statusCode: response.status,
        testUrl,
        errors: response.ok ? [] : [`HTTP ${response.status}`]
      };
    } catch (error) {
      return {
        success: false,
        statusCode: 0,
        testUrl,
        errors: [error.message]
      };
    }
  }

  private async buildTestURL(config: SandboxTestConfig): Promise<string> {
    const baseUrl = this.configService.get<string>('SIGMA_BASE_URL');
    const orgSlug = this.configService.get<string>('SIGMA_ORG_SLUG');
    
    // Build test URL with sandbox parameters
    const url = new URL(`/${orgSlug}/workbook/${config.workbookPath}`, baseUrl);
    
    // Add sandbox-specific parameters
    url.searchParams.set(':jwt', config.jwt);
    url.searchParams.set(':embed', 'true');
    url.searchParams.set(':sandbox', 'true');
    
    return url.toString();
  }
}

interface SandboxTestConfig {
  workbookPath: string;
  jwt: string;
  clientCredentials: string;
  controls?: Record<string, string>;
  theme?: string;
  menuPosition?: string;
  mode: 'JWT' | 'Secure';
  email?: string;
  teams?: string[];
  accountType?: string;
  userAttributes?: Record<string, string>;
  sessionLength?: number;
  versionTag?: string;
  hideTooltips?: boolean;
  disableMobileView?: boolean;
}

interface SandboxTestResult {
  success: boolean;
  statusCode: number;
  testUrl: string;
  errors: string[];
}
```

### Comprehensive Testing Suite

```typescript
// Sigma Embed Testing Suite
describe('Sigma Secure Embed Integration', () => {
  let app: INestApplication;
  let embedValidationService: SigmaEmbedValidationService;
  let jwtService: SigmaJWTService;
  let embedURLService: EmbedURLService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    embedValidationService = moduleFixture.get<SigmaEmbedValidationService>(SigmaEmbedValidationService);
    jwtService = moduleFixture.get<SigmaJWTService>(SigmaJWTService);
    embedURLService = moduleFixture.get<EmbedURLService>(EmbedURLService);
    
    await app.init();
  });

  describe('JWT Generation', () => {
    it('should generate valid JWT with required claims', async () => {
      const userEmail = 'test@example.com';
      const options: JWTGenerationOptions = {
        sessionLength: 3600,
        isEmbedUser: true,
        accountType: 'viewer',
        teams: ['test-team']
      };

      const jwt = await jwtService.generateJWT(userEmail, options);
      
      // Decode and verify JWT
      const decoded = jwt.decode(jwt) as any;
      
      expect(decoded.sub).toBe(userEmail);
      expect(decoded.iat).toBeDefined();
      expect(decoded.exp).toBeDefined();
      expect(decoded.jti).toBeDefined();
      expect(decoded.ver).toBe('1.1');
      expect(decoded.aud).toBe('sigmacomputing');
    });

    it('should reject invalid email formats', async () => {
      const invalidEmails = [
        'invalid-email',
        'test@',
        '@example.com',
        'test user@example.com', // Contains space
        'test_user@example.com'  // Contains underscore
      ];

      for (const email of invalidEmails) {
        await expect(jwtService.generateJWT(email, {})).rejects.toThrow();
      }
    });

    it('should enforce maximum session length', async () => {
      const userEmail = 'test@example.com';
      const options: JWTGenerationOptions = {
        sessionLength: 2592001 // 30 days + 1 second
      };

      const jwt = await jwtService.generateJWT(userEmail, options);
      const decoded = jwt.decode(jwt) as any;
      
      // Should be capped at 30 days
      expect(decoded.exp - decoded.iat).toBeLessThanOrEqual(2592000);
    });
  });

  describe('Embed URL Construction', () => {
    it('should build correct embed URLs for different content types', async () => {
      const testCases = [
        {
          path: 'workbook/sales-dashboard/abc123',
          expectedPattern: /workbook\/sales-dashboard-abc123/
        },
        {
          path: 'workbook/sales-dashboard/abc123/page/page456',
          expectedPattern: /workbook\/sales-dashboard-abc123\/page\/page456/
        },
        {
          path: 'workbook/sales-dashboard/abc123/element/elem789',
          expectedPattern: /workbook\/sales-dashboard-abc123\/element\/elem789/
        }
      ];

      for (const testCase of testCases) {
        const url = await embedURLService.buildEmbedURL(
          testCase.path,
          'test@example.com',
          {}
        );
        
        expect(url).toMatch(testCase.expectedPattern);
        expect(url).toContain(':jwt=');
        expect(url).toContain(':embed=true');
      }
    });

    it('should add optional parameters correctly', async () => {
      const options: EmbedURLOptions = {
        hideBookmarks: true,
        hideMenu: true,
        theme: 'Dark',
        menuPosition: 'bottom',
        responsiveHeight: true,
        controlValues: {
          'region-control': 'North America',
          'date-range': '2024-01-01,2024-12-31'
        }
      };

      const url = await embedURLService.buildEmbedURL(
        'workbook/test/abc123',
        'test@example.com',
        options
      );

      expect(url).toContain('hide_bookmarks=true');
      expect(url).toContain('hide_menu=true');
      expect(url).toContain('theme=Dark');
      expect(url).toContain('menu_position=bottom');
      expect(url).toContain('responsive_height=true');
      expect(url).toContain('region-control=North%20America');
      expect(url).toContain('date-range=2024-01-01%2C2024-12-31');
    });
  });

  describe('Error Handling', () => {
    it('should handle Sigma-specific error codes correctly', () => {
      const errorCodes = [
        'EEXIST', 'EPERM', 'ESTALE', 'ENOENT', 'EACCES',
        'EINVAL', 'ETIMEDOUT', 'NETWORK', 'UNKNOWN',
        'SESSION_EXPIRED', 'INVALID_CLIENT_ID', 'INVALID_SUB_FIELD'
      ];

      for (const code of errorCodes) {
        const result = SigmaEmbedErrorHandler.handleError({ code });
        expect(result).toHaveProperty('fallback');
        expect(result).toHaveProperty('message');
        expect(result).toHaveProperty('retryable');
        expect(typeof result.retryable).toBe('boolean');
      }
    });

    it('should provide appropriate error messages', () => {
      const errorCode = 'EACCES';
      const message = SigmaEmbedErrorHandler.getErrorMessage(errorCode);
      
      expect(message).toBe('Permission denied. Check workbook sharing and user permissions.');
    });
  });

  describe('Iframe Security', () => {
    it('should apply correct sandbox attributes', () => {
      render(<SecureIframe src="https://app.sigma.com/embed/test" title="Test" />);
      
      const iframe = screen.getByTitle('Test');
      expect(iframe).toHaveAttribute('sandbox');
      expect(iframe.getAttribute('sandbox')).toContain('allow-scripts');
      expect(iframe.getAttribute('sandbox')).toContain('allow-same-origin');
    });

    it('should handle iframe load errors gracefully', () => {
      const onError = jest.fn();
      render(
        <SecureIframe 
          src="https://invalid-url.com/embed/test" 
          title="Test"
          onError={onError}
        />
      );

      // Simulate iframe error
      const iframe = screen.getByTitle('Test');
      fireEvent.error(iframe);

      expect(onError).toHaveBeenCalled();
    });
  });

  describe('Responsive Behavior', () => {
    it('should adjust dimensions on window resize', () => {
      render(<ResponsiveEmbed embedUrl="https://app.sigma.com/embed/test" title="Test" />);
      
      const container = screen.getByRole('img', { hidden: true }); // iframe has role="img"
      
      // Simulate window resize
      act(() => {
        Object.defineProperty(window, 'innerWidth', { value: 800 });
        window.dispatchEvent(new Event('resize'));
      });

      // Check if dimensions updated
      expect(container).toHaveStyle({ width: '100%' });
    });
  });
});
```

### Load Testing

```typescript
// Embed Load Testing
describe('Embed Performance', () => {
  it('should load multiple embeds without performance degradation', async () => {
    const embedUrls = Array(10).fill(null).map((_, i) => 
      `https://app.sigma.com/embed/workbook${i}`
    );

    const startTime = performance.now();
    
    const promises = embedUrls.map(url => 
      embedValidationService.validateEmbedUrl(url)
    );
    
    await Promise.all(promises);
    
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    // Should complete within reasonable time
    expect(duration).toBeLessThan(5000); // 5 seconds
  });

  it('should handle concurrent embed loads', async () => {
    const embedUrls = Array(5).fill(null).map((_, i) => 
      `https://app.sigma.com/embed/workbook${i}`
    );

    const results = await Promise.allSettled(
      embedUrls.map(url => embedValidationService.validateEmbedUrl(url))
    );

    const successful = results.filter(result => result.status === 'fulfilled');
    expect(successful.length).toBe(embedUrls.length);
  });
});
```

---

## Security Considerations

### XSS Prevention

```typescript
// XSS Prevention for Embeds
export class EmbedXSSPrevention {
  static sanitizeEmbedUrl(url: string): string {
    // Remove potentially dangerous characters
    const sanitized = url
      .replace(/[<>'"]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/data:/gi, '')
      .replace(/vbscript:/gi, '');
    
    return sanitized;
  }

  static validateEmbedContent(content: string): boolean {
    // Check for script tags
    if (/<script/i.test(content)) {
      return false;
    }
    
    // Check for event handlers
    if (/on\w+\s*=/i.test(content)) {
      return false;
    }
    
    // Check for javascript: URLs
    if (/javascript:/i.test(content)) {
      return false;
    }
    
    return true;
  }
}
```

### CSRF Protection

```typescript
// CSRF Protection for Embed Actions
@Injectable()
export class EmbedCSRFProtection {
  constructor(private csrfService: CSRFProtectionService) {}

  async protectEmbedAction(userId: string, action: string): Promise<string> {
    const token = await this.csrfService.generateCSRFToken(userId);
    
    // Store action with token
    await this.redis.setex(
      `embed_action:${token}`,
      300, // 5 minutes
      JSON.stringify({ userId, action, timestamp: Date.now() })
    );
    
    return token;
  }

  async validateEmbedAction(token: string, userId: string): Promise<boolean> {
    const stored = await this.redis.get(`embed_action:${token}`);
    
    if (!stored) {
      return false;
    }
    
    const { userId: storedUserId, timestamp } = JSON.parse(stored);
    
    // Check user match and token age
    if (storedUserId !== userId || Date.now() - timestamp > 300000) {
      return false;
    }
    
    return true;
  }
}
```

---

## Monitoring & Analytics

### Embed Performance Monitoring

```typescript
// Embed Analytics Service
@Injectable()
export class EmbedAnalyticsService {
  constructor(private analytics: AnalyticsService) {}

  trackEmbedLoad(workbookId: string, loadTime: number, success: boolean) {
    this.analytics.track('embed_load', {
      workbookId,
      loadTime,
      success,
      timestamp: new Date().toISOString()
    });
  }

  trackEmbedError(workbookId: string, error: EmbedError) {
    this.analytics.track('embed_error', {
      workbookId,
      errorCode: error.code,
      errorMessage: error.message,
      timestamp: new Date().toISOString()
    });
  }

  trackEmbedInteraction(workbookId: string, interaction: string) {
    this.analytics.track('embed_interaction', {
      workbookId,
      interaction,
      timestamp: new Date().toISOString()
    });
  }
}

// Performance Monitoring Hook
export function useEmbedPerformance(workbookId: string) {
  const analytics = useAnalytics();
  const [loadStartTime, setLoadStartTime] = useState<number | null>(null);

  const startLoadTimer = useCallback(() => {
    setLoadStartTime(performance.now());
  }, []);

  const endLoadTimer = useCallback((success: boolean) => {
    if (loadStartTime) {
      const loadTime = performance.now() - loadStartTime;
      analytics.trackEmbedLoad(workbookId, loadTime, success);
      setLoadStartTime(null);
    }
  }, [loadStartTime, workbookId, analytics]);

  return { startLoadTimer, endLoadTimer };
}
```

---

## Troubleshooting Guide

### Common Issues & Solutions

```typescript
// Troubleshooting Service
export class EmbedTroubleshootingService {
  static diagnoseEmbedIssue(embedUrl: string, error: any): TroubleshootingResult {
    const issues: string[] = [];
    const solutions: string[] = [];

    // Check URL format
    if (!embedUrl.startsWith('https://')) {
      issues.push('URL does not use HTTPS');
      solutions.push('Ensure the embed URL uses HTTPS protocol');
    }

    // Check domain
    if (!embedUrl.includes('sigma')) {
      issues.push('URL does not appear to be from Sigma');
      solutions.push('Verify the URL is from a valid Sigma domain');
    }

    // Check for common patterns
    if (!/\/embed\/|\/public\/|\/viz\//.test(embedUrl)) {
      issues.push('URL does not match expected Sigma embed pattern');
      solutions.push('Ensure the URL follows the pattern: .../embed/workbookId or .../public/workbookId');
    }

    // Check for CORS issues
    if (error?.message?.includes('CORS')) {
      issues.push('CORS policy blocking the embed');
      solutions.push('Try using the proxy endpoint or contact Sigma support');
    }

    // Check for network issues
    if (error?.message?.includes('network') || error?.code === 'NETWORK_ERROR') {
      issues.push('Network connectivity issue');
      solutions.push('Check your internet connection and try again');
    }

    return {
      issues,
      solutions,
      severity: issues.length > 2 ? 'high' : issues.length > 0 ? 'medium' : 'low'
    };
  }
}
```

---

## Implementation Checklist

### Prerequisites
- [ ] Admin account type in Sigma organization
- [ ] Embedding feature enabled (premium feature)
- [ ] Client credentials generated in Sigma
- [ ] Organization slug identified
- [ ] Base URL configured (`https://app.sigmacomputing.com`)

### Backend Implementation
- [ ] Install required dependencies (`jsonwebtoken`, `uuid`)
- [ ] Configure environment variables:
  - [ ] `SIGMA_CLIENT_ID`
  - [ ] `SIGMA_CLIENT_SECRET`
  - [ ] `SIGMA_ORG_SLUG`
  - [ ] `SIGMA_BASE_URL`
- [ ] Implement `SigmaJWTService` with proper claims
- [ ] Implement `EmbedURLService` for URL construction
- [ ] Implement `EmbedCredentialService` for credential management
- [ ] Implement `UserAccessService` for user management
- [ ] Add error handling for Sigma-specific error codes
- [ ] Implement embed sandbox testing service
- [ ] Add comprehensive test suite

### Frontend Implementation
- [ ] Create `SecureIframe` component with proper sandbox attributes
- [ ] Implement responsive embed container
- [ ] Add error handling and fallback components
- [ ] Implement lazy loading for embeds
- [ ] Add mobile optimization
- [ ] Implement embed preloading service
- [ ] Add performance monitoring

### Security Implementation
- [ ] Configure Content Security Policy for Sigma domains
- [ ] Implement JWT replay protection
- [ ] Add URL validation and sanitization
- [ ] Implement XSS prevention measures
- [ ] Add CSRF protection for embed actions
- [ ] Configure iframe sandbox attributes
- [ ] Implement secure token storage

### Testing & Validation
- [ ] Test JWT generation with all claim types
- [ ] Validate embed URL construction
- [ ] Test error handling for all error codes
- [ ] Use Sigma embed sandbox for testing
- [ ] Test responsive behavior on different devices
- [ ] Validate security measures
- [ ] Performance testing with multiple embeds

### Production Deployment
- [ ] Configure production environment variables
- [ ] Set up monitoring and analytics
- [ ] Implement proper logging
- [ ] Configure backup and recovery
- [ ] Set up alerting for embed failures
- [ ] Document operational procedures

---

## References & Resources

### Sigma Documentation
- [Sigma Secure Embedding Overview](https://docs.sigma.com/)
- [JWT Claims Reference](https://docs.sigma.com/jwt-claims)
- [Embed URL Parameters](https://docs.sigma.com/embed-parameters)
- [User Access Management](https://docs.sigma.com/user-access)
- [Embed Sandbox Testing](https://docs.sigma.com/embed-sandbox)

### Security Resources
- [Iframe Security Best Practices](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [JWT Security Best Practices](https://tools.ietf.org/html/rfc8725)

### Development Resources
- [Sigma Node.js Embed SDK](https://www.npmjs.com/package/@sigmacomputing/embed-sdk)
- [JWT.io Debugger](https://jwt.io/)
- [URL Encoding Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

---

## Version Control

- **Version:** 2.0.0
- **Last Updated:** 2025-01-13
- **Next Review:** 2025-02-13
- **Maintainer:** Integration Team
- **Changes:** Updated with official Sigma documentation and JWT-based secure embedding
