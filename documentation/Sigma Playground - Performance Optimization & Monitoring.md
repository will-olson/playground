# Sigma Playground - Performance Optimization & Monitoring

## Executive Summary
This document outlines comprehensive performance optimization strategies and monitoring solutions for Sigma Playground, covering caching, database optimization, CDN configuration, and real-time performance monitoring.

---

## Table of Contents
1. [Performance Benchmarks](#performance-benchmarks)
2. [Caching Strategies](#caching-strategies)
3. [Database Optimization](#database-optimization)
4. [Frontend Performance](#frontend-performance)
5. [CDN Configuration](#cdn-configuration)
6. [Monitoring & Alerting](#monitoring--alerting)
7. [Performance Testing](#performance-testing)
8. [Capacity Planning](#capacity-planning)
9. [Optimization Tools](#optimization-tools)
10. [Troubleshooting Guide](#troubleshooting-guide)

---

## Performance Benchmarks

### SLA Definitions

```typescript
// Performance SLA definitions
export const PerformanceSLA = {
  responseTime: {
    api: {
      p50: 200, // 50th percentile in ms
      p95: 500, // 95th percentile in ms
      p99: 1000, // 99th percentile in ms
    },
    pageLoad: {
      p50: 1000, // 50th percentile in ms
      p95: 2000, // 95th percentile in ms
      p99: 3000, // 99th percentile in ms
    },
  },
  
  throughput: {
    requestsPerSecond: 1000,
    concurrentUsers: 5000,
    databaseConnections: 100,
  },
  
  availability: {
    uptime: 99.9, // 99.9% uptime
    maxDowntime: 8.76, // hours per year
    errorRate: 0.1, // 0.1% error rate
  },
  
  resourceUtilization: {
    cpu: 70, // 70% CPU usage
    memory: 80, // 80% memory usage
    disk: 85, // 85% disk usage
  },
};
```

### Performance Metrics

```typescript
// Performance metrics collection
export class PerformanceMetrics {
  private metrics: Map<string, number> = new Map();
  
  recordMetric(name: string, value: number, tags?: Record<string, string>) {
    const key = this.buildKey(name, tags);
    this.metrics.set(key, value);
    
    // Send to monitoring system
    this.sendToMonitoring(name, value, tags);
  }
  
  recordTiming(name: string, startTime: number, endTime: number, tags?: Record<string, string>) {
    const duration = endTime - startTime;
    this.recordMetric(name, duration, tags);
  }
  
  recordCounter(name: string, increment: number = 1, tags?: Record<string, string>) {
    const key = this.buildKey(name, tags);
    const current = this.metrics.get(key) || 0;
    this.metrics.set(key, current + increment);
    
    this.sendToMonitoring(name, increment, { ...tags, type: 'counter' });
  }
  
  private buildKey(name: string, tags?: Record<string, string>): string {
    if (!tags) return name;
    const tagString = Object.entries(tags)
      .map(([key, value]) => `${key}:${value}`)
      .join(',');
    return `${name}[${tagString}]`;
  }
  
  private sendToMonitoring(name: string, value: number, tags?: Record<string, string>) {
    // Send to Prometheus, DataDog, or other monitoring system
    console.log(`Metric: ${name} = ${value}`, tags);
  }
}
```

---

## Caching Strategies

### Redis Caching Implementation

```typescript
// Redis caching service
@Injectable()
export class CacheService {
  constructor(
    private redis: Redis,
    private metrics: PerformanceMetrics
  ) {}

  async get<T>(key: string): Promise<T | null> {
    const startTime = Date.now();
    
    try {
      const value = await this.redis.get(key);
      const endTime = Date.now();
      
      this.metrics.recordTiming('cache.get.duration', startTime, endTime, { hit: value !== null });
      this.metrics.recordCounter('cache.get.requests', 1, { hit: value !== null });
      
      return value ? JSON.parse(value) : null;
    } catch (error) {
      this.metrics.recordCounter('cache.get.errors', 1);
      throw error;
    }
  }

  async set<T>(key: string, value: T, ttl: number = 3600): Promise<void> {
    const startTime = Date.now();
    
    try {
      await this.redis.setex(key, ttl, JSON.stringify(value));
      const endTime = Date.now();
      
      this.metrics.recordTiming('cache.set.duration', startTime, endTime);
      this.metrics.recordCounter('cache.set.requests', 1);
    } catch (error) {
      this.metrics.recordCounter('cache.set.errors', 1);
      throw error;
    }
  }

  async del(key: string): Promise<void> {
    await this.redis.del(key);
    this.metrics.recordCounter('cache.delete.requests', 1);
  }

  async invalidatePattern(pattern: string): Promise<void> {
    const keys = await this.redis.keys(pattern);
    if (keys.length > 0) {
      await this.redis.del(...keys);
    }
    this.metrics.recordCounter('cache.invalidate.requests', 1, { pattern });
  }
}

// Caching decorator
export function Cache(ttl: number = 3600, keyGenerator?: (...args: any[]) => string) {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    const cacheService = new CacheService(new Redis(), new PerformanceMetrics());

    descriptor.value = async function (...args: any[]) {
      const cacheKey = keyGenerator ? keyGenerator(...args) : `${propertyName}:${JSON.stringify(args)}`;
      
      // Try to get from cache
      const cached = await cacheService.get(cacheKey);
      if (cached !== null) {
        return cached;
      }

      // Execute method and cache result
      const result = await method.apply(this, args);
      await cacheService.set(cacheKey, result, ttl);
      
      return result;
    };
  };
}
```

### Application-Level Caching

```typescript
// Application cache service
@Injectable()
export class ApplicationCacheService {
  private memoryCache = new Map<string, { value: any; expiry: number }>();
  private maxSize = 1000;

  get<T>(key: string): T | null {
    const item = this.memoryCache.get(key);
    
    if (!item) {
      return null;
    }

    if (Date.now() > item.expiry) {
      this.memoryCache.delete(key);
      return null;
    }

    return item.value;
  }

  set<T>(key: string, value: T, ttl: number = 300000): void {
    // Remove oldest items if cache is full
    if (this.memoryCache.size >= this.maxSize) {
      const firstKey = this.memoryCache.keys().next().value;
      this.memoryCache.delete(firstKey);
    }

    this.memoryCache.set(key, {
      value,
      expiry: Date.now() + ttl,
    });
  }

  clear(): void {
    this.memoryCache.clear();
  }

  size(): number {
    return this.memoryCache.size;
  }
}

// Cache warming service
@Injectable()
export class CacheWarmingService {
  constructor(
    private cacheService: CacheService,
    private workbookService: WorkbookService,
    private userService: UserService
  ) {}

  async warmCache(): Promise<void> {
    console.log('Starting cache warming...');
    
    // Warm popular workbooks
    await this.warmPopularWorkbooks();
    
    // Warm user profiles
    await this.warmActiveUsers();
    
    // Warm featured content
    await this.warmFeaturedContent();
    
    console.log('Cache warming completed');
  }

  private async warmPopularWorkbooks(): Promise<void> {
    const popularWorkbooks = await this.workbookService.getPopularWorkbooks(50);
    
    for (const workbook of popularWorkbooks) {
      await this.cacheService.set(
        `workbook:${workbook.id}`,
        workbook,
        3600 // 1 hour
      );
    }
  }

  private async warmActiveUsers(): Promise<void> {
    const activeUsers = await this.userService.getActiveUsers(100);
    
    for (const user of activeUsers) {
      await this.cacheService.set(
        `user:${user.id}`,
        user,
        1800 // 30 minutes
      );
    }
  }
}
```

---

## Database Optimization

### Query Optimization

```typescript
// Optimized database queries
export class OptimizedDatabaseService {
  constructor(private prisma: PrismaService) {}

  // Optimized workbook listing with pagination
  async getWorkbooksOptimized(filters: WorkbookFilters): Promise<WorkbookListResult> {
    const startTime = Date.now();
    
    // Build optimized query
    const whereClause = this.buildWhereClause(filters);
    const orderBy = this.buildOrderBy(filters.sort);
    
    const [workbooks, totalCount] = await Promise.all([
      this.prisma.workbook.findMany({
        where: whereClause,
        orderBy,
        skip: filters.offset || 0,
        take: filters.limit || 20,
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
              profile_image_url: true,
            },
          },
          tags: {
            select: {
              tag: {
                select: {
                  name: true,
                  color: true,
                },
              },
            },
          },
        },
      }),
      this.prisma.workbook.count({ where: whereClause }),
    ]);

    const endTime = Date.now();
    console.log(`Query executed in ${endTime - startTime}ms`);

    return {
      workbooks,
      totalCount,
      hasMore: (filters.offset || 0) + workbooks.length < totalCount,
    };
  }

  // Optimized user profile with workbooks
  async getUserProfileOptimized(userId: string): Promise<UserProfile> {
    const startTime = Date.now();
    
    const [user, workbooks, stats] = await Promise.all([
      this.prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          username: true,
          full_name: true,
          bio: true,
          profile_image_url: true,
          created_at: true,
        },
      }),
      this.prisma.workbook.findMany({
        where: {
          author_id: userId,
          is_publicly_visible: true,
        },
        select: {
          id: true,
          title: true,
          description: true,
          thumbnail_url: true,
          view_count: true,
          favorite_count: true,
          published_at: true,
        },
        orderBy: { published_at: 'desc' },
        take: 12,
      }),
      this.prisma.user.findUnique({
        where: { id: userId },
        select: {
          _count: {
            select: {
              workbooks: {
                where: { is_publicly_visible: true },
              },
              followers: true,
              following: true,
            },
          },
        },
      }),
    ]);

    const endTime = Date.now();
    console.log(`User profile query executed in ${endTime - startTime}ms`);

    return {
      ...user,
      workbooks,
      stats: stats._count,
    };
  }

  private buildWhereClause(filters: WorkbookFilters) {
    const where: any = {
      is_publicly_visible: true,
    };

    if (filters.search) {
      where.OR = [
        { title: { contains: filters.search, mode: 'insensitive' } },
        { description: { contains: filters.search, mode: 'insensitive' } },
      ];
    }

    if (filters.tags && filters.tags.length > 0) {
      where.tags = {
        some: {
          tag: {
            name: { in: filters.tags },
          },
        },
      };
    }

    return where;
  }

  private buildOrderBy(sort: string) {
    switch (sort) {
      case 'popular':
        return { favorite_count: 'desc' };
      case 'trending':
        return { view_count: 'desc' };
      case 'oldest':
        return { published_at: 'asc' };
      default:
        return { published_at: 'desc' };
    }
  }
}
```

### Database Indexing Strategy

```sql
-- Performance indexes
CREATE INDEX CONCURRENTLY idx_workbooks_public_published 
ON workbooks(is_publicly_visible, published_at DESC) 
WHERE is_publicly_visible = true;

CREATE INDEX CONCURRENTLY idx_workbooks_author_public 
ON workbooks(author_id, is_publicly_visible, published_at DESC) 
WHERE is_publicly_visible = true;

CREATE INDEX CONCURRENTLY idx_workbooks_title_search 
ON workbooks USING gin(to_tsvector('english', title));

CREATE INDEX CONCURRENTLY idx_workbooks_description_search 
ON workbooks USING gin(to_tsvector('english', description));

CREATE INDEX CONCURRENTLY idx_workbook_tags_tag_name 
ON workbook_tags(tag_id) 
INCLUDE (workbook_id);

CREATE INDEX CONCURRENTLY idx_users_username_lower 
ON users(LOWER(username));

CREATE INDEX CONCURRENTLY idx_users_email_lower 
ON users(LOWER(email));

CREATE INDEX CONCURRENTLY idx_favorites_user_created 
ON favorites(user_id, created_at DESC);

CREATE INDEX CONCURRENTLY idx_follows_follower_created 
ON follows(follower_id, created_at DESC);

-- Composite indexes for common queries
CREATE INDEX CONCURRENTLY idx_workbooks_featured_public 
ON workbooks(is_featured, is_publicly_visible, published_at DESC) 
WHERE is_featured = true AND is_publicly_visible = true;

-- Partial indexes for better performance
CREATE INDEX CONCURRENTLY idx_workbooks_recent_views 
ON workbooks(published_at DESC) 
WHERE published_at > NOW() - INTERVAL '30 days';

-- Covering indexes to avoid table lookups
CREATE INDEX CONCURRENTLY idx_workbooks_list_covering 
ON workbooks(id, title, description, thumbnail_url, view_count, favorite_count, published_at, author_id) 
WHERE is_publicly_visible = true;
```

### Connection Pooling

```typescript
// Database connection pooling configuration
export const DatabaseConfig = {
  connectionPool: {
    min: 5,
    max: 20,
    acquireTimeoutMillis: 60000,
    createTimeoutMillis: 30000,
    destroyTimeoutMillis: 5000,
    idleTimeoutMillis: 30000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 200,
  },
  
  query: {
    timeout: 30000,
    slowQueryThreshold: 1000,
  },
  
  monitoring: {
    enabled: true,
    logSlowQueries: true,
    logQueryStats: true,
  },
};

// Database monitoring service
@Injectable()
export class DatabaseMonitoringService {
  private slowQueries: Map<string, number> = new Map();
  
  async logQuery(query: string, duration: number, params?: any[]): Promise<void> {
    if (duration > DatabaseConfig.query.slowQueryThreshold) {
      console.warn(`Slow query detected: ${duration}ms`, { query, params });
      this.slowQueries.set(query, (this.slowQueries.get(query) || 0) + 1);
    }
  }
  
  getSlowQueries(): Array<{ query: string; count: number }> {
    return Array.from(this.slowQueries.entries()).map(([query, count]) => ({
      query,
      count,
    }));
  }
}
```

---

## Frontend Performance

### Code Splitting & Lazy Loading

```typescript
// Lazy loading implementation
export const LazyWorkbookCard = lazy(() => import('./WorkbookCard'));
export const LazyUserProfile = lazy(() => import('./UserProfile'));
export const LazyCreateWorkbookForm = lazy(() => import('./CreateWorkbookForm'));

// Route-based code splitting
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/workbooks" element={<LazyWorkbookList />} />
      <Route path="/workbooks/:id" element={<LazyWorkbookDetail />} />
      <Route path="/users/:username" element={<LazyUserProfile />} />
      <Route path="/create" element={<LazyCreateWorkbookForm />} />
    </Routes>
  );
};

// Image optimization
export const OptimizedImage = ({ src, alt, ...props }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative">
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
```

### Virtual Scrolling

```typescript
// Virtual scrolling for large lists
export const VirtualizedWorkbookList = ({ workbooks }: { workbooks: Workbook[] }) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(600);
  
  const { virtualItems, totalSize } = useVirtualizer({
    count: workbooks.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 300,
    overscan: 5,
  });

  useEffect(() => {
    const updateHeight = () => {
      if (parentRef.current) {
        setContainerHeight(parentRef.current.clientHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div
      ref={parentRef}
      className="h-96 overflow-auto"
      style={{ height: containerHeight }}
    >
      <div
        style={{
          height: `${totalSize}px`,
          position: 'relative',
        }}
      >
        {virtualItems.map((virtualItem) => (
          <div
            key={virtualItem.index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            <WorkbookCard workbook={workbooks[virtualItem.index]} />
          </div>
        ))}
      </div>
    </div>
  );
};
```

### Performance Monitoring

```typescript
// Frontend performance monitoring
export class FrontendPerformanceMonitor {
  private metrics: PerformanceMetrics = new PerformanceMetrics();

  init() {
    // Monitor Core Web Vitals
    this.monitorCoreWebVitals();
    
    // Monitor resource loading
    this.monitorResourceLoading();
    
    // Monitor user interactions
    this.monitorUserInteractions();
  }

  private monitorCoreWebVitals() {
    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.recordMetric('lcp', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        this.metrics.recordMetric('fid', entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    new PerformanceObserver((list) => {
      let clsValue = 0;
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.metrics.recordMetric('cls', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }

  private monitorResourceLoading() {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      this.metrics.recordMetric('dom_content_loaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
      this.metrics.recordMetric('load_complete', navigation.loadEventEnd - navigation.loadEventStart);
      this.metrics.recordMetric('total_load_time', navigation.loadEventEnd - navigation.fetchStart);
    });
  }

  private monitorUserInteractions() {
    // Track button clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'BUTTON') {
        this.metrics.recordCounter('user_interaction.button_click', 1, {
          button: target.textContent || 'unknown',
        });
      }
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      this.metrics.recordCounter('user_interaction.form_submit', 1, {
        form: form.id || 'unknown',
      });
    });
  }
}
```

---

## CDN Configuration

### CDN Setup

```typescript
// CDN configuration
export const CDNConfig = {
  provider: 'cloudflare',
  domains: {
    static: 'cdn.sigmaplayground.com',
    images: 'img.sigmaplayground.com',
    api: 'api.sigmaplayground.com',
  },
  
  caching: {
    static: {
      ttl: 31536000, // 1 year
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
    images: {
      ttl: 2592000, // 30 days
      headers: {
        'Cache-Control': 'public, max-age=2592000',
      },
    },
    api: {
      ttl: 300, // 5 minutes
      headers: {
        'Cache-Control': 'public, max-age=300',
      },
    },
  },
  
  compression: {
    enabled: true,
    algorithms: ['gzip', 'brotli'],
    minSize: 1024, // 1KB
  },
  
  security: {
    cors: {
      enabled: true,
      origins: ['https://sigmaplayground.com'],
    },
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
    },
  },
};

// CDN service
@Injectable()
export class CDNService {
  constructor(private httpService: HttpService) {}

  async purgeCache(urls: string[]): Promise<void> {
    const response = await this.httpService.post('/cdn/purge', {
      urls,
    }).toPromise();
    
    console.log('CDN cache purged:', response);
  }

  async getCacheStatus(url: string): Promise<CacheStatus> {
    const response = await this.httpService.head(url).toPromise();
    
    return {
      cached: response.headers['x-cache'] === 'HIT',
      ttl: response.headers['x-cache-ttl'],
      lastModified: response.headers['last-modified'],
    };
  }
}
```

### Image Optimization

```typescript
// Image optimization service
@Injectable()
export class ImageOptimizationService {
  constructor(private cdnService: CDNService) {}

  getOptimizedImageUrl(
    originalUrl: string,
    width?: number,
    height?: number,
    quality: number = 80,
    format: 'webp' | 'avif' | 'jpeg' | 'png' = 'webp'
  ): string {
    const params = new URLSearchParams();
    
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    params.set('q', quality.toString());
    params.set('f', format);
    
    return `${CDNConfig.domains.images}/optimize?${params.toString()}&url=${encodeURIComponent(originalUrl)}`;
  }

  async generateResponsiveImages(originalUrl: string): Promise<ResponsiveImageSet> {
    const breakpoints = [320, 640, 768, 1024, 1280, 1536];
    
    const images = await Promise.all(
      breakpoints.map(async (width) => {
        const webpUrl = this.getOptimizedImageUrl(originalUrl, width, undefined, 80, 'webp');
        const avifUrl = this.getOptimizedImageUrl(originalUrl, width, undefined, 80, 'avif');
        
        return {
          width,
          webp: webpUrl,
          avif: avifUrl,
        };
      })
    );

    return {
      src: originalUrl,
      images,
      sizes: '(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, 1536px',
    };
  }
}
```

---

## Monitoring & Alerting

### Prometheus Configuration

```yaml
# prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "rules/*.yml"

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

scrape_configs:
  - job_name: 'sigma-playground-api'
    static_configs:
      - targets: ['api:3000']
    metrics_path: '/metrics'
    scrape_interval: 30s

  - job_name: 'sigma-playground-frontend'
    static_configs:
      - targets: ['frontend:3000']
    metrics_path: '/metrics'
    scrape_interval: 30s

  - job_name: 'postgres'
    static_configs:
      - targets: ['postgres-exporter:9187']

  - job_name: 'redis'
    static_configs:
      - targets: ['redis-exporter:9121']

  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']
```

### Alert Rules

```yaml
# rules/performance.yml
groups:
  - name: performance
    rules:
      - alert: HighResponseTime
        expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 0.5
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: "High response time detected"
          description: "95th percentile response time is {{ $value }}s"

      - alert: HighErrorRate
        expr: rate(http_requests_total{status_code=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.01
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "High error rate detected"
          description: "Error rate is {{ $value }}%"

      - alert: HighCPUUsage
        expr: 100 - (avg by(instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High CPU usage detected"
          description: "CPU usage is {{ $value }}%"

      - alert: HighMemoryUsage
        expr: (1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)) * 100 > 85
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High memory usage detected"
          description: "Memory usage is {{ $value }}%"

      - alert: DatabaseConnectionsHigh
        expr: pg_stat_database_numbackends > 80
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: "High database connections"
          description: "Database has {{ $value }} active connections"
```

### Grafana Dashboards

```json
{
  "dashboard": {
    "id": null,
    "title": "Sigma Playground - Performance Dashboard",
    "tags": ["sigma-playground", "performance"],
    "timezone": "browser",
    "panels": [
      {
        "id": 1,
        "title": "Request Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "rate(http_requests_total[5m])",
            "legendFormat": "{{method}} {{route}}"
          }
        ],
        "yAxes": [
          {
            "label": "requests/sec"
          }
        ]
      },
      {
        "id": 2,
        "title": "Response Time",
        "type": "graph",
        "targets": [
          {
            "expr": "histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))",
            "legendFormat": "95th percentile"
          },
          {
            "expr": "histogram_quantile(0.50, rate(http_request_duration_seconds_bucket[5m]))",
            "legendFormat": "50th percentile"
          }
        ],
        "yAxes": [
          {
            "label": "seconds"
          }
        ]
      },
      {
        "id": 3,
        "title": "Error Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "rate(http_requests_total{status_code=~\"5..\"}[5m]) / rate(http_requests_total[5m]) * 100",
            "legendFormat": "Error Rate %"
          }
        ],
        "yAxes": [
          {
            "label": "percentage"
          }
        ]
      },
      {
        "id": 4,
        "title": "Database Performance",
        "type": "graph",
        "targets": [
          {
            "expr": "pg_stat_database_numbackends",
            "legendFormat": "Active Connections"
          },
          {
            "expr": "rate(pg_stat_database_tup_returned[5m])",
            "legendFormat": "Tuples Returned/sec"
          }
        ]
      }
    ]
  }
}
```

---

## Performance Testing

### Load Testing with Artillery

```yaml
# load-test.yml
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
  - name: "API Load Test"
    weight: 100
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
```

### Performance Testing Suite

```typescript
// Performance testing service
export class PerformanceTestingService {
  constructor(private httpService: HttpService) {}

  async runLoadTest(config: LoadTestConfig): Promise<LoadTestResults> {
    const results: LoadTestResults = {
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      averageResponseTime: 0,
      maxResponseTime: 0,
      minResponseTime: Infinity,
      requestsPerSecond: 0,
      errorRate: 0,
    };

    const startTime = Date.now();
    const requests = [];

    // Generate requests
    for (let i = 0; i < config.totalRequests; i++) {
      requests.push(this.makeRequest(config.endpoint, config.method, config.data));
    }

    // Execute requests
    const responses = await Promise.allSettled(requests);
    const endTime = Date.now();

    // Process results
    responses.forEach((response) => {
      results.totalRequests++;
      
      if (response.status === 'fulfilled') {
        results.successfulRequests++;
        const responseTime = response.value.responseTime;
        results.averageResponseTime += responseTime;
        results.maxResponseTime = Math.max(results.maxResponseTime, responseTime);
        results.minResponseTime = Math.min(results.minResponseTime, responseTime);
      } else {
        results.failedRequests++;
      }
    });

    // Calculate metrics
    results.averageResponseTime /= results.successfulRequests;
    results.requestsPerSecond = results.totalRequests / ((endTime - startTime) / 1000);
    results.errorRate = (results.failedRequests / results.totalRequests) * 100;

    return results;
  }

  private async makeRequest(endpoint: string, method: string, data?: any): Promise<RequestResult> {
    const startTime = Date.now();
    
    try {
      const response = await this.httpService.request({
        method,
        url: endpoint,
        data,
      }).toPromise();
      
      const endTime = Date.now();
      
      return {
        success: true,
        statusCode: response.status,
        responseTime: endTime - startTime,
        data: response.data,
      };
    } catch (error) {
      const endTime = Date.now();
      
      return {
        success: false,
        statusCode: error.response?.status || 0,
        responseTime: endTime - startTime,
        error: error.message,
      };
    }
  }
}
```

---

## Capacity Planning

### Capacity Planning Service

```typescript
// Capacity planning service
export class CapacityPlanningService {
  constructor(
    private metricsService: MetricsService,
    private databaseService: DatabaseService
  ) {}

  async analyzeCapacity(): Promise<CapacityAnalysis> {
    const currentMetrics = await this.getCurrentMetrics();
    const projectedGrowth = await this.getProjectedGrowth();
    
    return {
      current: currentMetrics,
      projected: projectedGrowth,
      recommendations: this.generateRecommendations(currentMetrics, projectedGrowth),
    };
  }

  private async getCurrentMetrics(): Promise<CurrentCapacity> {
    const [cpu, memory, disk, database, network] = await Promise.all([
      this.getCPUUsage(),
      this.getMemoryUsage(),
      this.getDiskUsage(),
      this.getDatabaseUsage(),
      this.getNetworkUsage(),
    ]);

    return {
      cpu,
      memory,
      disk,
      database,
      network,
      timestamp: new Date(),
    };
  }

  private async getProjectedGrowth(): Promise<ProjectedCapacity> {
    const historicalData = await this.metricsService.getHistoricalData('30d');
    const growthRate = this.calculateGrowthRate(historicalData);
    
    return {
      '1month': this.projectCapacity(historicalData, growthRate, 30),
      '3months': this.projectCapacity(historicalData, growthRate, 90),
      '6months': this.projectCapacity(historicalData, growthRate, 180),
      '1year': this.projectCapacity(historicalData, growthRate, 365),
    };
  }

  private generateRecommendations(current: CurrentCapacity, projected: ProjectedCapacity): CapacityRecommendation[] {
    const recommendations: CapacityRecommendation[] = [];

    // CPU recommendations
    if (current.cpu.usage > 70) {
      recommendations.push({
        type: 'cpu',
        priority: 'high',
        message: 'CPU usage is high. Consider scaling up or adding more instances.',
        action: 'scale_up',
      });
    }

    // Memory recommendations
    if (current.memory.usage > 80) {
      recommendations.push({
        type: 'memory',
        priority: 'high',
        message: 'Memory usage is high. Consider increasing memory allocation.',
        action: 'increase_memory',
      });
    }

    // Database recommendations
    if (current.database.connections > 80) {
      recommendations.push({
        type: 'database',
        priority: 'medium',
        message: 'Database connections are high. Consider connection pooling optimization.',
        action: 'optimize_connections',
      });
    }

    return recommendations;
  }
}
```

---

## Optimization Tools

### Performance Profiling

```typescript
// Performance profiler
export class PerformanceProfiler {
  private profiles: Map<string, ProfileData> = new Map();

  startProfile(name: string): void {
    this.profiles.set(name, {
      name,
      startTime: Date.now(),
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage(),
    });
  }

  endProfile(name: string): ProfileResult {
    const profile = this.profiles.get(name);
    if (!profile) {
      throw new Error(`Profile ${name} not found`);
    }

    const endTime = Date.now();
    const endMemoryUsage = process.memoryUsage();
    const endCpuUsage = process.cpuUsage(profile.cpuUsage);

    const result: ProfileResult = {
      name,
      duration: endTime - profile.startTime,
      memoryDelta: {
        rss: endMemoryUsage.rss - profile.memoryUsage.rss,
        heapUsed: endMemoryUsage.heapUsed - profile.memoryUsage.heapUsed,
        heapTotal: endMemoryUsage.heapTotal - profile.memoryUsage.heapTotal,
        external: endMemoryUsage.external - profile.memoryUsage.external,
      },
      cpuDelta: {
        user: endCpuUsage.user,
        system: endCpuUsage.system,
      },
    };

    this.profiles.delete(name);
    return result;
  }

  getActiveProfiles(): string[] {
    return Array.from(this.profiles.keys());
  }
}

// Profiling decorator
export function Profile(name?: string) {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    const profiler = new PerformanceProfiler();
    const profileName = name || `${target.constructor.name}.${propertyName}`;

    descriptor.value = async function (...args: any[]) {
      profiler.startProfile(profileName);
      
      try {
        const result = await method.apply(this, args);
        return result;
      } finally {
        const profileResult = profiler.endProfile(profileName);
        console.log(`Profile ${profileName}:`, profileResult);
      }
    };
  };
}
```

---

## Troubleshooting Guide

### Common Performance Issues

```typescript
// Performance troubleshooting service
export class PerformanceTroubleshootingService {
  constructor(
    private metricsService: MetricsService,
    private databaseService: DatabaseService
  ) {}

  async diagnosePerformanceIssue(): Promise<PerformanceDiagnosis> {
    const issues: PerformanceIssue[] = [];
    
    // Check response times
    const responseTime = await this.checkResponseTime();
    if (responseTime > 1000) {
      issues.push({
        type: 'response_time',
        severity: 'high',
        message: `Response time is ${responseTime}ms, which exceeds the 1000ms threshold`,
        recommendations: [
          'Check database query performance',
          'Review caching strategy',
          'Consider scaling up infrastructure',
        ],
      });
    }

    // Check error rates
    const errorRate = await this.checkErrorRate();
    if (errorRate > 1) {
      issues.push({
        type: 'error_rate',
        severity: 'critical',
        message: `Error rate is ${errorRate}%, which exceeds the 1% threshold`,
        recommendations: [
          'Check application logs for errors',
          'Review error handling',
          'Check external service dependencies',
        ],
      });
    }

    // Check database performance
    const dbPerformance = await this.checkDatabasePerformance();
    if (dbPerformance.slowQueries > 10) {
      issues.push({
        type: 'database_performance',
        severity: 'medium',
        message: `${dbPerformance.slowQueries} slow queries detected`,
        recommendations: [
          'Review and optimize slow queries',
          'Check database indexes',
          'Consider query caching',
        ],
      });
    }

    // Check memory usage
    const memoryUsage = await this.checkMemoryUsage();
    if (memoryUsage > 80) {
      issues.push({
        type: 'memory_usage',
        severity: 'high',
        message: `Memory usage is ${memoryUsage}%, which exceeds the 80% threshold`,
        recommendations: [
          'Check for memory leaks',
          'Review object lifecycle management',
          'Consider increasing memory allocation',
        ],
      });
    }

    return {
      issues,
      overallHealth: this.calculateOverallHealth(issues),
      recommendations: this.generateOverallRecommendations(issues),
    };
  }

  private async checkResponseTime(): Promise<number> {
    const metrics = await this.metricsService.getMetric('response_time', '5m');
    return metrics.p95;
  }

  private async checkErrorRate(): Promise<number> {
    const totalRequests = await this.metricsService.getMetric('total_requests', '5m');
    const errorRequests = await this.metricsService.getMetric('error_requests', '5m');
    return (errorRequests / totalRequests) * 100;
  }

  private async checkDatabasePerformance(): Promise<DatabasePerformance> {
    const slowQueries = await this.databaseService.getSlowQueries();
    const connectionCount = await this.databaseService.getConnectionCount();
    
    return {
      slowQueries: slowQueries.length,
      connectionCount,
      averageQueryTime: slowQueries.reduce((sum, q) => sum + q.duration, 0) / slowQueries.length,
    };
  }

  private async checkMemoryUsage(): Promise<number> {
    const memoryUsage = process.memoryUsage();
    const totalMemory = require('os').totalmem();
    return (memoryUsage.heapUsed / totalMemory) * 100;
  }

  private calculateOverallHealth(issues: PerformanceIssue[]): 'healthy' | 'warning' | 'critical' {
    const criticalIssues = issues.filter(i => i.severity === 'critical');
    const highIssues = issues.filter(i => i.severity === 'high');
    
    if (criticalIssues.length > 0) return 'critical';
    if (highIssues.length > 0) return 'warning';
    return 'healthy';
  }
}
```

---

## References & Resources

- [Web Performance Best Practices](https://web.dev/performance/)
- [Database Performance Tuning](https://www.postgresql.org/docs/current/performance-tips.html)
- [Redis Performance Optimization](https://redis.io/docs/manual/performance/)
- [Prometheus Monitoring](https://prometheus.io/docs/)
- [Grafana Dashboards](https://grafana.com/docs/)

---

## Version Control

- **Version:** 1.0.0
- **Last Updated:** 2024-01-01
- **Next Review:** 2024-02-01
- **Maintainer:** Performance Team
