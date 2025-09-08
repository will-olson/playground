# Sigma Playground - Testing Strategy & Quality Assurance

## Executive Summary
This document outlines the comprehensive testing strategy for Sigma Playground, covering unit testing, integration testing, end-to-end testing, performance testing, and security testing. It ensures high quality and reliability throughout the development lifecycle.

---

## Table of Contents
1. [Testing Pyramid](#testing-pyramid)
2. [Unit Testing](#unit-testing)
3. [Integration Testing](#integration-testing)
4. [End-to-End Testing](#end-to-end-testing)
5. [Performance Testing](#performance-testing)
6. [Security Testing](#security-testing)
7. [Test Data Management](#test-data-management)
8. [Test Automation](#test-automation)
9. [Quality Gates](#quality-gates)
10. [Continuous Testing](#continuous-testing)

---

## Testing Pyramid

### Testing Strategy Overview

```typescript
// Testing pyramid implementation
export const TestingStrategy = {
  // Level 1: Unit Tests (70%)
  unit: {
    coverage: 80,
    focus: ['business logic', 'utilities', 'components'],
    tools: ['Jest', 'React Testing Library', 'Vitest'],
    execution: 'fast',
    frequency: 'every commit'
  },
  
  // Level 2: Integration Tests (20%)
  integration: {
    coverage: 60,
    focus: ['API endpoints', 'database interactions', 'external services'],
    tools: ['Jest', 'Supertest', 'Testcontainers'],
    execution: 'medium',
    frequency: 'every PR'
  },
  
  // Level 3: E2E Tests (10%)
  e2e: {
    coverage: 40,
    focus: ['user journeys', 'critical paths', 'cross-browser'],
    tools: ['Playwright', 'Cypress'],
    execution: 'slow',
    frequency: 'every deployment'
  }
};
```

---

## Unit Testing

### Backend Unit Tests

```typescript
// tests/unit/services/auth.service.test.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../../../src/auth/auth.service';
import { UsersService } from '../../../src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;
  let usersService: UsersService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: {
            findByEmail: jest.fn(),
            create: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
            verify: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
  });

  describe('validateUser', () => {
    it('should return user data when credentials are valid', async () => {
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        password_hash: 'hashedpassword',
      };
      
      jest.spyOn(usersService, 'findByEmail').mockResolvedValue(mockUser);
      jest.spyOn(service, 'comparePassword').mockResolvedValue(true);

      const result = await service.validateUser('test@example.com', 'password');
      
      expect(result).toEqual({
        id: '1',
        email: 'test@example.com',
      });
    });

    it('should throw UnauthorizedException when credentials are invalid', async () => {
      jest.spyOn(usersService, 'findByEmail').mockResolvedValue(null);

      await expect(
        service.validateUser('test@example.com', 'wrongpassword')
      ).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('generateTokenPair', () => {
    it('should generate access and refresh tokens', async () => {
      const mockTokens = {
        accessToken: 'access-token',
        refreshToken: 'refresh-token',
      };
      
      jest.spyOn(jwtService, 'sign').mockReturnValueOnce('access-token');
      jest.spyOn(jwtService, 'sign').mockReturnValueOnce('refresh-token');

      const result = await service.generateTokenPair('user-id');

      expect(result).toEqual(mockTokens);
      expect(jwtService.sign).toHaveBeenCalledTimes(2);
    });
  });
});
```

### Frontend Unit Tests

```typescript
// tests/unit/components/WorkbookCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { WorkbookCard } from '../../../src/components/features/workbook/WorkbookCard';
import { mockWorkbook } from '../../mocks/workbook.mock';

describe('WorkbookCard', () => {
  const mockOnFavorite = jest.fn();
  const mockOnView = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders workbook information correctly', () => {
    render(
      <WorkbookCard
        workbook={mockWorkbook}
        onFavorite={mockOnFavorite}
        onView={mockOnView}
      />
    );

    expect(screen.getByText(mockWorkbook.title)).toBeInTheDocument();
    expect(screen.getByText(mockWorkbook.description)).toBeInTheDocument();
    expect(screen.getByText(mockWorkbook.author.username)).toBeInTheDocument();
  });

  it('calls onFavorite when favorite button is clicked', () => {
    render(
      <WorkbookCard
        workbook={mockWorkbook}
        onFavorite={mockOnFavorite}
        onView={mockOnView}
      />
    );

    const favoriteButton = screen.getByRole('button', { name: /favorite/i });
    fireEvent.click(favoriteButton);

    expect(mockOnFavorite).toHaveBeenCalledWith(mockWorkbook.id);
  });

  it('calls onView when view button is clicked', () => {
    render(
      <WorkbookCard
        workbook={mockWorkbook}
        onFavorite={mockOnFavorite}
        onView={mockOnView}
      />
    );

    const viewButton = screen.getByRole('button', { name: /view/i });
    fireEvent.click(viewButton);

    expect(mockOnView).toHaveBeenCalledWith(mockWorkbook.id);
  });

  it('displays correct view and favorite counts', () => {
    render(
      <WorkbookCard
        workbook={mockWorkbook}
        onFavorite={mockOnFavorite}
        onView={mockOnView}
      />
    );

    expect(screen.getByText(`${mockWorkbook.view_count} views`)).toBeInTheDocument();
    expect(screen.getByText(`${mockWorkbook.favorite_count} favorites`)).toBeInTheDocument();
  });
});
```

---

## Integration Testing

### API Integration Tests

```typescript
// tests/integration/api/workbooks.e2e-spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { PrismaService } from '../../../src/prisma/prisma.service';

describe('Workbooks API (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let authToken: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prisma = moduleFixture.get<PrismaService>(PrismaService);
    
    await app.init();
    await prisma.cleanDatabase();

    // Create test user and get auth token
    const authResponse = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'Password123!',
      });
    
    authToken = authResponse.body.tokens.accessToken;
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });

  describe('POST /workbooks', () => {
    it('should create a new workbook', async () => {
      const workbookData = {
        title: 'Test Workbook',
        description: 'Test Description',
        sigma_embed_url: 'https://app.sigma.com/embed/test123',
        tags: ['test', 'analytics'],
      };

      const response = await request(app.getHttpServer())
        .post('/workbooks')
        .set('Authorization', `Bearer ${authToken}`)
        .send(workbookData)
        .expect(201);

      expect(response.body).toMatchObject({
        id: expect.any(String),
        title: workbookData.title,
        description: workbookData.description,
        sigma_embed_url: workbookData.sigma_embed_url,
      });
    });

    it('should return 401 when not authenticated', async () => {
      await request(app.getHttpServer())
        .post('/workbooks')
        .send({
          title: 'Test Workbook',
          sigma_embed_url: 'https://app.sigma.com/embed/test123',
        })
        .expect(401);
    });

    it('should return 400 for invalid data', async () => {
      await request(app.getHttpServer())
        .post('/workbooks')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          title: '', // Invalid: empty title
          sigma_embed_url: 'invalid-url', // Invalid: not a Sigma URL
        })
        .expect(400);
    });
  });

  describe('GET /workbooks', () => {
    beforeEach(async () => {
      // Create test workbooks
      await prisma.workbook.createMany({
        data: [
          {
            title: 'Workbook 1',
            description: 'Description 1',
            sigma_embed_url: 'https://app.sigma.com/embed/test1',
            author_id: 'test-user-id',
          },
          {
            title: 'Workbook 2',
            description: 'Description 2',
            sigma_embed_url: 'https://app.sigma.com/embed/test2',
            author_id: 'test-user-id',
          },
        ],
      });
    });

    it('should return list of workbooks', async () => {
      const response = await request(app.getHttpServer())
        .get('/workbooks')
        .expect(200);

      expect(response.body).toHaveLength(2);
      expect(response.body[0]).toHaveProperty('id');
      expect(response.body[0]).toHaveProperty('title');
      expect(response.body[0]).toHaveProperty('author');
    });

    it('should filter workbooks by search query', async () => {
      const response = await request(app.getHttpServer())
        .get('/workbooks?search=Workbook 1')
        .expect(200);

      expect(response.body).toHaveLength(1);
      expect(response.body[0].title).toBe('Workbook 1');
    });
  });
});
```

### Database Integration Tests

```typescript
// tests/integration/database/workbook.repository.test.ts
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../src/prisma/prisma.service';
import { WorkbookRepository } from '../../../src/workbooks/workbook.repository';

describe('WorkbookRepository', () => {
  let repository: WorkbookRepository;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WorkbookRepository,
        {
          provide: PrismaService,
          useValue: {
            workbook: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    repository = module.get<WorkbookRepository>(WorkbookRepository);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('findByFilters', () => {
    it('should find workbooks with correct filters', async () => {
      const filters = {
        search: 'test',
        tags: ['analytics'],
        limit: 10,
        offset: 0,
      };

      const mockWorkbooks = [
        {
          id: '1',
          title: 'Test Workbook',
          description: 'Test Description',
        },
      ];

      jest.spyOn(prisma.workbook, 'findMany').mockResolvedValue(mockWorkbooks);

      const result = await repository.findByFilters(filters);

      expect(prisma.workbook.findMany).toHaveBeenCalledWith({
        where: {
          is_publicly_visible: true,
          OR: [
            { title: { contains: 'test', mode: 'insensitive' } },
            { description: { contains: 'test', mode: 'insensitive' } },
          ],
          tags: {
            some: {
              tag: {
                name: { in: ['analytics'] },
              },
            },
          },
        },
        take: 10,
        skip: 0,
        include: {
          author: true,
          tags: {
            include: {
              tag: true,
            },
          },
        },
      });

      expect(result).toEqual(mockWorkbooks);
    });
  });
});
```

---

## End-to-End Testing

### Playwright E2E Tests

```typescript
// tests/e2e/workbook-creation.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Workbook Creation Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Login before each test
    await page.goto('/login');
    await page.fill('[data-testid="email-input"]', 'test@example.com');
    await page.fill('[data-testid="password-input"]', 'Password123!');
    await page.click('[data-testid="login-button"]');
    await expect(page).toHaveURL('/dashboard');
  });

  test('should create a new workbook successfully', async ({ page }) => {
    // Navigate to create workbook page
    await page.click('[data-testid="create-workbook-button"]');
    await expect(page).toHaveURL('/create');

    // Fill out the form
    await page.fill('[data-testid="title-input"]', 'My Test Workbook');
    await page.fill('[data-testid="description-input"]', 'This is a test workbook');
    await page.fill('[data-testid="embed-url-input"]', 'https://app.sigma.com/embed/test123');
    
    // Add tags
    await page.click('[data-testid="tags-input"]');
    await page.fill('[data-testid="tags-input"]', 'analytics, dashboard');
    await page.press('[data-testid="tags-input"]', 'Enter');

    // Submit the form
    await page.click('[data-testid="submit-button"]');

    // Verify success
    await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
    await expect(page).toHaveURL(/\/workbooks\/[a-zA-Z0-9-]+/);

    // Verify workbook details
    await expect(page.locator('h1')).toContainText('My Test Workbook');
    await expect(page.locator('[data-testid="description"]')).toContainText('This is a test workbook');
  });

  test('should show validation errors for invalid data', async ({ page }) => {
    await page.goto('/create');

    // Submit empty form
    await page.click('[data-testid="submit-button"]');

    // Check for validation errors
    await expect(page.locator('[data-testid="title-error"]')).toBeVisible();
    await expect(page.locator('[data-testid="embed-url-error"]')).toBeVisible();

    // Fill invalid embed URL
    await page.fill('[data-testid="embed-url-input"]', 'invalid-url');
    await page.click('[data-testid="submit-button"]');

    await expect(page.locator('[data-testid="embed-url-error"]')).toContainText('Invalid Sigma embed URL');
  });

  test('should handle embed URL validation in real-time', async ({ page }) => {
    await page.goto('/create');

    // Type invalid URL
    await page.fill('[data-testid="embed-url-input"]', 'http://invalid.com/embed/test');
    
    // Wait for validation
    await page.waitForSelector('[data-testid="embed-url-error"]');
    await expect(page.locator('[data-testid="embed-url-error"]')).toContainText('Only HTTPS URLs are supported');

    // Type valid URL
    await page.fill('[data-testid="embed-url-input"]', 'https://app.sigma.com/embed/test123');
    
    // Wait for validation to clear
    await expect(page.locator('[data-testid="embed-url-error"]')).not.toBeVisible();
  });
});
```

### Cross-Browser Testing

```typescript
// tests/e2e/cross-browser.spec.ts
import { test, expect, devices } from '@playwright/test';

const browsers = [
  { name: 'chromium', ...devices['Desktop Chrome'] },
  { name: 'firefox', ...devices['Desktop Firefox'] },
  { name: 'webkit', ...devices['Desktop Safari'] },
];

browsers.forEach(({ name, ...device }) => {
  test.describe(`Workbook viewing on ${name}`, () => {
    test.use(device);

    test('should display workbook correctly', async ({ page }) => {
      // Navigate to a workbook
      await page.goto('/workbooks/test-workbook-id');

      // Check if workbook loads
      await expect(page.locator('[data-testid="workbook-title"]')).toBeVisible();
      await expect(page.locator('[data-testid="workbook-embed"]')).toBeVisible();

      // Check if embed iframe loads
      const iframe = page.locator('[data-testid="workbook-embed"] iframe');
      await expect(iframe).toBeVisible();
      await expect(iframe).toHaveAttribute('src', /sigma\.com/);
    });

    test('should handle responsive design', async ({ page }) => {
      // Test mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/workbooks/test-workbook-id');

      // Check mobile-specific elements
      await expect(page.locator('[data-testid="mobile-menu"]')).toBeVisible();
      await expect(page.locator('[data-testid="desktop-menu"]')).not.toBeVisible();

      // Test tablet viewport
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.reload();

      // Check tablet-specific layout
      await expect(page.locator('[data-testid="workbook-embed"]')).toBeVisible();
    });
  });
});
```

---

## Performance Testing

### Load Testing with Artillery

```yaml
# tests/performance/load-test.yml
config:
  target: 'https://api.sigmaplayground.com'
  phases:
    - duration: 60
      arrivalRate: 10
      name: "Warm up"
    - duration: 120
      arrivalRate: 50
      name: "Ramp up load"
    - duration: 300
      arrivalRate: 100
      name: "Sustained load"
    - duration: 60
      arrivalRate: 200
      name: "Peak load"
  defaults:
    headers:
      Content-Type: 'application/json'

scenarios:
  - name: "User registration and login"
    weight: 30
    flow:
      - post:
          url: "/auth/register"
          json:
            username: "user{{ $randomString() }}"
            email: "user{{ $randomString() }}@example.com"
            password: "Password123!"
          capture:
            - json: "$.tokens.accessToken"
              as: "accessToken"
      - get:
          url: "/users/profile"
          headers:
            Authorization: "Bearer {{ accessToken }}"

  - name: "Workbook operations"
    weight: 40
    flow:
      - post:
          url: "/auth/login"
          json:
            email: "test@example.com"
            password: "Password123!"
          capture:
            - json: "$.tokens.accessToken"
              as: "accessToken"
      - get:
          url: "/workbooks"
          headers:
            Authorization: "Bearer {{ accessToken }}"
      - post:
          url: "/workbooks"
          headers:
            Authorization: "Bearer {{ accessToken }}"
          json:
            title: "Load Test Workbook {{ $randomString() }}"
            description: "Generated during load test"
            sigma_embed_url: "https://app.sigma.com/embed/loadtest{{ $randomString() }}"

  - name: "Public workbook viewing"
    weight: 30
    flow:
      - get:
          url: "/workbooks"
      - get:
          url: "/workbooks/{{ $randomWorkbookId() }}"
```

### Performance Monitoring

```typescript
// tests/performance/performance-monitor.ts
import { chromium, Browser, Page } from 'playwright';

export class PerformanceMonitor {
  private browser: Browser;
  private page: Page;

  async setup() {
    this.browser = await chromium.launch();
    this.page = await this.browser.newPage();
    
    // Enable performance metrics
    await this.page.coverage.startJSCoverage();
    await this.page.coverage.startCSSCoverage();
  }

  async measurePageLoad(url: string) {
    const startTime = Date.now();
    
    await this.page.goto(url, { waitUntil: 'networkidle' });
    
    const endTime = Date.now();
    const loadTime = endTime - startTime;

    // Get performance metrics
    const metrics = await this.page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
        largestContentfulPaint: performance.getEntriesByName('largest-contentful-paint')[0]?.startTime || 0,
      };
    });

    return {
      totalLoadTime: loadTime,
      ...metrics,
    };
  }

  async measureAPIResponse(url: string, method: string = 'GET', body?: any) {
    const startTime = Date.now();
    
    const response = await this.page.request.fetch(url, {
      method,
      data: body,
    });
    
    const endTime = Date.now();
    const responseTime = endTime - startTime;

    return {
      status: response.status(),
      responseTime,
      headers: response.headers(),
    };
  }

  async cleanup() {
    await this.browser.close();
  }
}
```

---

## Security Testing

### Security Test Suite

```typescript
// tests/security/security.test.ts
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('Security Tests', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('SQL Injection Prevention', () => {
    it('should prevent SQL injection in user search', async () => {
      const maliciousQuery = "'; DROP TABLE users; --";
      
      const response = await request(app.getHttpServer())
        .get(`/users/search?q=${encodeURIComponent(maliciousQuery)}`)
        .expect(200);

      // Verify users table still exists by trying to create a user
      await request(app.getHttpServer())
        .post('/auth/register')
        .send({
          username: 'testuser',
          email: 'test@example.com',
          password: 'Password123!',
        })
        .expect(201);
    });

    it('should prevent SQL injection in workbook filtering', async () => {
      const maliciousTag = "'; DROP TABLE workbooks; --";
      
      await request(app.getHttpServer())
        .get(`/workbooks?tags=${encodeURIComponent(maliciousTag)}`)
        .expect(200);

      // Verify workbooks table still exists
      await request(app.getHttpServer())
        .get('/workbooks')
        .expect(200);
    });
  });

  describe('XSS Prevention', () => {
    it('should sanitize malicious script in user bio', async () => {
      const maliciousBio = '<script>alert("XSS")</script>Hello World';
      
      // First, create a user and get auth token
      const authResponse = await request(app.getHttpServer())
        .post('/auth/register')
        .send({
          username: 'testuser',
          email: 'test@example.com',
          password: 'Password123!',
        });

      const authToken = authResponse.body.tokens.accessToken;

      // Update profile with malicious bio
      const response = await request(app.getHttpServer())
        .put('/users/profile')
        .set('Authorization', `Bearer ${authToken}`)
        .send({ bio: maliciousBio })
        .expect(200);

      // Verify the bio is sanitized
      expect(response.body.bio).not.toContain('<script>');
      expect(response.body.bio).toContain('Hello World');
    });
  });

  describe('Authentication Security', () => {
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

  describe('CORS Configuration', () => {
    it('should allow requests from allowed origins', async () => {
      const response = await request(app.getHttpServer())
        .get('/workbooks')
        .set('Origin', 'https://sigmaplayground.com')
        .expect(200);

      expect(response.headers['access-control-allow-origin']).toBe('https://sigmaplayground.com');
    });

    it('should reject requests from disallowed origins', async () => {
      await request(app.getHttpServer())
        .get('/workbooks')
        .set('Origin', 'https://malicious-site.com')
        .expect(403);
    });
  });
});
```

---

## Test Data Management

### Test Data Factory

```typescript
// tests/factories/test-data.factory.ts
import { faker } from '@faker-js/faker';
import { PrismaService } from '../../src/prisma/prisma.service';

export class TestDataFactory {
  constructor(private prisma: PrismaService) {}

  async createUser(overrides: Partial<User> = {}) {
    return this.prisma.user.create({
      data: {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password_hash: await this.hashPassword('Password123!'),
        full_name: faker.person.fullName(),
        bio: faker.lorem.sentence(),
        ...overrides,
      },
    });
  }

  async createWorkbook(authorId: string, overrides: Partial<Workbook> = {}) {
    return this.prisma.workbook.create({
      data: {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        sigma_embed_url: `https://app.sigma.com/embed/${faker.string.uuid()}`,
        author_id: authorId,
        view_count: faker.number.int({ min: 0, max: 1000 }),
        favorite_count: faker.number.int({ min: 0, max: 100 }),
        ...overrides,
      },
    });
  }

  async createTag(overrides: Partial<Tag> = {}) {
    return this.prisma.tag.create({
      data: {
        name: faker.lorem.word(),
        description: faker.lorem.sentence(),
        color: faker.color.rgb({ format: 'hex' }),
        ...overrides,
      },
    });
  }

  async createWorkbookWithTags(authorId: string, tagIds: string[]) {
    const workbook = await this.createWorkbook(authorId);
    
    for (const tagId of tagIds) {
      await this.prisma.workbookTag.create({
        data: {
          workbook_id: workbook.id,
          tag_id: tagId,
        },
      });
    }

    return workbook;
  }

  private async hashPassword(password: string): Promise<string> {
    const bcrypt = await import('bcrypt');
    return bcrypt.hash(password, 10);
  }
}
```

### Test Database Management

```typescript
// tests/utils/test-database.ts
import { PrismaService } from '../../src/prisma/prisma.service';

export class TestDatabase {
  constructor(private prisma: PrismaService) {}

  async cleanDatabase() {
    const tablenames = await this.prisma.$queryRaw<
      Array<{ tablename: string }>
    >`SELECT tablename FROM pg_tables WHERE schemaname='public'`;

    const tables = tablenames
      .map(({ tablename }) => tablename)
      .filter((name) => name !== '_prisma_migrations')
      .map((name) => `"public"."${name}"`)
      .join(', ');

    try {
      await this.prisma.$executeRawUnsafe(`TRUNCATE TABLE ${tables} CASCADE;`);
    } catch (error) {
      console.log({ error });
    }
  }

  async seedTestData() {
    const factory = new TestDataFactory(this.prisma);
    
    // Create test users
    const users = await Promise.all([
      factory.createUser({ username: 'testuser1', email: 'test1@example.com' }),
      factory.createUser({ username: 'testuser2', email: 'test2@example.com' }),
      factory.createUser({ username: 'admin', email: 'admin@example.com', is_admin: true }),
    ]);

    // Create test tags
    const tags = await Promise.all([
      factory.createTag({ name: 'analytics' }),
      factory.createTag({ name: 'dashboard' }),
      factory.createTag({ name: 'finance' }),
    ]);

    // Create test workbooks
    const workbooks = await Promise.all([
      factory.createWorkbookWithTags(users[0].id, [tags[0].id, tags[1].id]),
      factory.createWorkbookWithTags(users[1].id, [tags[1].id, tags[2].id]),
      factory.createWorkbookWithTags(users[0].id, [tags[0].id]),
    ]);

    return { users, tags, workbooks };
  }
}
```

---

## Test Automation

### GitHub Actions Test Pipeline

```yaml
# .github/workflows/test.yml
name: Test Suite

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run unit tests
        run: npm run test:unit
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info

  integration-tests:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: sigma_playground_test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432
      
      redis:
        image: redis:7
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 6379:6379
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run database migrations
        run: npx prisma migrate deploy
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/sigma_playground_test
      
      - name: Run integration tests
        run: npm run test:integration
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/sigma_playground_test
          REDIS_URL: redis://localhost:6379

  e2e-tests:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Install Playwright browsers
        run: npx playwright install --with-deps
      
      - name: Run E2E tests
        run: npm run test:e2e
      
      - name: Upload test results
        uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: playwright-report
          path: playwright-report/

  performance-tests:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run performance tests
        run: npm run test:performance
      
      - name: Upload performance results
        uses: actions/upload-artifact@v3
        with:
          name: performance-results
          path: performance-results/
```

---

## Quality Gates

### Quality Gate Configuration

```typescript
// quality-gates/quality-gates.config.ts
export const QualityGates = {
  unitTests: {
    coverage: 80,
    threshold: 'error',
    enabled: true,
  },
  integrationTests: {
    coverage: 60,
    threshold: 'warning',
    enabled: true,
  },
  e2eTests: {
    passRate: 95,
    threshold: 'error',
    enabled: true,
  },
  performance: {
    maxResponseTime: 2000, // ms
    maxLoadTime: 3000, // ms
    threshold: 'warning',
    enabled: true,
  },
  security: {
    vulnerabilities: 0,
    threshold: 'error',
    enabled: true,
  },
  codeQuality: {
    complexity: 10,
    maintainability: 'A',
    threshold: 'warning',
    enabled: true,
  },
};

export function evaluateQualityGates(results: TestResults): QualityGateResult {
  const gateResults: QualityGateResult = {
    passed: true,
    failures: [],
    warnings: [],
  };

  // Unit test coverage
  if (results.unitTests.coverage < QualityGates.unitTests.coverage) {
    gateResults.failures.push({
      gate: 'unitTests',
      message: `Unit test coverage ${results.unitTests.coverage}% is below threshold ${QualityGates.unitTests.coverage}%`,
    });
    gateResults.passed = false;
  }

  // E2E test pass rate
  if (results.e2eTests.passRate < QualityGates.e2eTests.passRate) {
    gateResults.failures.push({
      gate: 'e2eTests',
      message: `E2E test pass rate ${results.e2eTests.passRate}% is below threshold ${QualityGates.e2eTests.passRate}%`,
    });
    gateResults.passed = false;
  }

  // Performance checks
  if (results.performance.avgResponseTime > QualityGates.performance.maxResponseTime) {
    gateResults.warnings.push({
      gate: 'performance',
      message: `Average response time ${results.performance.avgResponseTime}ms exceeds threshold ${QualityGates.performance.maxResponseTime}ms`,
    });
  }

  return gateResults;
}
```

---

## Continuous Testing

### Test Execution Strategy

```typescript
// continuous-testing/test-executor.ts
export class TestExecutor {
  private testSuites: TestSuite[] = [];

  registerTestSuite(suite: TestSuite) {
    this.testSuites.push(suite);
  }

  async executeTests(trigger: TestTrigger): Promise<TestResults> {
    const results: TestResults = {
      unitTests: { coverage: 0, passed: 0, failed: 0 },
      integrationTests: { coverage: 0, passed: 0, failed: 0 },
      e2eTests: { passRate: 0, passed: 0, failed: 0 },
      performance: { avgResponseTime: 0, maxLoadTime: 0 },
      security: { vulnerabilities: 0, issues: [] },
    };

    // Execute tests based on trigger
    switch (trigger.type) {
      case 'commit':
        await this.executeUnitTests(results);
        break;
      case 'pull_request':
        await this.executeUnitTests(results);
        await this.executeIntegrationTests(results);
        break;
      case 'deployment':
        await this.executeAllTests(results);
        break;
    }

    return results;
  }

  private async executeUnitTests(results: TestResults) {
    const unitTests = this.testSuites.filter(suite => suite.type === 'unit');
    
    for (const suite of unitTests) {
      const suiteResults = await suite.execute();
      results.unitTests.passed += suiteResults.passed;
      results.unitTests.failed += suiteResults.failed;
      results.unitTests.coverage = Math.max(results.unitTests.coverage, suiteResults.coverage);
    }
  }

  private async executeIntegrationTests(results: TestResults) {
    const integrationTests = this.testSuites.filter(suite => suite.type === 'integration');
    
    for (const suite of integrationTests) {
      const suiteResults = await suite.execute();
      results.integrationTests.passed += suiteResults.passed;
      results.integrationTests.failed += suiteResults.failed;
      results.integrationTests.coverage = Math.max(results.integrationTests.coverage, suiteResults.coverage);
    }
  }

  private async executeAllTests(results: TestResults) {
    await this.executeUnitTests(results);
    await this.executeIntegrationTests(results);
    await this.executeE2ETests(results);
    await this.executePerformanceTests(results);
    await this.executeSecurityTests(results);
  }
}
```

---

## References & Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Playwright Documentation](https://playwright.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Artillery Load Testing](https://artillery.io/)
- [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)

---

## Version Control

- **Version:** 1.0.0
- **Last Updated:** 2024-01-01
- **Next Review:** 2024-02-01
- **Maintainer:** QA Team
