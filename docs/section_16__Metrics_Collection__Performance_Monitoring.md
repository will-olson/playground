# Section 16: 🔧 Metrics Collection & Performance Monitoring

**Lines:** 3622-3881 (259 lines)

**Code Blocks:** 4

**Key Patterns:** 5

**Implementation Steps:** 0

---

## **16. 🔧 Metrics Collection & Performance Monitoring**

### **Implementation Steps**:

**Step 1: Install Hot-Shots**
```bash
cd backend
npm install hot-shots
npm install @types/hot-shots --save-dev
```

**Step 2: Create Metrics Service**
```typescript
// backend/src/monitoring/metrics.service.ts
import StatsD from 'hot-shots';

export class MetricsService {
  private client: StatsD;

  constructor() {
    this.client = new StatsD({
      host: process.env.STATSD_HOST || 'localhost',
      port: parseInt(process.env.STATSD_PORT || '8125'),
      prefix: 'sigma_playground.',
      errorHandler: (error) => {
        console.error('StatsD error:', error);
      },
    });
  }

  // Workbook metrics
  trackWorkbookView(workbookId: string, userId: string, loadTime: number) {
    this.client.increment('workbook.views', 1, {
      workbook_id: workbookId,
      user_id: userId,
    });
    
    this.client.timing('workbook.load_time', loadTime, {
      workbook_id: workbookId,
    });
  }

  trackWorkbookEmbed(workbookId: string, userId: string, success: boolean) {
    this.client.increment('workbook.embeds', 1, {
      workbook_id: workbookId,
      user_id: userId,
      success: success.toString(),
    });
  }

  trackWorkbookError(workbookId: string, errorType: string, errorMessage: string) {
    this.client.increment('workbook.errors', 1, {
      workbook_id: workbookId,
      error_type: errorType,
    });
    
    this.client.gauge('workbook.error_rate', 1, {
      workbook_id: workbookId,
    });
  }

  // User metrics
  trackUserLogin(userId: string, method: 'email' | 'oauth') {
    this.client.increment('user.logins', 1, {
      user_id: userId,
      method,
    });
  }

  trackUserRegistration(userId: string, source: string) {
    this.client.increment('user.registrations', 1, {
      user_id: userId,
      source,
    });
  }

  // System metrics
  trackAPICall(endpoint: string, method: string, statusCode: number, responseTime: number) {
    this.client.increment('api.calls', 1, {
      endpoint,
      method,
      status_code: statusCode.toString(),
    });
    
    this.client.timing('api.response_time', responseTime, {
      endpoint,
      method,
    });
  }

  trackDatabaseQuery(query: string, executionTime: number, success: boolean) {
    this.client.timing('database.query_time', executionTime, {
      query: query.substring(0, 50), // Truncate for tag limits
    });
    
    this.client.increment('database.queries', 1, {
      success: success.toString(),
    });
  }

  // Custom metrics
  trackCustomMetric(metricName: string, value: number, tags: Record<string, string> = {}) {
    this.client.gauge(metricName, value, tags);
  }

  trackCustomCounter(metricName: string, value: number = 1, tags: Record<string, string> = {}) {
    this.client.increment(metricName, value, tags);
  }

  // Health checks
  trackHealthCheck(service: string, status: 'healthy' | 'unhealthy', responseTime: number) {
    this.client.gauge('health.status', status === 'healthy' ? 1 : 0, {
      service,
    });
    
    this.client.timing('health.response_time', responseTime, {
      service,
    });
  }
}

// Singleton instance
export const metricsService = new MetricsService();
```

**Step 3: Create Performance Monitoring Middleware**
```typescript
// backend/src/middleware/metrics.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { metricsService } from '../monitoring/metrics.service';

export function metricsMiddleware(req: Request, res: Response, next: NextFunction) {
  const startTime = Date.now();
  
  // Track request start
  metricsService.trackAPICall(
    req.path,
    req.method,
    0, // Will be updated when response is sent
    0
  );

  // Override res.end to capture response metrics
  const originalEnd = res.end;
  res.end = function(chunk?: any, encoding?: any) {
    const responseTime = Date.now() - startTime;
    
    // Track response metrics
    metricsService.trackAPICall(
      req.path,
      req.method,
      res.statusCode,
      responseTime
    );
    
    // Call original end method
    originalEnd.call(this, chunk, encoding);
  };

  next();
}
```

**Step 4: Create Real-time Metrics Dashboard**
```typescript
// frontend/src/components/metrics-dashboard.tsx
import { useState, useEffect } from 'react';

interface MetricsData {
  workbookViews: number;
  workbookEmbeds: number;
  errorRate: number;
  avgLoadTime: number;
  activeUsers: number;
  topWorkbooks: Array<{ id: string; views: number }>;
}

export function MetricsDashboard() {
  const [metrics, setMetrics] = useState<MetricsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('/api/metrics/dashboard');
        const data = await response.json();
        setMetrics(data);
      } catch (error) {
        console.error('Failed to fetch metrics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
    
    // Refresh metrics every 30 seconds
    const interval = setInterval(fetchMetrics, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="metrics-loading">Loading metrics...</div>;
  }

  if (!metrics) {
    return <div className="metrics-error">Failed to load metrics</div>;
  }

  return (
    <div className="metrics-dashboard">
      <h2>Real-time Metrics</h2>
      
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Workbook Views</h3>
          <div className="metric-value">{metrics.workbookViews.toLocaleString()}</div>
        </div>
        
        <div className="metric-card">
          <h3>Workbook Embeds</h3>
          <div className="metric-value">{metrics.workbookEmbeds.toLocaleString()}</div>
        </div>
        
        <div className="metric-card">
          <h3>Error Rate</h3>
          <div className="metric-value">{metrics.errorRate.toFixed(2)}%</div>
        </div>
        
        <div className="metric-card">
          <h3>Avg Load Time</h3>
          <div className="metric-value">{metrics.avgLoadTime.toFixed(0)}ms</div>
        </div>
        
        <div className="metric-card">
          <h3>Active Users</h3>
          <div className="metric-value">{metrics.activeUsers}</div>
        </div>
      </div>

      <div className="top-workbooks">
        <h3>Top Workbooks</h3>
        <div className="workbook-list">
          {metrics.topWorkbooks.map(workbook => (
            <div key={workbook.id} className="workbook-item">
              <span className="workbook-id">{workbook.id}</span>
              <span className="workbook-views">{workbook.views} views</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

**Impact**: Provides comprehensive monitoring, performance tracking, and real-time insights for platform optimization and user experience improvement.

---
