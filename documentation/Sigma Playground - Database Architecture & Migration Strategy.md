# Sigma Playground - Database Architecture & Migration Strategy

## Executive Summary
This document provides comprehensive guidance for implementing the PostgreSQL database architecture for Sigma Playground using Prisma ORM. It includes detailed schema definitions, migration strategies, performance optimization, and operational procedures.

---

## Table of Contents
1. [Database Schema Design](#database-schema-design)
2. [Prisma Configuration](#prisma-configuration)
3. [Migration Strategy](#migration-strategy)
4. [Performance Optimization](#performance-optimization)
5. [Data Validation & Constraints](#data-validation--constraints)
6. [Seed Data & Testing](#seed-data--testing)
7. [Backup & Recovery](#backup--recovery)
8. [Monitoring & Maintenance](#monitoring--maintenance)

---

## Database Schema Design

### Complete Prisma Schema

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
  output   = "../node_modules/.prisma/client"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

// ==============================================
// CORE MODELS
// ==============================================

model User {
  id                String      @id @default(uuid())
  username          String      @unique @db.VarChar(50)
  email             String      @unique @db.VarChar(255)
  password_hash     String      @db.VarChar(255)
  full_name         String?     @db.VarChar(100)
  bio               String?     @db.Text
  title             String?     @db.VarChar(100)
  organization      String?     @db.VarChar(100)
  location          String?     @db.VarChar(100)
  social_links      Json?       @default("{}")
  profile_image_url String?     @db.VarChar(500)
  is_admin          Boolean     @default(false)
  is_verified       Boolean     @default(false)
  is_active         Boolean     @default(true)
  last_login_at     DateTime?
  created_at        DateTime    @default(now())
  updated_at        DateTime    @updatedAt

  // Relationships
  workbooks         Workbook[]
  favorites         Favorite[]
  followers         Follow[]    @relation("Following")
  following         Follow[]    @relation("Followers")
  curated_features  FeaturedItem[]
  refresh_tokens    RefreshToken[]
  reports_made      Report[]    @relation("Reporter")
  reports_received  Report[]    @relation("ReportedUser")

  // Indexes
  @@index([username])
  @@index([email])
  @@index([created_at])
  @@index([is_active])
  @@map("users")
}

model Workbook {
  id                  String      @id @default(uuid())
  title               String      @db.VarChar(200)
  description         String?     @db.Text
  sigma_embed_url     String      @db.VarChar(1000)
  thumbnail_url       String?     @db.VarChar(500)
  is_publicly_visible Boolean     @default(true)
  allow_copy          Boolean     @default(true)
  view_count          Int         @default(0)
  favorite_count      Int         @default(0)
  is_featured         Boolean     @default(false)
  featured_at         DateTime?
  published_at        DateTime    @default(now())
  updated_at          DateTime    @updatedAt

  // Foreign Keys
  author_id           String

  // Relationships
  author              User        @relation(fields: [author_id], references: [id], onDelete: Cascade)
  tags                WorkbookTag[]
  favorited_by        Favorite[]
  features            FeaturedItem[] @relation(name: "FeaturedWorkbook")
  reports             Report[]    @relation("ReportedWorkbook")
  views               WorkbookView[]

  // Indexes
  @@index([author_id])
  @@index([published_at])
  @@index([is_publicly_visible])
  @@index([is_featured])
  @@index([view_count])
  @@index([favorite_count])
  @@map("workbooks")
}

model Tag {
  id          Int     @id @default(autoincrement())
  name        String  @unique @db.VarChar(50)
  description String? @db.VarChar(200)
  color       String? @db.VarChar(7) // Hex color
  is_active   Boolean @default(true)
  created_at  DateTime @default(now())
  updated_at  DateTime @updatedAt

  // Relationships
  workbooks   WorkbookTag[]

  // Indexes
  @@index([name])
  @@index([is_active])
  @@map("tags")
}

model WorkbookTag {
  workbook_id String
  tag_id      Int
  created_at  DateTime @default(now())

  // Relationships
  workbook    Workbook @relation(fields: [workbook_id], references: [id], onDelete: Cascade)
  tag         Tag      @relation(fields: [tag_id], references: [id], onDelete: Cascade)

  @@id([workbook_id, tag_id])
  @@index([tag_id])
  @@map("workbook_tags")
}

// ==============================================
// SOCIAL MODELS
// ==============================================

model Favorite {
  user_id     String
  workbook_id String
  created_at  DateTime @default(now())

  // Relationships
  user        User     @relation(fields: [user_id], references: [id], onDelete: Cascade)
  workbook    Workbook @relation(fields: [workbook_id], references: [id], onDelete: Cascade)

  @@id([user_id, workbook_id])
  @@index([user_id])
  @@index([workbook_id])
  @@index([created_at])
  @@map("favorites")
}

model Follow {
  follower_id  String
  following_id String
  created_at   DateTime @default(now())

  // Relationships
  follower     User     @relation("Followers", fields: [follower_id], references: [id], onDelete: Cascade)
  following    User     @relation("Following", fields: [following_id], references: [id], onDelete: Cascade)

  @@id([follower_id, following_id])
  @@index([follower_id])
  @@index([following_id])
  @@index([created_at])
  @@map("follows")
}

// ==============================================
// ADMIN & CURATION MODELS
// ==============================================

model FeaturedItem {
  id                  Int      @id @default(autoincrement())
  item_id             String   @db.VarChar(50)
  item_type           ItemType
  feature_type        FeatureType
  featured_date       DateTime @db.Date
  expires_at          DateTime?
  is_active           Boolean  @default(true)
  created_at          DateTime @default(now())
  updated_at          DateTime @updatedAt

  // Foreign Keys
  curated_by_admin_id String

  // Relationships
  curated_by          User     @relation(fields: [curated_by_admin_id], references: [id])
  workbook            Workbook? @relation(name: "FeaturedWorkbook", fields: [item_id], references: [id])

  // Indexes
  @@index([item_id])
  @@index([feature_type])
  @@index([featured_date])
  @@index([is_active])
  @@map("featured_items")
}

model Report {
  id            String      @id @default(uuid())
  report_type   ReportType
  reason        String      @db.VarChar(200)
  description   String?     @db.Text
  status        ReportStatus @default(PENDING)
  admin_notes   String?     @db.Text
  created_at    DateTime    @default(now())
  updated_at    DateTime    @updatedAt

  // Foreign Keys
  reporter_id   String
  reported_user_id String?
  reported_workbook_id String?

  // Relationships
  reporter      User        @relation("Reporter", fields: [reporter_id], references: [id])
  reported_user User?       @relation("ReportedUser", fields: [reported_user_id], references: [id])
  reported_workbook Workbook? @relation("ReportedWorkbook", fields: [reported_workbook_id], references: [id])

  // Indexes
  @@index([report_type])
  @@index([status])
  @@index([created_at])
  @@map("reports")
}

// ==============================================
// AUTHENTICATION MODELS
// ==============================================

model RefreshToken {
  id        String   @id @default(uuid())
  token     String   @unique @db.VarChar(500)
  expires_at DateTime
  is_revoked Boolean  @default(false)
  created_at DateTime @default(now())

  // Foreign Keys
  user_id   String

  // Relationships
  user      User     @relation(fields: [user_id], references: [id], onDelete: Cascade)

  // Indexes
  @@index([user_id])
  @@index([expires_at])
  @@index([is_revoked])
  @@map("refresh_tokens")
}

// ==============================================
// ANALYTICS MODELS
// ==============================================

model WorkbookView {
  id          String   @id @default(uuid())
  workbook_id String
  user_id     String?  // Null for anonymous views
  ip_address  String?  @db.VarChar(45) // IPv6 compatible
  user_agent  String?  @db.Text
  referrer    String?  @db.VarChar(500)
  created_at  DateTime @default(now())

  // Relationships
  workbook    Workbook @relation(fields: [workbook_id], references: [id], onDelete: Cascade)

  // Indexes
  @@index([workbook_id])
  @@index([user_id])
  @@index([created_at])
  @@map("workbook_views")
}

// ==============================================
// ENUMS
// ==============================================

enum ItemType {
  workbook
  user
}

enum FeatureType {
  viz_of_the_day
  featured_author
  highlight
  trending
}

enum ReportType {
  SPAM
  INAPPROPRIATE_CONTENT
  HARASSMENT
  COPYRIGHT_VIOLATION
  FAKE_ACCOUNT
  OTHER
}

enum ReportStatus {
  PENDING
  IN_REVIEW
  RESOLVED
  DISMISSED
}
```

---

## Prisma Configuration

### Environment Variables

```bash
# .env
DATABASE_URL="postgresql://username:password@localhost:5432/sigma_playground_dev?schema=public"
DIRECT_URL="postgresql://username:password@localhost:5432/sigma_playground_dev?schema=public"

# Production
DATABASE_URL="postgresql://username:password@prod-host:5432/sigma_playground?schema=public"
DIRECT_URL="postgresql://username:password@prod-host:5432/sigma_playground?schema=public"
```

### Prisma Client Configuration

```typescript
// src/lib/prisma.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: ['query', 'error', 'warn'],
  errorFormat: 'pretty',
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

---

## Migration Strategy

### Sprint-by-Sprint Migration Plan

#### Sprint 0: Initial Schema
```bash
# Create initial migration
npx prisma migrate dev --name init

# Migration file: prisma/migrations/20240101000000_init/migration.sql
```

#### Sprint 1: User Authentication
```bash
# Add refresh tokens and user enhancements
npx prisma migrate dev --name add_auth_features

# Migration file: prisma/migrations/20240101000001_add_auth_features/migration.sql
```

#### Sprint 2: Workbook Publishing
```bash
# Add workbook and tag models
npx prisma migrate dev --name add_workbook_models

# Migration file: prisma/migrations/20240101000002_add_workbook_models/migration.sql
```

#### Sprint 3: Social Features
```bash
# Add favorites and follows
npx prisma migrate dev --name add_social_features

# Migration file: prisma/migrations/20240101000003_add_social_features/migration.sql
```

#### Sprint 4: Admin Features
```bash
# Add featured items and reports
npx prisma migrate dev --name add_admin_features

# Migration file: prisma/migrations/20240101000004_add_admin_features/migration.sql
```

### Migration Best Practices

```typescript
// src/database/migration-helper.ts
export class MigrationHelper {
  static async safeMigration(migrationName: string, migrationFn: () => Promise<void>) {
    try {
      console.log(`Starting migration: ${migrationName}`)
      await migrationFn()
      console.log(`Migration completed: ${migrationName}`)
    } catch (error) {
      console.error(`Migration failed: ${migrationName}`, error)
      throw error
    }
  }

  static async rollbackMigration(migrationName: string) {
    // Implement rollback logic
    console.log(`Rolling back migration: ${migrationName}`)
  }
}
```

---

## Performance Optimization

### Database Indexes

```sql
-- Performance indexes
CREATE INDEX CONCURRENTLY idx_users_username_lower ON users(LOWER(username));
CREATE INDEX CONCURRENTLY idx_users_email_lower ON users(LOWER(email));
CREATE INDEX CONCURRENTLY idx_workbooks_title_search ON workbooks USING gin(to_tsvector('english', title));
CREATE INDEX CONCURRENTLY idx_workbooks_description_search ON workbooks USING gin(to_tsvector('english', description));
CREATE INDEX CONCURRENTLY idx_workbooks_author_published ON workbooks(author_id, published_at DESC);
CREATE INDEX CONCURRENTLY idx_favorites_user_created ON favorites(user_id, created_at DESC);
CREATE INDEX CONCURRENTLY idx_follows_follower_created ON follows(follower_id, created_at DESC);
CREATE INDEX CONCURRENTLY idx_workbook_views_workbook_created ON workbook_views(workbook_id, created_at DESC);

-- Composite indexes for common queries
CREATE INDEX CONCURRENTLY idx_workbooks_public_featured ON workbooks(is_publicly_visible, is_featured, published_at DESC);
CREATE INDEX CONCURRENTLY idx_workbooks_author_public ON workbooks(author_id, is_publicly_visible, published_at DESC);
```

### Query Optimization

```typescript
// src/services/optimized-queries.ts
export class OptimizedQueries {
  // Optimized user profile query
  static async getUserProfile(username: string) {
    return prisma.user.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
        full_name: true,
        bio: true,
        title: true,
        organization: true,
        location: true,
        social_links: true,
        profile_image_url: true,
        created_at: true,
        workbooks: {
          where: { is_publicly_visible: true },
          select: {
            id: true,
            title: true,
            description: true,
            thumbnail_url: true,
            view_count: true,
            favorite_count: true,
            published_at: true,
            tags: {
              select: { tag: { select: { name: true, color: true } } }
            }
          },
          orderBy: { published_at: 'desc' },
          take: 12
        },
        _count: {
          select: {
            workbooks: { where: { is_publicly_visible: true } },
            followers: true,
            following: true
          }
        }
      }
    })
  }

  // Optimized workbook listing query
  static async getWorkbooksList(filters: WorkbookFilters) {
    return prisma.workbook.findMany({
      where: {
        is_publicly_visible: true,
        ...(filters.tags && {
          tags: { some: { tag: { name: { in: filters.tags } } } }
        }),
        ...(filters.search && {
          OR: [
            { title: { contains: filters.search, mode: 'insensitive' } },
            { description: { contains: filters.search, mode: 'insensitive' } }
          ]
        })
      },
      select: {
        id: true,
        title: true,
        description: true,
        thumbnail_url: true,
        view_count: true,
        favorite_count: true,
        published_at: true,
        author: {
          select: {
            id: true,
            username: true,
            full_name: true,
            profile_image_url: true
          }
        },
        tags: {
          select: { tag: { select: { name: true, color: true } } }
        }
      },
      orderBy: filters.sort === 'popular' 
        ? { favorite_count: 'desc' }
        : { published_at: 'desc' },
      skip: filters.offset || 0,
      take: filters.limit || 20
    })
  }
}
```

---

## Data Validation & Constraints

### Prisma Validation Rules

```typescript
// src/validation/database-validation.ts
export const DatabaseValidation = {
  user: {
    username: {
      minLength: 3,
      maxLength: 50,
      pattern: /^[a-zA-Z0-9_-]+$/,
      unique: true
    },
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      unique: true
    },
    password: {
      minLength: 8,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSpecialChars: true
    }
  },
  workbook: {
    title: {
      minLength: 1,
      maxLength: 200
    },
    description: {
      maxLength: 2000
    },
    sigma_embed_url: {
      pattern: /^https:\/\/.*sigma.*\/(embed|public|viz)\//,
      maxLength: 1000
    }
  },
  tag: {
    name: {
      minLength: 1,
      maxLength: 50,
      pattern: /^[a-zA-Z0-9\s-]+$/,
      unique: true
    }
  }
}
```

### Database Constraints

```sql
-- Additional constraints
ALTER TABLE users ADD CONSTRAINT check_username_format 
  CHECK (username ~ '^[a-zA-Z0-9_-]{3,50}$');

ALTER TABLE users ADD CONSTRAINT check_email_format 
  CHECK (email ~ '^[^\s@]+@[^\s@]+\.[^\s@]+$');

ALTER TABLE workbooks ADD CONSTRAINT check_title_length 
  CHECK (char_length(title) >= 1 AND char_length(title) <= 200);

ALTER TABLE workbooks ADD CONSTRAINT check_embed_url_format 
  CHECK (sigma_embed_url ~ '^https://.*sigma.*/(embed|public|viz)/');

ALTER TABLE tags ADD CONSTRAINT check_tag_name_format 
  CHECK (name ~ '^[a-zA-Z0-9\s-]{1,50}$');
```

---

## Seed Data & Testing

### Seed Data Script

```typescript
// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Create admin user
  const adminUser = await prisma.user.create({
    data: {
      username: 'admin',
      email: 'admin@sigmaplayground.com',
      password_hash: await bcrypt.hash('admin123!', 10),
      full_name: 'Admin User',
      bio: 'Platform administrator',
      title: 'Platform Admin',
      organization: 'Sigma Playground',
      is_admin: true,
      is_verified: true
    }
  })

  // Create sample users
  const users = []
  for (let i = 0; i < 50; i++) {
    const user = await prisma.user.create({
      data: {
        username: faker.internet.userName().toLowerCase(),
        email: faker.internet.email(),
        password_hash: await bcrypt.hash('password123!', 10),
        full_name: faker.person.fullName(),
        bio: faker.lorem.sentence(),
        title: faker.person.jobTitle(),
        organization: faker.company.name(),
        location: faker.location.city(),
        social_links: {
          linkedin: faker.internet.url(),
          twitter: faker.internet.url(),
          website: faker.internet.url()
        },
        profile_image_url: faker.image.avatar()
      }
    })
    users.push(user)
  }

  // Create tags
  const tagNames = [
    'Finance', 'Marketing', 'Sales', 'Operations', 'HR', 'Analytics',
    'Dashboard', 'KPI', 'Revenue', 'Customer', 'Product', 'Growth',
    'Data Visualization', 'Business Intelligence', 'Reporting', 'Metrics'
  ]

  const tags = []
  for (const name of tagNames) {
    const tag = await prisma.tag.create({
      data: {
        name,
        description: faker.lorem.sentence(),
        color: faker.color.rgb({ format: 'hex' })
      }
    })
    tags.push(tag)
  }

  // Create workbooks
  for (const user of users) {
    const workbookCount = faker.number.int({ min: 1, max: 5 })
    
    for (let i = 0; i < workbookCount; i++) {
      const workbook = await prisma.workbook.create({
        data: {
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          sigma_embed_url: `https://app.sigma.com/embed/workbook/${faker.string.uuid()}`,
          thumbnail_url: faker.image.url(),
          author_id: user.id,
          view_count: faker.number.int({ min: 0, max: 1000 }),
          favorite_count: faker.number.int({ min: 0, max: 100 }),
          published_at: faker.date.past()
        }
      })

      // Add random tags
      const randomTags = faker.helpers.arrayElements(tags, { min: 1, max: 3 })
      for (const tag of randomTags) {
        await prisma.workbookTag.create({
          data: {
            workbook_id: workbook.id,
            tag_id: tag.id
          }
        })
      }
    }
  }

  // Create some follows
  for (let i = 0; i < 100; i++) {
    const follower = faker.helpers.arrayElement(users)
    const following = faker.helpers.arrayElement(users.filter(u => u.id !== follower.id))
    
    await prisma.follow.create({
      data: {
        follower_id: follower.id,
        following_id: following.id
      }
    })
  }

  // Create some favorites
  const workbooks = await prisma.workbook.findMany()
  for (let i = 0; i < 200; i++) {
    const user = faker.helpers.arrayElement(users)
    const workbook = faker.helpers.arrayElement(workbooks)
    
    await prisma.favorite.create({
      data: {
        user_id: user.id,
        workbook_id: workbook.id
      }
    })
  }

  console.log('✅ Seed completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

### Test Data Factory

```typescript
// src/test/factories/database-factory.ts
export class DatabaseFactory {
  static async createUser(overrides: Partial<User> = {}) {
    return prisma.user.create({
      data: {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password_hash: await bcrypt.hash('password123!', 10),
        full_name: faker.person.fullName(),
        ...overrides
      }
    })
  }

  static async createWorkbook(authorId: string, overrides: Partial<Workbook> = {}) {
    return prisma.workbook.create({
      data: {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        sigma_embed_url: `https://app.sigma.com/embed/workbook/${faker.string.uuid()}`,
        author_id: authorId,
        ...overrides
      }
    })
  }

  static async createTag(overrides: Partial<Tag> = {}) {
    return prisma.tag.create({
      data: {
        name: faker.lorem.word(),
        description: faker.lorem.sentence(),
        color: faker.color.rgb({ format: 'hex' }),
        ...overrides
      }
    })
  }
}
```

---

## Backup & Recovery

### Backup Strategy

```bash
#!/bin/bash
# scripts/backup-database.sh

# Configuration
DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="sigma_playground"
DB_USER="postgres"
BACKUP_DIR="/backups/sigma_playground"
RETENTION_DAYS=30

# Create backup directory
mkdir -p $BACKUP_DIR

# Generate backup filename with timestamp
BACKUP_FILE="$BACKUP_DIR/sigma_playground_$(date +%Y%m%d_%H%M%S).sql"

# Create backup
pg_dump -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME \
  --verbose --clean --no-owner --no-privileges \
  --format=plain --file=$BACKUP_FILE

# Compress backup
gzip $BACKUP_FILE

# Remove old backups
find $BACKUP_DIR -name "*.sql.gz" -mtime +$RETENTION_DAYS -delete

echo "Backup completed: $BACKUP_FILE.gz"
```

### Recovery Procedures

```bash
#!/bin/bash
# scripts/restore-database.sh

BACKUP_FILE=$1
DB_NAME="sigma_playground"

if [ -z "$BACKUP_FILE" ]; then
  echo "Usage: $0 <backup_file>"
  exit 1
fi

# Decompress if needed
if [[ $BACKUP_FILE == *.gz ]]; then
  gunzip -c $BACKUP_FILE | psql -d $DB_NAME
else
  psql -d $DB_NAME < $BACKUP_FILE
fi

echo "Database restored from: $BACKUP_FILE"
```

---

## Monitoring & Maintenance

### Database Health Checks

```typescript
// src/health/database-health.ts
export class DatabaseHealth {
  static async checkConnection(): Promise<HealthStatus> {
    try {
      await prisma.$queryRaw`SELECT 1`
      return { status: 'healthy', message: 'Database connection successful' }
    } catch (error) {
      return { status: 'unhealthy', message: `Database connection failed: ${error.message}` }
    }
  }

  static async checkQueryPerformance(): Promise<HealthStatus> {
    const start = Date.now()
    await prisma.user.findFirst()
    const duration = Date.now() - start

    if (duration > 1000) {
      return { status: 'degraded', message: `Slow query performance: ${duration}ms` }
    }

    return { status: 'healthy', message: `Query performance: ${duration}ms` }
  }

  static async checkTableSizes(): Promise<HealthStatus> {
    const result = await prisma.$queryRaw`
      SELECT 
        schemaname,
        tablename,
        pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size
      FROM pg_tables 
      WHERE schemaname = 'public'
      ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC
    `

    return { status: 'healthy', message: 'Table sizes checked', data: result }
  }
}
```

### Maintenance Tasks

```typescript
// src/maintenance/database-maintenance.ts
export class DatabaseMaintenance {
  @Cron('0 2 * * *') // Daily at 2 AM
  static async cleanupExpiredTokens() {
    await prisma.refreshToken.deleteMany({
      where: {
        OR: [
          { expires_at: { lt: new Date() } },
          { is_revoked: true }
        ]
      }
    })
  }

  @Cron('0 3 * * 0') // Weekly on Sunday at 3 AM
  static async updateWorkbookStats() {
    // Update favorite counts
    await prisma.$executeRaw`
      UPDATE workbooks 
      SET favorite_count = (
        SELECT COUNT(*) 
        FROM favorites 
        WHERE workbook_id = workbooks.id
      )
    `

    // Update view counts
    await prisma.$executeRaw`
      UPDATE workbooks 
      SET view_count = (
        SELECT COUNT(*) 
        FROM workbook_views 
        WHERE workbook_id = workbooks.id
      )
    `
  }

  @Cron('0 4 * * 1') // Weekly on Monday at 4 AM
  static async analyzeTables() {
    await prisma.$executeRaw`ANALYZE`
  }
}
```

---

## Troubleshooting Guide

### Common Issues

#### 1. Connection Pool Exhaustion
```typescript
// Solution: Configure connection pool
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL + "?connection_limit=20&pool_timeout=20"
    }
  }
})
```

#### 2. Slow Queries
```sql
-- Check slow queries
SELECT query, mean_time, calls, total_time
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 10;
```

#### 3. Lock Contention
```sql
-- Check for locks
SELECT 
  blocked_locks.pid AS blocked_pid,
  blocked_activity.usename AS blocked_user,
  blocking_locks.pid AS blocking_pid,
  blocking_activity.usename AS blocking_user,
  blocked_activity.query AS blocked_statement
FROM pg_catalog.pg_locks blocked_locks
JOIN pg_catalog.pg_stat_activity blocked_activity ON blocked_activity.pid = blocked_locks.pid
JOIN pg_catalog.pg_locks blocking_locks ON blocking_locks.locktype = blocked_locks.locktype
JOIN pg_catalog.pg_stat_activity blocking_activity ON blocking_activity.pid = blocking_locks.pid
WHERE NOT blocked_locks.granted;
```

---

## References & Resources

- [Prisma Documentation](https://www.prisma.io/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Database Performance Tuning](https://www.postgresql.org/docs/current/performance-tips.html)
- [Prisma Best Practices](https://www.prisma.io/docs/guides/performance-and-optimization)
- [PostgreSQL Indexing](https://www.postgresql.org/docs/current/indexes.html)

---

## Version Control

- **Version:** 1.0.0
- **Last Updated:** 2024-01-01
- **Next Review:** 2024-02-01
- **Maintainer:** Development Team
