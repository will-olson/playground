# Sigma Playground - API Design & Documentation Standards

## Executive Summary
This document establishes comprehensive API design standards, documentation practices, and implementation guidelines for the Sigma Playground backend. It covers RESTful API design, authentication flows, error handling, rate limiting, and automated documentation generation.

---

## Table of Contents
1. [API Design Principles](#api-design-principles)
2. [Authentication & Authorization](#authentication--authorization)
3. [API Endpoints Specification](#api-endpoints-specification)
4. [Request/Response Schemas](#requestresponse-schemas)
5. [Error Handling Standards](#error-handling-standards)
6. [Rate Limiting & Throttling](#rate-limiting--throttling)
7. [API Versioning Strategy](#api-versioning-strategy)
8. [OpenAPI Documentation](#openapi-documentation)
9. [Testing & Validation](#testing--validation)
10. [Monitoring & Analytics](#monitoring--analytics)

---

## API Design Principles

### RESTful Design Guidelines

```typescript
// API Base URL Structure
const API_BASE = {
  development: 'http://localhost:3000/api/v1',
  staging: 'https://api-staging.sigmaplayground.com/v1',
  production: 'https://api.sigmaplayground.com/v1'
}

// Resource Naming Conventions
const RESOURCE_PATTERNS = {
  // Collections (plural nouns)
  users: '/users',
  workbooks: '/workbooks',
  tags: '/tags',
  
  // Individual resources (with ID)
  user: '/users/{id}',
  workbook: '/workbooks/{id}',
  
  // Sub-resources
  userWorkbooks: '/users/{id}/workbooks',
  workbookFavorites: '/workbooks/{id}/favorites',
  
  // Actions (verbs)
  followUser: '/users/{id}/follow',
  favoriteWorkbook: '/workbooks/{id}/favorite'
}
```

### HTTP Methods & Status Codes

```typescript
// HTTP Method Usage
const HTTP_METHODS = {
  GET: 'Retrieve resources (idempotent)',
  POST: 'Create new resources or perform actions',
  PUT: 'Update entire resources (idempotent)',
  PATCH: 'Partial updates (idempotent)',
  DELETE: 'Remove resources (idempotent)'
}

// Status Code Standards
const STATUS_CODES = {
  // 2xx Success
  200: 'OK - Request successful',
  201: 'Created - Resource created successfully',
  204: 'No Content - Request successful, no response body',
  
  // 4xx Client Errors
  400: 'Bad Request - Invalid request data',
  401: 'Unauthorized - Authentication required',
  403: 'Forbidden - Access denied',
  404: 'Not Found - Resource not found',
  409: 'Conflict - Resource already exists',
  422: 'Unprocessable Entity - Validation failed',
  429: 'Too Many Requests - Rate limit exceeded',
  
  // 5xx Server Errors
  500: 'Internal Server Error - Unexpected server error',
  502: 'Bad Gateway - Upstream server error',
  503: 'Service Unavailable - Server temporarily unavailable'
}
```

---

## Authentication & Authorization

### JWT Token Structure

```typescript
// JWT Payload Structure
interface JWTPayload {
  sub: string;           // User ID
  username: string;      // Username
  email: string;         // User email
  role: 'user' | 'admin'; // User role
  iat: number;           // Issued at
  exp: number;           // Expires at
  type: 'access' | 'refresh'; // Token type
}

// Token Configuration
const TOKEN_CONFIG = {
  access: {
    expiresIn: '15m',
    secret: process.env.JWT_ACCESS_SECRET
  },
  refresh: {
    expiresIn: '7d',
    secret: process.env.JWT_REFRESH_SECRET
  }
}
```

### Authentication Flow

```typescript
// Authentication Controller
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @Post('register')
  @HttpCode(201)
  async register(@Body() registerDto: RegisterDto) {
    const user = await this.authService.register(registerDto);
    const tokens = await this.authService.generateTokenPair(user.id);
    
    return {
      user: this.sanitizeUser(user),
      tokens
    };
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(loginDto);
    const tokens = await this.authService.generateTokenPair(user.id);
    
    return {
      user: this.sanitizeUser(user),
      tokens
    };
  }

  @Post('refresh')
  async refresh(@Body() refreshDto: RefreshTokenDto) {
    const tokens = await this.authService.refreshAccessToken(refreshDto.refreshToken);
    return { tokens };
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Req() req: Request) {
    await this.authService.revokeRefreshToken(req.user.id);
    return { message: 'Logged out successfully' };
  }

  private sanitizeUser(user: User) {
    const { password_hash, refresh_tokens, ...sanitized } = user;
    return sanitized;
  }
}
```

### Authorization Guards

```typescript
// JWT Authentication Guard
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    if (err || !user) {
      throw err || new UnauthorizedException('Invalid token');
    }
    return user;
  }
}

// Admin Role Guard
@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    if (!user) {
      throw new UnauthorizedException('Authentication required');
    }
    
    if (user.role !== 'admin') {
      throw new ForbiddenException('Admin access required');
    }
    
    return true;
  }
}

// Resource Ownership Guard
@Injectable()
export class ResourceOwnershipGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const resourceId = request.params.id;
    const resourceType = this.getResourceType(request.route.path);

    if (!user || !resourceId) {
      return false;
    }

    // Admin can access any resource
    if (user.role === 'admin') {
      return true;
    }

    // Check resource ownership
    const resource = await this.prisma[resourceType].findUnique({
      where: { id: resourceId },
      select: { author_id: true }
    });

    if (!resource) {
      throw new NotFoundException('Resource not found');
    }

    return resource.author_id === user.id;
  }

  private getResourceType(path: string): string {
    if (path.includes('/workbooks/')) return 'workbook';
    if (path.includes('/users/')) return 'user';
    throw new Error('Unknown resource type');
  }
}
```

---

## API Endpoints Specification

### User Management Endpoints

```typescript
// Users Controller
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':username')
  async getUserProfile(@Param('username') username: string) {
    return this.usersService.getPublicProfile(username);
  }

  @Put('profile')
  @UseGuards(JwtAuthGuard)
  async updateProfile(
    @Req() req: Request,
    @Body() updateProfileDto: UpdateProfileDto
  ) {
    return this.usersService.updateProfile(req.user.id, updateProfileDto);
  }

  @Post(':username/follow')
  @UseGuards(JwtAuthGuard)
  async followUser(
    @Req() req: Request,
    @Param('username') username: string
  ) {
    return this.usersService.toggleFollow(req.user.id, username);
  }

  @Get(':username/followers')
  async getFollowers(
    @Param('username') username: string,
    @Query() paginationDto: PaginationDto
  ) {
    return this.usersService.getFollowers(username, paginationDto);
  }

  @Get(':username/following')
  async getFollowing(
    @Param('username') username: string,
    @Query() paginationDto: PaginationDto
  ) {
    return this.usersService.getFollowing(username, paginationDto);
  }
}
```

### Workbook Management Endpoints

```typescript
// Workbooks Controller
@Controller('workbooks')
export class WorkbooksController {
  constructor(private workbooksService: WorkbooksService) {}

  @Get()
  async getWorkbooks(@Query() filtersDto: WorkbooksFiltersDto) {
    return this.workbooksService.getWorkbooks(filtersDto);
  }

  @Get(':id')
  async getWorkbook(@Param('id') id: string) {
    return this.workbooksService.getWorkbook(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createWorkbook(
    @Req() req: Request,
    @Body() createWorkbookDto: CreateWorkbookDto
  ) {
    return this.workbooksService.createWorkbook(req.user.id, createWorkbookDto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, ResourceOwnershipGuard)
  async updateWorkbook(
    @Param('id') id: string,
    @Body() updateWorkbookDto: UpdateWorkbookDto
  ) {
    return this.workbooksService.updateWorkbook(id, updateWorkbookDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, ResourceOwnershipGuard)
  async deleteWorkbook(@Param('id') id: string) {
    return this.workbooksService.deleteWorkbook(id);
  }

  @Post(':id/favorite')
  @UseGuards(JwtAuthGuard)
  async favoriteWorkbook(
    @Req() req: Request,
    @Param('id') id: string
  ) {
    return this.workbooksService.toggleFavorite(req.user.id, id);
  }

  @Get('feed')
  @UseGuards(JwtAuthGuard)
  async getFeed(
    @Req() req: Request,
    @Query() paginationDto: PaginationDto
  ) {
    return this.workbooksService.getUserFeed(req.user.id, paginationDto);
  }
}
```

### Admin Endpoints

```typescript
// Admin Controller
@Controller('admin')
@UseGuards(JwtAuthGuard, AdminGuard)
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post('feature')
  async createFeaturedItem(@Body() featureDto: CreateFeaturedItemDto) {
    return this.adminService.createFeaturedItem(featureDto);
  }

  @Get('reports')
  async getReports(@Query() filtersDto: ReportsFiltersDto) {
    return this.adminService.getReports(filtersDto);
  }

  @Put('reports/:id')
  async updateReport(
    @Param('id') id: string,
    @Body() updateReportDto: UpdateReportDto
  ) {
    return this.adminService.updateReport(id, updateReportDto);
  }

  @Get('analytics')
  async getAnalytics(@Query() dateRangeDto: DateRangeDto) {
    return this.adminService.getAnalytics(dateRangeDto);
  }

  @Get('users')
  async getUsers(@Query() filtersDto: UsersFiltersDto) {
    return this.adminService.getUsers(filtersDto);
  }

  @Put('users/:id/status')
  async updateUserStatus(
    @Param('id') id: string,
    @Body() statusDto: UpdateUserStatusDto
  ) {
    return this.adminService.updateUserStatus(id, statusDto);
  }
}
```

---

## Request/Response Schemas

### DTO Definitions

```typescript
// User DTOs
export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @Matches(/^[a-zA-Z0-9_-]+$/)
  username: string;

  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
  password: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  full_name?: string;
}

export class UpdateProfileDto {
  @IsString()
  @IsOptional()
  @MaxLength(100)
  full_name?: string;

  @IsString()
  @IsOptional()
  @MaxLength(2000)
  bio?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  title?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  organization?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  location?: string;

  @IsObject()
  @IsOptional()
  social_links?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

// Workbook DTOs
export class CreateWorkbookDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title: string;

  @IsString()
  @IsOptional()
  @MaxLength(2000)
  description?: string;

  @IsString()
  @IsUrl()
  @Matches(/^https:\/\/.*sigma.*\/(embed|public|viz)\//)
  sigma_embed_url: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  tags?: string[];

  @IsBoolean()
  @IsOptional()
  is_publicly_visible?: boolean = true;

  @IsBoolean()
  @IsOptional()
  allow_copy?: boolean = true;
}

export class WorkbooksFiltersDto {
  @IsString()
  @IsOptional()
  search?: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  tags?: string[];

  @IsString()
  @IsOptional()
  @IsIn(['newest', 'oldest', 'popular', 'trending'])
  sort?: string = 'newest';

  @IsInt()
  @IsOptional()
  @Min(1)
  @Max(100)
  limit?: number = 20;

  @IsInt()
  @IsOptional()
  @Min(0)
  offset?: number = 0;
}

// Response DTOs
export class UserResponseDto {
  id: string;
  username: string;
  full_name?: string;
  bio?: string;
  title?: string;
  organization?: string;
  location?: string;
  social_links?: object;
  profile_image_url?: string;
  created_at: Date;
  _count?: {
    workbooks: number;
    followers: number;
    following: number;
  };
}

export class WorkbookResponseDto {
  id: string;
  title: string;
  description?: string;
  sigma_embed_url: string;
  thumbnail_url?: string;
  view_count: number;
  favorite_count: number;
  is_publicly_visible: boolean;
  allow_copy: boolean;
  published_at: Date;
  author: UserResponseDto;
  tags: Array<{
    tag: {
      name: string;
      color?: string;
    };
  }>;
}
```

---

## Error Handling Standards

### Custom Exception Classes

```typescript
// Custom Exceptions
export class ValidationException extends HttpException {
  constructor(message: string, errors?: any[]) {
    super(
      {
        message,
        errors,
        statusCode: 422
      },
      422
    );
  }
}

export class ResourceNotFoundException extends HttpException {
  constructor(resource: string, id: string) {
    super(
      {
        message: `${resource} with id '${id}' not found`,
        statusCode: 404
      },
      404
    );
  }
}

export class ConflictException extends HttpException {
  constructor(message: string) {
    super(
      {
        message,
        statusCode: 409
      },
      409
    );
  }
}

export class RateLimitExceededException extends HttpException {
  constructor(retryAfter: number) {
    super(
      {
        message: 'Rate limit exceeded',
        retryAfter,
        statusCode: 429
      },
      429
    );
  }
}
```

### Global Exception Filter

```typescript
@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let errors: any[] = [];

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      
      if (typeof exceptionResponse === 'object') {
        message = (exceptionResponse as any).message || message;
        errors = (exceptionResponse as any).errors || [];
      } else {
        message = exceptionResponse as string;
      }
    } else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      status = this.handlePrismaError(exception);
      message = this.getPrismaErrorMessage(exception);
    } else if (exception instanceof Prisma.PrismaClientValidationError) {
      status = HttpStatus.BAD_REQUEST;
      message = 'Validation error';
    }

    // Log error
    this.logger.error(
      `${request.method} ${request.url} - ${status} - ${message}`,
      exception instanceof Error ? exception.stack : undefined
    );

    // Send error response
    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message,
      ...(errors.length > 0 && { errors })
    };

    response.status(status).json(errorResponse);
  }

  private handlePrismaError(exception: Prisma.PrismaClientKnownRequestError): number {
    switch (exception.code) {
      case 'P2002':
        return HttpStatus.CONFLICT;
      case 'P2025':
        return HttpStatus.NOT_FOUND;
      case 'P2003':
        return HttpStatus.BAD_REQUEST;
      default:
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }

  private getPrismaErrorMessage(exception: Prisma.PrismaClientKnownRequestError): string {
    switch (exception.code) {
      case 'P2002':
        return 'Resource already exists';
      case 'P2025':
        return 'Resource not found';
      case 'P2003':
        return 'Invalid reference';
      default:
        return 'Database error';
    }
  }
}
```

### Validation Pipe

```typescript
// Global Validation Pipe
export class GlobalValidationPipe extends ValidationPipe {
  constructor() {
    super({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true
      },
      exceptionFactory: (errors: ValidationError[]) => {
        const formattedErrors = errors.map(error => ({
          field: error.property,
          message: Object.values(error.constraints || {}).join(', '),
          value: error.value
        }));

        return new ValidationException('Validation failed', formattedErrors);
      }
    });
  }
}
```

---

## Rate Limiting & Throttling

### Rate Limiting Implementation

```typescript
// Rate Limiting Service
@Injectable()
export class RateLimitService {
  constructor(private redis: Redis) {}

  async checkRateLimit(
    key: string,
    limit: number,
    windowMs: number
  ): Promise<{ allowed: boolean; remaining: number; resetTime: number }> {
    const now = Date.now();
    const window = Math.floor(now / windowMs);
    const redisKey = `rate_limit:${key}:${window}`;

    const current = await this.redis.incr(redisKey);
    
    if (current === 1) {
      await this.redis.expire(redisKey, Math.ceil(windowMs / 1000));
    }

    const remaining = Math.max(0, limit - current);
    const resetTime = (window + 1) * windowMs;

    return {
      allowed: current <= limit,
      remaining,
      resetTime
    };
  }
}

// Rate Limiting Decorator
export function RateLimit(limit: number, windowMs: number) {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const request = args[0] as Request;
      const response = args[1] as Response;
      const rateLimitService = this.rateLimitService;

      const key = `api:${request.ip}:${request.route?.path}`;
      const result = await rateLimitService.checkRateLimit(key, limit, windowMs);

      if (!result.allowed) {
        response.set({
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': result.remaining.toString(),
          'X-RateLimit-Reset': new Date(result.resetTime).toISOString(),
          'Retry-After': Math.ceil((result.resetTime - Date.now()) / 1000).toString()
        });

        throw new RateLimitExceededException(Math.ceil((result.resetTime - Date.now()) / 1000));
      }

      response.set({
        'X-RateLimit-Limit': limit.toString(),
        'X-RateLimit-Remaining': result.remaining.toString(),
        'X-RateLimit-Reset': new Date(result.resetTime).toISOString()
      });

      return method.apply(this, args);
    };
  };
}

// Rate Limiting Guard
@Injectable()
export class RateLimitGuard implements CanActivate {
  constructor(private rateLimitService: RateLimitService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();

    const key = `api:${request.ip}:${request.route?.path}`;
    const result = await this.rateLimitService.checkRateLimit(key, 100, 60000); // 100 requests per minute

    if (!result.allowed) {
      throw new RateLimitExceededException(Math.ceil((result.resetTime - Date.now()) / 1000));
    }

    return true;
  }
}
```

---

## API Versioning Strategy

### Versioning Implementation

```typescript
// API Versioning Configuration
@Controller({
  path: 'users',
  version: '1'
})
export class UsersV1Controller {
  // V1 implementation
}

@Controller({
  path: 'users',
  version: '2'
})
export class UsersV2Controller {
  // V2 implementation with breaking changes
}

// Version Header Strategy
@Injectable()
export class VersioningService {
  static getVersionFromRequest(request: Request): string {
    return request.headers['api-version'] as string || '1';
  }

  static validateVersion(version: string): boolean {
    const supportedVersions = ['1', '2'];
    return supportedVersions.includes(version);
  }
}

// Version-aware Response
export class VersionedResponse<T> {
  constructor(
    public data: T,
    public version: string,
    public timestamp: Date = new Date()
  ) {}
}
```

---

## OpenAPI Documentation

### Swagger Configuration

```typescript
// Swagger Setup
export function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Sigma Playground API')
    .setDescription('API documentation for Sigma Playground platform')
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth'
    )
    .addTag('Authentication', 'User authentication and authorization')
    .addTag('Users', 'User management and profiles')
    .addTag('Workbooks', 'Workbook management and publishing')
    .addTag('Tags', 'Tag management and categorization')
    .addTag('Admin', 'Administrative functions')
    .addServer('http://localhost:3000', 'Development')
    .addServer('https://api-staging.sigmaplayground.com', 'Staging')
    .addServer('https://api.sigmaplayground.com', 'Production')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      docExpansion: 'none',
      filter: true,
      showRequestHeaders: true,
      showCommonExtensions: true,
      tryItOutEnabled: true
    }
  });
}
```

### API Documentation Decorators

```typescript
// Enhanced API Documentation
@ApiTags('Users')
@Controller('users')
export class UsersController {
  @Get(':username')
  @ApiOperation({
    summary: 'Get user profile',
    description: 'Retrieve public profile information for a specific user'
  })
  @ApiParam({
    name: 'username',
    description: 'Username of the user',
    example: 'johndoe'
  })
  @ApiResponse({
    status: 200,
    description: 'User profile retrieved successfully',
    type: UserResponseDto
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
    schema: {
      example: {
        statusCode: 404,
        message: "User with username 'johndoe' not found",
        timestamp: '2024-01-01T00:00:00.000Z',
        path: '/api/v1/users/johndoe'
      }
    }
  })
  async getUserProfile(@Param('username') username: string) {
    return this.usersService.getPublicProfile(username);
  }

  @Post()
  @ApiOperation({
    summary: 'Create workbook',
    description: 'Create a new workbook with embedded Sigma visualization'
  })
  @ApiBearerAuth('JWT-auth')
  @ApiBody({
    type: CreateWorkbookDto,
    description: 'Workbook creation data',
    examples: {
      example1: {
        summary: 'Basic workbook',
        value: {
          title: 'Sales Dashboard',
          description: 'Monthly sales performance dashboard',
          sigma_embed_url: 'https://app.sigma.com/embed/workbook/abc123',
          tags: ['sales', 'dashboard', 'analytics']
        }
      }
    }
  })
  @ApiResponse({
    status: 201,
    description: 'Workbook created successfully',
    type: WorkbookResponseDto
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid request data',
    schema: {
      example: {
        statusCode: 400,
        message: 'Validation failed',
        errors: [
          {
            field: 'title',
            message: 'title should not be empty',
            value: ''
          }
        ]
      }
    }
  })
  async createWorkbook(
    @Req() req: Request,
    @Body() createWorkbookDto: CreateWorkbookDto
  ) {
    return this.workbooksService.createWorkbook(req.user.id, createWorkbookDto);
  }
}
```

---

## Testing & Validation

### API Testing Suite

```typescript
// API Test Suite
describe('Users API', () => {
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

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });

  beforeEach(async () => {
    await prisma.cleanDatabase();
  });

  describe('GET /users/:username', () => {
    it('should return user profile', async () => {
      const user = await prisma.user.create({
        data: {
          username: 'testuser',
          email: 'test@example.com',
          password_hash: 'hashedpassword'
        }
      });

      const response = await request(app.getHttpServer())
        .get(`/users/${user.username}`)
        .expect(200);

      expect(response.body).toMatchObject({
        id: user.id,
        username: user.username,
        email: user.email
      });
    });

    it('should return 404 for non-existent user', async () => {
      await request(app.getHttpServer())
        .get('/users/nonexistent')
        .expect(404);
    });
  });

  describe('POST /auth/register', () => {
    it('should register new user', async () => {
      const userData = {
        username: 'newuser',
        email: 'newuser@example.com',
        password: 'Password123!'
      };

      const response = await request(app.getHttpServer())
        .post('/auth/register')
        .send(userData)
        .expect(201);

      expect(response.body).toHaveProperty('user');
      expect(response.body).toHaveProperty('tokens');
      expect(response.body.user.username).toBe(userData.username);
    });

    it('should return 409 for duplicate username', async () => {
      await prisma.user.create({
        data: {
          username: 'existinguser',
          email: 'existing@example.com',
          password_hash: 'hashedpassword'
        }
      });

      await request(app.getHttpServer())
        .post('/auth/register')
        .send({
          username: 'existinguser',
          email: 'new@example.com',
          password: 'Password123!'
        })
        .expect(409);
    });
  });
});
```

### Postman Collection

```json
{
  "info": {
    "name": "Sigma Playground API",
    "description": "Complete API collection for Sigma Playground",
    "version": "1.0.0"
  },
  "auth": {
    "type": "bearer",
    "bearer": [
      {
        "key": "token",
        "value": "{{jwt_token}}",
        "type": "string"
      }
    ]
  },
  "variable": [
    {
      "key": "base_url",
      "value": "http://localhost:3000/api/v1"
    },
    {
      "key": "jwt_token",
      "value": ""
    }
  ],
  "item": [
    {
      "name": "Authentication",
      "item": [
        {
          "name": "Register",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"username\": \"testuser\",\n  \"email\": \"test@example.com\",\n  \"password\": \"Password123!\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/auth/register",
              "host": ["{{base_url}}"],
              "path": ["auth", "register"]
            }
          }
        }
      ]
    }
  ]
}
```

---

## Monitoring & Analytics

### API Metrics Collection

```typescript
// API Metrics Service
@Injectable()
export class ApiMetricsService {
  constructor(private prometheus: PrometheusService) {}

  @Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status_code']
  })
  httpRequestsTotal: Counter<string>;

  @Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'status_code'],
    buckets: [0.1, 0.5, 1, 2, 5]
  })
  httpRequestDuration: Histogram<string>;

  recordRequest(method: string, route: string, statusCode: number, duration: number) {
    this.httpRequestsTotal.inc({ method, route, statusCode });
    this.httpRequestDuration.observe({ method, route, statusCode }, duration);
  }
}

// Metrics Interceptor
@Injectable()
export class MetricsInterceptor implements NestInterceptor {
  constructor(private metricsService: ApiMetricsService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    const startTime = Date.now();

    return next.handle().pipe(
      tap(() => {
        const duration = (Date.now() - startTime) / 1000;
        this.metricsService.recordRequest(
          request.method,
          request.route?.path || request.url,
          response.statusCode,
          duration
        );
      })
    );
  }
}
```

---

## References & Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [OpenAPI Specification](https://swagger.io/specification/)
- [REST API Design Best Practices](https://restfulapi.net/)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8725)
- [Rate Limiting Strategies](https://cloud.google.com/architecture/rate-limiting-strategies-techniques)

---

## Version Control

- **Version:** 1.0.0
- **Last Updated:** 2024-01-01
- **Next Review:** 2024-02-01
- **Maintainer:** Development Team
