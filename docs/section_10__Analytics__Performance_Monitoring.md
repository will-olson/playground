# Section 10: 📊 Analytics & Performance Monitoring

**Lines:** 2393-2663 (270 lines)

**Code Blocks:** 1

**Key Patterns:** 5

**Implementation Steps:** 5

---

## **10. 📊 Analytics & Performance Monitoring**

### **PRD Alignment**: Phase 2 - "Community Engagement" + Phase 3 - "Polish & Expansion"

### **Current State**: No analytics or performance monitoring

### **Expedited Opportunity**: Implement comprehensive analytics and monitoring

**Key Resources**:
- `@external/quickstarts-public/embedding_qs_series_2_api_use_cases/helpers/` - Analytics utilities
- `@external/quickstarts-public/recipe-portal/` - Analytics patterns
- `@sigmaEmbed/testEmbedURL.md` - Testing and monitoring tools

**Detailed Implementation**:
```typescript
// Analytics and monitoring system
interface AnalyticsEvent {
  id: string;
  type: 'workbook_view' | 'workbook_embed' | 'user_action' | 'error' | 'performance';
  userId: string;
  workbookId?: string;
  timestamp: number;
  metadata: Record<string, any>;
}

interface PerformanceMetrics {
  embedLoadTime: number;
  workbookRenderTime: number;
  apiResponseTime: number;
  errorRate: number;
  userEngagement: number;
}

class AnalyticsManager {
  private events: AnalyticsEvent[] = [];
  private performanceMetrics: Map<string, PerformanceMetrics> = new Map();

  trackEvent(event: Omit<AnalyticsEvent, 'id' | 'timestamp'>) {
    const analyticsEvent: AnalyticsEvent = {
      ...event,
      id: crypto.randomUUID(),
      timestamp: Date.now()
    };

    this.events.push(analyticsEvent);
    this.sendToAnalytics(analyticsEvent);
  }

  trackWorkbookView(workbookId: string, userId: string, metadata?: Record<string, any>) {
    this.trackEvent({
      type: 'workbook_view',
      userId,
      workbookId,
      metadata: {
        ...metadata,
        userAgent: navigator.userAgent,
        referrer: document.referrer
      }
    });
  }

  trackEmbedLoad(workbookId: string, userId: string, loadTime: number) {
    this.trackEvent({
      type: 'workbook_embed',
      userId,
      workbookId,
      metadata: {
        loadTime,
        success: loadTime < 5000 // Consider under 5s as successful
      }
    });
  }

  trackUserAction(action: string, workbookId: string, userId: string, metadata?: Record<string, any>) {
    this.trackEvent({
      type: 'user_action',
      userId,
      workbookId,
      metadata: {
        action,
        ...metadata
      }
    });
  }

  trackError(error: Error, workbookId: string, userId: string) {
    this.trackEvent({
      type: 'error',
      userId,
      workbookId,
      metadata: {
        errorMessage: error.message,
        errorStack: error.stack,
        errorName: error.name
      }
    });
  }

  updatePerformanceMetrics(workbookId: string, metrics: Partial<PerformanceMetrics>) {
    const current = this.performanceMetrics.get(workbookId) || {
      embedLoadTime: 0,
      workbookRenderTime: 0,
      apiResponseTime: 0,
      errorRate: 0,
      userEngagement: 0
    };

    this.performanceMetrics.set(workbookId, { ...current, ...metrics });
  }

  getAnalyticsDashboard(): AnalyticsDashboard {
    const totalViews = this.events.filter(e => e.type === 'workbook_view').length;
    const totalEmbeds = this.events.filter(e => e.type === 'workbook_embed').length;
    const errorCount = this.events.filter(e => e.type === 'error').length;
    const errorRate = totalEmbeds > 0 ? (errorCount / totalEmbeds) * 100 : 0;

    const topWorkbooks = this.getTopWorkbooks();
    const userEngagement = this.calculateUserEngagement();
    const performanceData = this.getPerformanceData();

    return {
      totalViews,
      totalEmbeds,
      errorRate,
      topWorkbooks,
      userEngagement,
      performanceData
    };
  }

  private getTopWorkbooks() {
    const workbookViews = this.events
      .filter(e => e.type === 'workbook_view')
      .reduce((acc, event) => {
        acc[event.workbookId] = (acc[event.workbookId] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    return Object.entries(workbookViews)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([workbookId, views]) => ({ workbookId, views }));
  }

  private calculateUserEngagement() {
    const userActions = this.events.filter(e => e.type === 'user_action');
    const uniqueUsers = new Set(userActions.map(e => e.userId));
    const avgActionsPerUser = userActions.length / uniqueUsers.size;
    
    return {
      totalUsers: uniqueUsers.size,
      totalActions: userActions.length,
      avgActionsPerUser: Math.round(avgActionsPerUser * 100) / 100
    };
  }

  private getPerformanceData() {
    const metrics = Array.from(this.performanceMetrics.values());
    if (metrics.length === 0) return null;

    return {
      avgEmbedLoadTime: metrics.reduce((sum, m) => sum + m.embedLoadTime, 0) / metrics.length,
      avgWorkbookRenderTime: metrics.reduce((sum, m) => sum + m.workbookRenderTime, 0) / metrics.length,
      avgApiResponseTime: metrics.reduce((sum, m) => sum + m.apiResponseTime, 0) / metrics.length,
      avgErrorRate: metrics.reduce((sum, m) => sum + m.errorRate, 0) / metrics.length
    };
  }

  private async sendToAnalytics(event: AnalyticsEvent) {
    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      });
    } catch (error) {
      console.error('Failed to send analytics event:', error);
    }
  }
}

// Analytics dashboard component
function AnalyticsDashboard({ analytics }) {
  return (
    <div className="analytics-dashboard">
      <h2>Analytics Dashboard</h2>
      
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total Views</h3>
          <div className="metric-value">{analytics.totalViews.toLocaleString()}</div>
        </div>
        
        <div className="metric-card">
          <h3>Total Embeds</h3>
          <div className="metric-value">{analytics.totalEmbeds.toLocaleString()}</div>
        </div>
        
        <div className="metric-card">
          <h3>Error Rate</h3>
          <div className="metric-value">{analytics.errorRate.toFixed(2)}%</div>
        </div>
        
        <div className="metric-card">
          <h3>Active Users</h3>
          <div className="metric-value">{analytics.userEngagement.totalUsers}</div>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <h3>Top Workbooks</h3>
          <TopWorkbooksChart data={analytics.topWorkbooks} />
        </div>
        
        <div className="chart-container">
          <h3>Performance Metrics</h3>
          <PerformanceChart data={analytics.performanceData} />
        </div>
      </div>
    </div>
  );
}

// Performance monitoring hook
function usePerformanceMonitoring(workbookId: string) {
  const analytics = useRef(new AnalyticsManager());

  useEffect(() => {
    const startTime = performance.now();
    
    const handleLoad = () => {
      const loadTime = performance.now() - startTime;
      analytics.current.trackEmbedLoad(workbookId, getCurrentUserId(), loadTime);
      analytics.current.updatePerformanceMetrics(workbookId, {
        embedLoadTime: loadTime
      });
    };

    const handleError = (error: Error) => {
      analytics.current.trackError(error, workbookId, getCurrentUserId());
    };

    window.addEventListener('load', handleLoad);
    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('error', handleError);
    };
  }, [workbookId]);

  return analytics.current;
}
```

**Advanced Features Available**:
- **Event Tracking**: Comprehensive event tracking for user interactions
- **Performance Monitoring**: Real-time performance metrics and monitoring
- **Error Analytics**: Detailed error tracking and analysis
- **User Engagement**: Track user engagement and behavior patterns
- **Workbook Analytics**: Individual workbook performance and usage metrics
- **Real-time Dashboard**: Live analytics dashboard with charts and metrics
- **Custom Events**: Track custom business events and KPIs

**Impact**: Provides data-driven insights for platform optimization and user experience improvement

---

---
