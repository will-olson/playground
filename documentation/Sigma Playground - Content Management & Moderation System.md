# Sigma Playground - Content Management & Moderation System

## Executive Summary
This document outlines the comprehensive content management and moderation system for Sigma Playground, covering automated content filtering, user reporting, admin workflows, and community guidelines enforcement.

---

## Table of Contents
1. [Content Moderation Workflow](#content-moderation-workflow)
2. [Automated Content Filtering](#automated-content-filtering)
3. [User Reporting System](#user-reporting-system)
4. [Admin Dashboard](#admin-dashboard)
5. [Audit Logging](#audit-logging)
6. [Content Lifecycle Management](#content-lifecycle-management)
7. [Community Guidelines](#community-guidelines)
8. [Escalation Procedures](#escalation-procedures)
9. [Moderation Analytics](#moderation-analytics)
10. [AI Integration](#ai-integration)

---

## Content Moderation Workflow

### Moderation States

```typescript
// Content moderation states
export enum ModerationStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  FLAGGED = 'flagged',
  UNDER_REVIEW = 'under_review',
  QUARANTINED = 'quarantined',
}

// Content types that require moderation
export enum ContentType {
  WORKBOOK = 'workbook',
  USER_PROFILE = 'user_profile',
  COMMENT = 'comment',
  TAG = 'tag',
  FEATURED_ITEM = 'featured_item',
}

// Moderation workflow configuration
export const ModerationWorkflow = {
  autoModeration: {
    enabled: true,
    confidenceThreshold: 0.8,
    actions: {
      autoApprove: 0.9,
      autoFlag: 0.7,
      autoReject: 0.95,
    },
  },
  
  manualReview: {
    enabled: true,
    queueSize: 100,
    maxReviewTime: '24h',
    priorityLevels: ['high', 'medium', 'low'],
  },
  
  escalation: {
    enabled: true,
    escalationThreshold: 3,
    escalationTime: '2h',
    adminNotification: true,
  },
};
```

### Moderation Queue Management

```typescript
// Moderation queue service
@Injectable()
export class ModerationQueueService {
  constructor(
    private prisma: PrismaService,
    private redis: Redis,
    private notificationService: NotificationService
  ) {}

  async addToQueue(contentId: string, contentType: ContentType, priority: 'high' | 'medium' | 'low' = 'medium') {
    const queueItem = {
      contentId,
      contentType,
      priority,
      addedAt: new Date(),
      status: ModerationStatus.PENDING,
    };

    // Add to Redis queue
    await this.redis.lpush(`moderation:queue:${priority}`, JSON.stringify(queueItem));
    
    // Add to database for persistence
    await this.prisma.moderationQueue.create({
      data: {
        content_id: contentId,
        content_type: contentType,
        priority,
        status: ModerationStatus.PENDING,
      },
    });

    // Notify moderators
    await this.notificationService.notifyModerators({
      type: 'new_content',
      contentId,
      contentType,
      priority,
    });
  }

  async getNextItem(adminId: string): Promise<ModerationItem | null> {
    // Get highest priority item
    const highPriorityItem = await this.redis.rpop('moderation:queue:high');
    if (highPriorityItem) {
      return this.processQueueItem(JSON.parse(highPriorityItem), adminId);
    }

    const mediumPriorityItem = await this.redis.rpop('moderation:queue:medium');
    if (mediumPriorityItem) {
      return this.processQueueItem(JSON.parse(mediumPriorityItem), adminId);
    }

    const lowPriorityItem = await this.redis.rpop('moderation:queue:low');
    if (lowPriorityItem) {
      return this.processQueueItem(JSON.parse(lowPriorityItem), adminId);
    }

    return null;
  }

  private async processQueueItem(item: any, adminId: string): Promise<ModerationItem> {
    // Mark as under review
    await this.prisma.moderationQueue.update({
      where: { content_id: item.contentId },
      data: {
        status: ModerationStatus.UNDER_REVIEW,
        assigned_to: adminId,
        reviewed_at: new Date(),
      },
    });

    // Get content details
    const content = await this.getContentDetails(item.contentId, item.contentType);
    
    return {
      ...item,
      content,
      assignedTo: adminId,
    };
  }

  private async getContentDetails(contentId: string, contentType: ContentType) {
    switch (contentType) {
      case ContentType.WORKBOOK:
        return this.prisma.workbook.findUnique({
          where: { id: contentId },
          include: {
            author: true,
            tags: { include: { tag: true } },
          },
        });
      case ContentType.USER_PROFILE:
        return this.prisma.user.findUnique({
          where: { id: contentId },
        });
      default:
        return null;
    }
  }
}
```

---

## Automated Content Filtering

### Content Analysis Engine

```typescript
// Content analysis service
@Injectable()
export class ContentAnalysisService {
  constructor(
    private aiService: AIService,
    private imageAnalysisService: ImageAnalysisService,
    private textAnalysisService: TextAnalysisService
  ) {}

  async analyzeContent(content: ContentToAnalyze): Promise<ContentAnalysisResult> {
    const analysis = {
      textAnalysis: await this.analyzeText(content),
      imageAnalysis: await this.analyzeImages(content),
      metadataAnalysis: await this.analyzeMetadata(content),
      urlAnalysis: await this.analyzeUrls(content),
    };

    const overallScore = this.calculateOverallScore(analysis);
    const recommendations = this.generateRecommendations(analysis, overallScore);

    return {
      overallScore,
      analysis,
      recommendations,
      confidence: this.calculateConfidence(analysis),
    };
  }

  private async analyzeText(content: ContentToAnalyze): Promise<TextAnalysisResult> {
    const textContent = this.extractTextContent(content);
    
    const analysis = await Promise.all([
      this.textAnalysisService.detectSpam(textContent),
      this.textAnalysisService.detectToxicity(textContent),
      this.textAnalysisService.detectPersonalInfo(textContent),
      this.textAnalysisService.detectCopyright(textContent),
    ]);

    return {
      spamScore: analysis[0].score,
      toxicityScore: analysis[1].score,
      personalInfoScore: analysis[2].score,
      copyrightScore: analysis[3].score,
      language: analysis[0].language,
      sentiment: analysis[1].sentiment,
    };
  }

  private async analyzeImages(content: ContentToAnalyze): Promise<ImageAnalysisResult> {
    const images = this.extractImages(content);
    
    const analysis = await Promise.all(
      images.map(image => this.imageAnalysisService.analyzeImage(image))
    );

    return {
      inappropriateContent: analysis.some(a => a.inappropriate),
      violence: analysis.some(a => a.violence),
      adultContent: analysis.some(a => a.adultContent),
      textInImages: analysis.flatMap(a => a.textInImages),
    };
  }

  private calculateOverallScore(analysis: ContentAnalysis): number {
    const weights = {
      textSpam: 0.3,
      textToxicity: 0.25,
      textPersonalInfo: 0.2,
      imageInappropriate: 0.15,
      urlMalicious: 0.1,
    };

    return (
      analysis.textAnalysis.spamScore * weights.textSpam +
      analysis.textAnalysis.toxicityScore * weights.textToxicity +
      analysis.textAnalysis.personalInfoScore * weights.textPersonalInfo +
      (analysis.imageAnalysis.inappropriateContent ? 1 : 0) * weights.imageInappropriate +
      (analysis.urlAnalysis.malicious ? 1 : 0) * weights.urlMalicious
    );
  }

  private generateRecommendations(analysis: ContentAnalysis, score: number): ModerationAction[] {
    const recommendations: ModerationAction[] = [];

    if (score >= 0.9) {
      recommendations.push({
        action: 'reject',
        reason: 'High risk content detected',
        confidence: 0.9,
      });
    } else if (score >= 0.7) {
      recommendations.push({
        action: 'flag',
        reason: 'Moderate risk content detected',
        confidence: 0.7,
      });
    } else if (score >= 0.5) {
      recommendations.push({
        action: 'review',
        reason: 'Low risk content, manual review recommended',
        confidence: 0.5,
      });
    } else {
      recommendations.push({
        action: 'approve',
        reason: 'Content appears safe',
        confidence: 0.8,
      });
    }

    return recommendations;
  }
}
```

### AI-Powered Content Detection

```typescript
// AI content detection service
@Injectable()
export class AIContentDetectionService {
  constructor(
    private openaiService: OpenAIService,
    private perspectiveApiService: PerspectiveApiService
  ) {}

  async detectSpam(text: string): Promise<SpamDetectionResult> {
    const prompt = `
      Analyze the following text for spam indicators:
      - Repetitive content
      - Promotional language
      - Suspicious links
      - Bot-like behavior
      
      Text: "${text}"
      
      Return a JSON response with:
      - isSpam: boolean
      - confidence: number (0-1)
      - reasons: string[]
    `;

    const response = await this.openaiService.generateCompletion(prompt);
    return JSON.parse(response);
  }

  async detectToxicity(text: string): Promise<ToxicityDetectionResult> {
    const attributes = [
      'TOXICITY',
      'SEVERE_TOXICITY',
      'IDENTITY_ATTACK',
      'INSULT',
      'PROFANITY',
      'THREAT',
    ];

    const result = await this.perspectiveApiService.analyzeText(text, attributes);
    
    return {
      toxicityScore: result.attributeScores.TOXICITY.summaryScore.value,
      severeToxicityScore: result.attributeScores.SEVERE_TOXICITY.summaryScore.value,
      identityAttackScore: result.attributeScores.IDENTITY_ATTACK.summaryScore.value,
      insultScore: result.attributeScores.INSULT.summaryScore.value,
      profanityScore: result.attributeScores.PROFANITY.summaryScore.value,
      threatScore: result.attributeScores.THREAT.summaryScore.value,
    };
  }

  async detectPersonalInfo(text: string): Promise<PersonalInfoDetectionResult> {
    const patterns = {
      email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
      phone: /\b(?:\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}\b/g,
      ssn: /\b\d{3}-?\d{2}-?\d{4}\b/g,
      creditCard: /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g,
    };

    const detectedInfo = {
      emails: text.match(patterns.email) || [],
      phones: text.match(patterns.phone) || [],
      ssns: text.match(patterns.ssn) || [],
      creditCards: text.match(patterns.creditCard) || [],
    };

    return {
      hasPersonalInfo: Object.values(detectedInfo).some(arr => arr.length > 0),
      detectedInfo,
      riskLevel: this.calculatePersonalInfoRisk(detectedInfo),
    };
  }
}
```

---

## User Reporting System

### Report Management

```typescript
// Report management service
@Injectable()
export class ReportManagementService {
  constructor(
    private prisma: PrismaService,
    private notificationService: NotificationService,
    private moderationService: ModerationService
  ) {}

  async createReport(reportData: CreateReportData): Promise<Report> {
    const report = await this.prisma.report.create({
      data: {
        report_type: reportData.reportType,
        reason: reportData.reason,
        description: reportData.description,
        reporter_id: reportData.reporterId,
        reported_user_id: reportData.reportedUserId,
        reported_workbook_id: reportData.reportedWorkbookId,
        status: ReportStatus.PENDING,
      },
    });

    // Auto-assign priority based on report type
    const priority = this.calculateReportPriority(reportData.reportType);
    
    // Add to moderation queue
    await this.moderationService.addToQueue(
      report.id,
      ContentType.REPORT,
      priority
    );

    // Notify moderators
    await this.notificationService.notifyModerators({
      type: 'new_report',
      reportId: report.id,
      priority,
    });

    return report;
  }

  async processReport(reportId: string, adminId: string, decision: ReportDecision): Promise<void> {
    const report = await this.prisma.report.findUnique({
      where: { id: reportId },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    // Update report status
    await this.prisma.report.update({
      where: { id: reportId },
      data: {
        status: decision.status,
        admin_notes: decision.notes,
        processed_by: adminId,
        processed_at: new Date(),
      },
    });

    // Take action on reported content
    if (decision.status === ReportStatus.RESOLVED) {
      await this.takeActionOnContent(report, decision.action);
    }

    // Notify reporter
    await this.notificationService.notifyUser(report.reporter_id, {
      type: 'report_processed',
      reportId,
      decision: decision.status,
    });
  }

  private async takeActionOnContent(report: Report, action: ContentAction): Promise<void> {
    switch (action.type) {
      case 'remove_content':
        await this.removeContent(report.reported_workbook_id);
        break;
      case 'warn_user':
        await this.warnUser(report.reported_user_id, action.message);
        break;
      case 'suspend_user':
        await this.suspendUser(report.reported_user_id, action.duration);
        break;
      case 'ban_user':
        await this.banUser(report.reported_user_id);
        break;
    }
  }

  private calculateReportPriority(reportType: ReportType): 'high' | 'medium' | 'low' {
    const priorityMap = {
      [ReportType.HARASSMENT]: 'high',
      [ReportType.INAPPROPRIATE_CONTENT]: 'high',
      [ReportType.COPYRIGHT_VIOLATION]: 'high',
      [ReportType.SPAM]: 'medium',
      [ReportType.FAKE_ACCOUNT]: 'medium',
      [ReportType.OTHER]: 'low',
    };

    return priorityMap[reportType] || 'medium';
  }
}
```

### Report UI Components

```typescript
// Report form component
export const ReportForm = ({ 
  contentType, 
  contentId, 
  onSubmit 
}: ReportFormProps) => {
  const [reportType, setReportType] = useState<ReportType | null>(null);
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!reportType || !reason) {
      return;
    }

    await onSubmit({
      reportType,
      reason,
      description,
      contentType,
      contentId,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">
          What's the issue?
        </label>
        <select
          value={reportType || ''}
          onChange={(e) => setReportType(e.target.value as ReportType)}
          className="w-full p-2 border rounded-md"
          required
        >
          <option value="">Select an issue</option>
          <option value={ReportType.SPAM}>Spam</option>
          <option value={ReportType.INAPPROPRIATE_CONTENT}>Inappropriate Content</option>
          <option value={ReportType.HARASSMENT}>Harassment</option>
          <option value={ReportType.COPYRIGHT_VIOLATION}>Copyright Violation</option>
          <option value={ReportType.FAKE_ACCOUNT}>Fake Account</option>
          <option value={ReportType.OTHER}>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Reason
        </label>
        <input
          type="text"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Brief description of the issue"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Additional Details (Optional)
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-md"
          rows={3}
          placeholder="Provide any additional context..."
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit" disabled={!reportType || !reason}>
          Submit Report
        </Button>
      </div>
    </form>
  );
};
```

---

## Admin Dashboard

### Admin Dashboard Components

```typescript
// Admin dashboard main component
export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [moderationQueue, setModerationQueue] = useState<ModerationItem[]>([]);
  const [reports, setReports] = useState<Report[]>([]);
  const [analytics, setAnalytics] = useState<AdminAnalytics | null>(null);

  useEffect(() => {
    // Load dashboard data
    loadModerationQueue();
    loadReports();
    loadAnalytics();
  }, []);

  const loadModerationQueue = async () => {
    const queue = await adminApi.getModerationQueue();
    setModerationQueue(queue);
  };

  const loadReports = async () => {
    const reports = await adminApi.getReports();
    setReports(reports);
  };

  const loadAnalytics = async () => {
    const analytics = await adminApi.getAnalytics();
    setAnalytics(analytics);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      
      <div className="flex">
        <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="flex-1 p-6">
          {activeTab === 'overview' && (
            <DashboardOverview analytics={analytics} />
          )}
          {activeTab === 'moderation' && (
            <ModerationPanel 
              queue={moderationQueue}
              onRefresh={loadModerationQueue}
            />
          )}
          {activeTab === 'reports' && (
            <ReportsPanel 
              reports={reports}
              onRefresh={loadReports}
            />
          )}
          {activeTab === 'users' && (
            <UserManagementPanel />
          )}
          {activeTab === 'content' && (
            <ContentManagementPanel />
          )}
        </main>
      </div>
    </div>
  );
};

// Moderation panel component
export const ModerationPanel = ({ 
  queue, 
  onRefresh 
}: ModerationPanelProps) => {
  const [selectedItem, setSelectedItem] = useState<ModerationItem | null>(null);

  const handleApprove = async (item: ModerationItem) => {
    await adminApi.approveContent(item.contentId, item.contentType);
    onRefresh();
  };

  const handleReject = async (item: ModerationItem, reason: string) => {
    await adminApi.rejectContent(item.contentId, item.contentType, reason);
    onRefresh();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Content Moderation</h2>
        <Button onClick={onRefresh}>
          <RefreshIcon className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Moderation Queue</h3>
          <div className="space-y-2">
            {queue.map((item) => (
              <ModerationQueueItem
                key={item.contentId}
                item={item}
                onSelect={setSelectedItem}
                onApprove={() => handleApprove(item)}
                onReject={(reason) => handleReject(item, reason)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Content Preview</h3>
          {selectedItem ? (
            <ContentPreview item={selectedItem} />
          ) : (
            <div className="text-gray-500 text-center py-8">
              Select an item to preview
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
```

### Analytics Dashboard

```typescript
// Admin analytics component
export const AdminAnalytics = ({ analytics }: { analytics: AdminAnalytics }) => {
  if (!analytics) return <div>Loading analytics...</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Platform Analytics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Users"
          value={analytics.totalUsers}
          change={analytics.userGrowth}
          icon={<UsersIcon className="h-6 w-6" />}
        />
        <MetricCard
          title="Total Workbooks"
          value={analytics.totalWorkbooks}
          change={analytics.workbookGrowth}
          icon={<DocumentIcon className="h-6 w-6" />}
        />
        <MetricCard
          title="Pending Moderation"
          value={analytics.pendingModeration}
          change={analytics.moderationTrend}
          icon={<ExclamationIcon className="h-6 w-6" />}
        />
        <MetricCard
          title="Active Reports"
          value={analytics.activeReports}
          change={analytics.reportTrend}
          icon={<FlagIcon className="h-6 w-6" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Content Moderation Trends</h3>
          <ModerationTrendChart data={analytics.moderationTrends} />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">User Activity</h3>
          <UserActivityChart data={analytics.userActivity} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <ActivityFeed activities={analytics.recentActivity} />
      </div>
    </div>
  );
};
```

---

## Audit Logging

### Audit Log System

```typescript
// Audit logging service
@Injectable()
export class AuditLogService {
  constructor(private prisma: PrismaService) {}

  async logAction(action: AuditAction): Promise<void> {
    await this.prisma.auditLog.create({
      data: {
        user_id: action.userId,
        action_type: action.type,
        resource_type: action.resourceType,
        resource_id: action.resourceId,
        details: action.details,
        ip_address: action.ipAddress,
        user_agent: action.userAgent,
        timestamp: new Date(),
      },
    });
  }

  async getAuditLogs(filters: AuditLogFilters): Promise<AuditLog[]> {
    return this.prisma.auditLog.findMany({
      where: {
        ...(filters.userId && { user_id: filters.userId }),
        ...(filters.actionType && { action_type: filters.actionType }),
        ...(filters.resourceType && { resource_type: filters.resourceType }),
        ...(filters.dateFrom && { timestamp: { gte: filters.dateFrom } }),
        ...(filters.dateTo && { timestamp: { lte: filters.dateTo } }),
      },
      orderBy: { timestamp: 'desc' },
      take: filters.limit || 100,
      skip: filters.offset || 0,
    });
  }

  async getAuditTrail(resourceType: string, resourceId: string): Promise<AuditLog[]> {
    return this.prisma.auditLog.findMany({
      where: {
        resource_type: resourceType,
        resource_id: resourceId,
      },
      orderBy: { timestamp: 'asc' },
    });
  }
}

// Audit action types
export enum AuditActionType {
  USER_LOGIN = 'user_login',
  USER_LOGOUT = 'user_logout',
  USER_REGISTER = 'user_register',
  WORKBOOK_CREATE = 'workbook_create',
  WORKBOOK_UPDATE = 'workbook_update',
  WORKBOOK_DELETE = 'workbook_delete',
  WORKBOOK_VIEW = 'workbook_view',
  CONTENT_APPROVE = 'content_approve',
  CONTENT_REJECT = 'content_reject',
  CONTENT_FLAG = 'content_flag',
  USER_SUSPEND = 'user_suspend',
  USER_BAN = 'user_ban',
  REPORT_CREATE = 'report_create',
  REPORT_RESOLVE = 'report_resolve',
}

// Audit logging decorator
export function AuditLog(actionType: AuditActionType, resourceType: string) {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const result = await method.apply(this, args);
      
      // Log the action
      const auditService = this.auditLogService;
      await auditService.logAction({
        userId: this.getCurrentUserId(),
        type: actionType,
        resourceType,
        resourceId: this.getResourceId(result),
        details: this.getActionDetails(args, result),
        ipAddress: this.getClientIP(),
        userAgent: this.getUserAgent(),
      });

      return result;
    };
  };
}
```

---

## Content Lifecycle Management

### Content Lifecycle States

```typescript
// Content lifecycle management
export class ContentLifecycleService {
  constructor(
    private prisma: PrismaService,
    private notificationService: NotificationService,
    private auditLogService: AuditLogService
  ) {}

  async archiveContent(contentId: string, contentType: ContentType, reason: string): Promise<void> {
    // Archive the content
    await this.prisma.contentArchive.create({
      data: {
        content_id: contentId,
        content_type: contentType,
        archived_at: new Date(),
        reason,
      },
    });

    // Update content status
    await this.updateContentStatus(contentId, contentType, 'archived');

    // Log the action
    await this.auditLogService.logAction({
      userId: 'system',
      type: AuditActionType.CONTENT_ARCHIVE,
      resourceType: contentType,
      resourceId: contentId,
      details: { reason },
      ipAddress: 'system',
      userAgent: 'system',
    });
  }

  async restoreContent(contentId: string, contentType: ContentType): Promise<void> {
    // Remove from archive
    await this.prisma.contentArchive.deleteMany({
      where: {
        content_id: contentId,
        content_type: contentType,
      },
    });

    // Update content status
    await this.updateContentStatus(contentId, contentType, 'active');

    // Log the action
    await this.auditLogService.logAction({
      userId: 'system',
      type: AuditActionType.CONTENT_RESTORE,
      resourceType: contentType,
      resourceId: contentId,
      details: {},
      ipAddress: 'system',
      userAgent: 'system',
    });
  }

  async deleteContent(contentId: string, contentType: ContentType, reason: string): Promise<void> {
    // Soft delete the content
    await this.updateContentStatus(contentId, contentType, 'deleted');

    // Log the action
    await this.auditLogService.logAction({
      userId: 'system',
      type: AuditActionType.CONTENT_DELETE,
      resourceType: contentType,
      resourceId: contentId,
      details: { reason },
      ipAddress: 'system',
      userAgent: 'system',
    });
  }

  private async updateContentStatus(contentId: string, contentType: ContentType, status: string): Promise<void> {
    switch (contentType) {
      case ContentType.WORKBOOK:
        await this.prisma.workbook.update({
          where: { id: contentId },
          data: { status },
        });
        break;
      case ContentType.USER_PROFILE:
        await this.prisma.user.update({
          where: { id: contentId },
          data: { status },
        });
        break;
    }
  }
}
```

---

## Community Guidelines

### Guidelines Enforcement

```typescript
// Community guidelines service
export class CommunityGuidelinesService {
  private guidelines = {
    content: [
      'No spam or promotional content',
      'No inappropriate or offensive content',
      'No personal information sharing',
      'No copyright violations',
      'No harassment or bullying',
    ],
    behavior: [
      'Be respectful to other users',
      'No trolling or disruptive behavior',
      'No fake accounts or impersonation',
      'No excessive reporting',
    ],
    technical: [
      'No malicious code or scripts',
      'No attempts to hack or exploit',
      'No unauthorized access attempts',
    ],
  };

  async checkGuidelinesViolation(content: string, contentType: ContentType): Promise<GuidelinesViolation[]> {
    const violations: GuidelinesViolation[] = [];

    // Check content guidelines
    for (const guideline of this.guidelines.content) {
      const violation = await this.checkContentGuideline(content, guideline);
      if (violation) {
        violations.push(violation);
      }
    }

    return violations;
  }

  private async checkContentGuideline(content: string, guideline: string): Promise<GuidelinesViolation | null> {
    // Implement guideline checking logic
    // This would use AI services to check for violations
    return null;
  }

  async getGuidelinesForUser(userId: string): Promise<CommunityGuidelines> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    return {
      guidelines: this.guidelines,
      userLevel: user?.is_admin ? 'admin' : 'user',
      lastUpdated: new Date(),
    };
  }
}
```

---

## Escalation Procedures

### Escalation Management

```typescript
// Escalation service
export class EscalationService {
  constructor(
    private prisma: PrismaService,
    private notificationService: NotificationService,
    private auditLogService: AuditLogService
  ) {}

  async escalateReport(reportId: string, reason: string): Promise<void> {
    const report = await this.prisma.report.findUnique({
      where: { id: reportId },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    // Create escalation
    await this.prisma.escalation.create({
      data: {
        report_id: reportId,
        reason,
        escalated_at: new Date(),
        status: 'pending',
      },
    });

    // Notify senior moderators
    await this.notificationService.notifySeniorModerators({
      type: 'report_escalated',
      reportId,
      reason,
    });

    // Log the escalation
    await this.auditLogService.logAction({
      userId: 'system',
      type: AuditActionType.REPORT_ESCALATE,
      resourceType: 'report',
      resourceId: reportId,
      details: { reason },
      ipAddress: 'system',
      userAgent: 'system',
    });
  }

  async handleEscalation(escalationId: string, decision: EscalationDecision): Promise<void> {
    const escalation = await this.prisma.escalation.findUnique({
      where: { id: escalationId },
      include: { report: true },
    });

    if (!escalation) {
      throw new NotFoundException('Escalation not found');
    }

    // Update escalation status
    await this.prisma.escalation.update({
      where: { id: escalationId },
      data: {
        status: 'resolved',
        decision: decision.action,
        resolved_at: new Date(),
        resolved_by: decision.resolvedBy,
      },
    });

    // Take action based on decision
    await this.executeEscalationDecision(escalation.report, decision);

    // Notify original reporter
    await this.notificationService.notifyUser(escalation.report.reporter_id, {
      type: 'escalation_resolved',
      reportId: escalation.report_id,
      decision: decision.action,
    });
  }

  private async executeEscalationDecision(report: Report, decision: EscalationDecision): Promise<void> {
    switch (decision.action) {
      case 'approve_content':
        // Content is approved, no action needed
        break;
      case 'remove_content':
        await this.removeContent(report.reported_workbook_id);
        break;
      case 'warn_user':
        await this.warnUser(report.reported_user_id, decision.message);
        break;
      case 'suspend_user':
        await this.suspendUser(report.reported_user_id, decision.duration);
        break;
      case 'ban_user':
        await this.banUser(report.reported_user_id);
        break;
    }
  }
}
```

---

## Moderation Analytics

### Analytics Dashboard

```typescript
// Moderation analytics service
export class ModerationAnalyticsService {
  constructor(private prisma: PrismaService) {}

  async getModerationMetrics(dateRange: DateRange): Promise<ModerationMetrics> {
    const [totalReports, resolvedReports, pendingReports, escalatedReports] = await Promise.all([
      this.prisma.report.count({
        where: {
          created_at: {
            gte: dateRange.start,
            lte: dateRange.end,
          },
        },
      }),
      this.prisma.report.count({
        where: {
          status: ReportStatus.RESOLVED,
          created_at: {
            gte: dateRange.start,
            lte: dateRange.end,
          },
        },
      }),
      this.prisma.report.count({
        where: {
          status: ReportStatus.PENDING,
        },
      }),
      this.prisma.escalation.count({
        where: {
          created_at: {
            gte: dateRange.start,
            lte: dateRange.end,
          },
        },
      }),
    ]);

    return {
      totalReports,
      resolvedReports,
      pendingReports,
      escalatedReports,
      resolutionRate: totalReports > 0 ? (resolvedReports / totalReports) * 100 : 0,
      averageResolutionTime: await this.getAverageResolutionTime(dateRange),
    };
  }

  async getContentModerationTrends(dateRange: DateRange): Promise<ModerationTrend[]> {
    const trends = await this.prisma.report.groupBy({
      by: ['created_at'],
      where: {
        created_at: {
          gte: dateRange.start,
          lte: dateRange.end,
        },
      },
      _count: {
        id: true,
      },
      orderBy: {
        created_at: 'asc',
      },
    });

    return trends.map(trend => ({
      date: trend.created_at,
      count: trend._count.id,
    }));
  }

  async getModeratorPerformance(moderatorId: string, dateRange: DateRange): Promise<ModeratorPerformance> {
    const [totalProcessed, averageTime, accuracy] = await Promise.all([
      this.prisma.report.count({
        where: {
          processed_by: moderatorId,
          processed_at: {
            gte: dateRange.start,
            lte: dateRange.end,
          },
        },
      }),
      this.getAverageProcessingTime(moderatorId, dateRange),
      this.getModeratorAccuracy(moderatorId, dateRange),
    ]);

    return {
      moderatorId,
      totalProcessed,
      averageTime,
      accuracy,
    };
  }

  private async getAverageResolutionTime(dateRange: DateRange): Promise<number> {
    const reports = await this.prisma.report.findMany({
      where: {
        status: ReportStatus.RESOLVED,
        processed_at: {
          gte: dateRange.start,
          lte: dateRange.end,
        },
      },
      select: {
        created_at: true,
        processed_at: true,
      },
    });

    if (reports.length === 0) return 0;

    const totalTime = reports.reduce((sum, report) => {
      const resolutionTime = report.processed_at.getTime() - report.created_at.getTime();
      return sum + resolutionTime;
    }, 0);

    return totalTime / reports.length / (1000 * 60 * 60); // Convert to hours
  }
}
```

---

## AI Integration

### AI-Powered Moderation

```typescript
// AI moderation service
export class AIModerationService {
  constructor(
    private openaiService: OpenAIService,
    private contentAnalysisService: ContentAnalysisService
  ) {}

  async moderateContent(content: ContentToModerate): Promise<AIModerationResult> {
    const analysis = await this.contentAnalysisService.analyzeContent(content);
    
    const aiDecision = await this.getAIDecision(analysis);
    const confidence = this.calculateConfidence(analysis);
    
    return {
      decision: aiDecision,
      confidence,
      reasoning: this.generateReasoning(analysis),
      recommendations: this.generateRecommendations(analysis),
    };
  }

  private async getAIDecision(analysis: ContentAnalysis): Promise<ModerationDecision> {
    const prompt = `
      Based on the following content analysis, make a moderation decision:
      
      Analysis:
      - Spam Score: ${analysis.textAnalysis.spamScore}
      - Toxicity Score: ${analysis.textAnalysis.toxicityScore}
      - Personal Info Score: ${analysis.textAnalysis.personalInfoScore}
      - Inappropriate Images: ${analysis.imageAnalysis.inappropriateContent}
      - Malicious URLs: ${analysis.urlAnalysis.malicious}
      
      Return one of: APPROVE, FLAG, REJECT
    `;

    const response = await this.openaiService.generateCompletion(prompt);
    return response.trim() as ModerationDecision;
  }

  private generateReasoning(analysis: ContentAnalysis): string {
    const reasons = [];
    
    if (analysis.textAnalysis.spamScore > 0.7) {
      reasons.push('High spam probability detected');
    }
    
    if (analysis.textAnalysis.toxicityScore > 0.7) {
      reasons.push('Toxic content detected');
    }
    
    if (analysis.textAnalysis.personalInfoScore > 0.5) {
      reasons.push('Personal information detected');
    }
    
    if (analysis.imageAnalysis.inappropriateContent) {
      reasons.push('Inappropriate images detected');
    }
    
    if (analysis.urlAnalysis.malicious) {
      reasons.push('Malicious URLs detected');
    }
    
    return reasons.join('; ');
  }
}
```

---

## References & Resources

- [Content Moderation Best Practices](https://www.contentmoderation.com/)
- [AI Content Moderation](https://openai.com/blog/moderation/)
- [Community Guidelines Examples](https://help.instagram.com/477434105621119)
- [Audit Logging Standards](https://www.nist.gov/cyberframework)

---

## Version Control

- **Version:** 1.0.0
- **Last Updated:** 2024-01-01
- **Next Review:** 2024-02-01
- **Maintainer:** Moderation Team
