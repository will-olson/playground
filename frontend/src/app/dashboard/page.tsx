'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  BarChart3, 
  Users, 
  Heart, 
  Share2, 
  Eye, 
  TrendingUp, 
  Activity,
  BookOpen,
  Star,
  MessageSquare,
  Zap,
  Bug
} from 'lucide-react';

interface WorkbookStats {
  id: string;
  name: string;
  views: number;
  favorites: number;
  shares: number;
  lastViewed: string;
  status: 'active' | 'draft' | 'archived';
}

interface AnalyticsData {
  totalViews: number;
  totalFavorites: number;
  totalShares: number;
  totalFollowers: number;
  totalFollowing: number;
  recentActivity: Array<{
    id: string;
    type: 'view' | 'favorite' | 'share' | 'comment';
    workbookName: string;
    timestamp: string;
    user?: string;
  }>;
}

interface DebugResult {
  workbookId: string;
  workbookName: string;
  status: 'success' | 'error' | 'warning';
  message: string;
  embedUrl?: string;
  jwtValid?: boolean;
}

export default function DashboardPage() {
  const [userEmail, setUserEmail] = useState('test@example.com');
  const [showDebugMode, setShowDebugMode] = useState(false);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [workbookStats, setWorkbookStats] = useState<WorkbookStats[]>([]);
  const [debugResults, setDebugResults] = useState<DebugResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'analytics' | 'workbooks' | 'collaboration'>('analytics');

  // Memoized analytics calculations
  const analyticsSummary = useMemo(() => {
    if (!analytics) return null;
    
    const totalEngagement = analytics.totalViews + analytics.totalFavorites + analytics.totalShares;
    const engagementRate = totalEngagement > 0 ? (analytics.totalFavorites / totalEngagement) * 100 : 0;
    
    return {
      totalEngagement,
      engagementRate,
      avgViewsPerWorkbook: workbookStats.length > 0 ? analytics.totalViews / workbookStats.length : 0,
      topPerformingWorkbook: workbookStats.reduce((top, current) => 
        current.views > top.views ? current : top, workbookStats[0] || { views: 0 })
    };
  }, [analytics, workbookStats]);

  // Load user analytics
  const loadAnalytics = useCallback(async () => {
    try {
      setIsLoading(true);
      
      // Simulate API call - replace with actual endpoint
      const response = await fetch('/api/v1/analytics/dashboard', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setAnalytics(data.analytics);
        setWorkbookStats(data.workbooks);
      } else {
        // Fallback mock data for development
        setAnalytics({
          totalViews: 1250,
          totalFavorites: 89,
          totalShares: 156,
          totalFollowers: 45,
          totalFollowing: 23,
          recentActivity: [
            { id: '1', type: 'view', workbookName: 'Sales Dashboard', timestamp: '2024-01-15T10:30:00Z', user: 'john.doe@example.com' },
            { id: '2', type: 'favorite', workbookName: 'Marketing Analytics', timestamp: '2024-01-15T09:15:00Z', user: 'jane.smith@example.com' },
            { id: '3', type: 'share', workbookName: 'Financial Report', timestamp: '2024-01-15T08:45:00Z', user: 'bob.wilson@example.com' }
          ]
        });
        
        setWorkbookStats([
          { id: '1', name: 'Sales Dashboard', views: 450, favorites: 32, shares: 18, lastViewed: '2024-01-15T10:30:00Z', status: 'active' },
          { id: '2', name: 'Marketing Analytics', views: 320, favorites: 28, shares: 12, lastViewed: '2024-01-15T09:15:00Z', status: 'active' },
          { id: '3', name: 'Financial Report', views: 280, favorites: 19, shares: 8, lastViewed: '2024-01-15T08:45:00Z', status: 'active' },
          { id: '4', name: 'Customer Insights', views: 200, favorites: 10, shares: 5, lastViewed: '2024-01-14T16:20:00Z', status: 'draft' }
        ]);
      }
    } catch (error) {
      console.error('Error loading analytics:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Breakthrough: Test all user workbooks for embed functionality
  const testUserWorkbooks = useCallback(async () => {
    if (!workbookStats.length) return;
    
    setDebugResults([]);
    const results: DebugResult[] = [];
    
    for (const workbook of workbookStats) {
      try {
        const response = await fetch('/api/v1/sigma/test-workbook-embed', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify({
            workbookId: workbook.id,
            userEmail: userEmail,
            debugMode: true
          })
        });
        
        const data = await response.json();
        
        results.push({
          workbookId: workbook.id,
          workbookName: workbook.name,
          status: data.success ? 'success' : 'error',
          message: data.message || 'Test completed',
          embedUrl: data.embedURL,
          jwtValid: data.jwtValid
        });
      } catch (error) {
        results.push({
          workbookId: workbook.id,
          workbookName: workbook.name,
          status: 'error',
          message: `Test failed: ${error.message}`
        });
      }
    }
    
    setDebugResults(results);
  }, [workbookStats, userEmail]);

  useEffect(() => {
    loadAnalytics();
  }, [loadAnalytics]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <Activity className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading your analytics dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Personal Analytics Dashboard
              </h1>
              <p className="text-gray-600">
                Track your workbook performance and community engagement
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge 
                variant={showDebugMode ? "default" : "secondary"}
                className={`${
                  showDebugMode
                    ? "bg-green-100 text-green-800 border-green-200"
                    : "bg-gray-100 text-gray-600 border-gray-200"
                }`}
              >
                {showDebugMode ? "Debug Mode ON" : "Debug Mode OFF"}
              </Badge>
              <Button
                variant="outline"
                onClick={() => setShowDebugMode(!showDebugMode)}
                className="flex items-center gap-2 bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              >
                <Bug className="h-4 w-4" />
                {showDebugMode ? "Hide Debug" : "Show Debug"}
              </Button>
            </div>
          </div>
        </div>

        {/* Debug Panel */}
        {showDebugMode && (
        <Alert className="mb-6 border-orange-200 bg-orange-50">
          <Bug className="h-4 w-4" />
          <AlertDescription className="flex items-center justify-between">
              <span>Debug Mode: Test workbook embed functionality across all your workbooks</span>
              <Button
                size="sm"
                onClick={testUserWorkbooks}
                disabled={!workbookStats.length}
                className="ml-4"
              >
                Test All Workbooks
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {/* Debug Results */}
        {showDebugMode && debugResults.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Debug Test Results</h3>
            <div className="grid gap-3">
              {debugResults.map((result) => (
                <Card key={result.workbookId} className={`border-l-4 ${
                  result.status === 'success' ? 'border-l-green-500' : 
                  result.status === 'warning' ? 'border-l-yellow-500' : 'border-l-red-500'
                }`}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{result.workbookName}</h4>
                        <p className="text-sm text-gray-600">{result.message}</p>
                        {result.embedUrl && (
                          <p className="text-xs text-blue-600 mt-1">
                            Embed URL: {result.embedUrl}
                          </p>
                        )}
                      </div>
                      <Badge 
                        variant={
                          result.status === 'success' ? 'default' : 
                          result.status === 'warning' ? 'secondary' : 'destructive'
                        }
                        className={`${
                          result.status === 'success'
                            ? "bg-green-100 text-green-800 border-green-200"
                            : result.status === 'warning'
                            ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                            : "bg-red-100 text-red-800 border-red-200"
                        }`}
                      >
                        {result.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white border border-gray-200">
            <TabsTrigger 
              value="analytics" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 hover:text-gray-900"
            >
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger 
              value="workbooks" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 hover:text-gray-900"
            >
              <BookOpen className="h-4 w-4" />
              My Workbooks
            </TabsTrigger>
            <TabsTrigger 
              value="collaboration" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 hover:text-gray-900"
            >
              <Users className="h-4 w-4" />
              Collaboration
            </TabsTrigger>
          </TabsList>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics?.totalViews.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    +12% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Favorites</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics?.totalFavorites}</div>
                  <p className="text-xs text-muted-foreground">
                    +8% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Shares</CardTitle>
                  <Share2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics?.totalShares}</div>
                  <p className="text-xs text-muted-foreground">
                    +15% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Followers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics?.totalFollowers}</div>
                  <p className="text-xs text-muted-foreground">
                    +5% from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Engagement Analysis */}
            {analyticsSummary && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Engagement Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Favorites Rate</span>
                        <span>{analyticsSummary.engagementRate.toFixed(1)}%</span>
                      </div>
                      <Progress value={analyticsSummary.engagementRate} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        Based on {analyticsSummary.totalEngagement} total interactions
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Performance Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Avg Views per Workbook</span>
                        <span className="text-sm font-medium">
                          {analyticsSummary.avgViewsPerWorkbook.toFixed(0)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Top Performer</span>
                        <span className="text-sm font-medium">
                          {analyticsSummary.topPerformingWorkbook?.name || 'N/A'}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analytics?.recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${
                        activity.type === 'view' ? 'bg-blue-100 text-blue-600' :
                        activity.type === 'favorite' ? 'bg-red-100 text-red-600' :
                        activity.type === 'share' ? 'bg-green-100 text-green-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {activity.type === 'view' && <Eye className="h-4 w-4" />}
                        {activity.type === 'favorite' && <Heart className="h-4 w-4" />}
                        {activity.type === 'share' && <Share2 className="h-4 w-4" />}
                        {activity.type === 'comment' && <MessageSquare className="h-4 w-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.user}</span> {activity.type}d{' '}
                          <span className="font-medium">{activity.workbookName}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(activity.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Workbooks Tab */}
          <TabsContent value="workbooks" className="space-y-6">
            <div className="grid gap-6">
              {workbookStats.map((workbook) => (
                <Card key={workbook.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{workbook.name}</h3>
                        <Badge 
                          variant={
                            workbook.status === 'active' ? 'default' :
                            workbook.status === 'draft' ? 'secondary' : 'outline'
                          }
                          className={`${
                            workbook.status === 'active'
                              ? "bg-green-100 text-green-800 border-green-200"
                              : workbook.status === 'draft'
                              ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                              : "bg-gray-100 text-gray-600 border-gray-200"
                          }`}
                        >
                          {workbook.status}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">
                          Last viewed: {new Date(workbook.lastViewed).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{workbook.views}</div>
                        <div className="text-sm text-muted-foreground">Views</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">{workbook.favorites}</div>
                        <div className="text-sm text-muted-foreground">Favorites</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{workbook.shares}</div>
                        <div className="text-sm text-muted-foreground">Shares</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Collaboration Tab */}
          <TabsContent value="collaboration" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Following</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">{analytics?.totalFollowing}</div>
                  <p className="text-sm text-muted-foreground">
                    People you're following
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Followers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">{analytics?.totalFollowers}</div>
                  <p className="text-sm text-muted-foreground">
                    People following you
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Collaboration Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                      <Users className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Join Community Challenges</h4>
                      <p className="text-sm text-muted-foreground">
                        Participate in collaborative workbook creation challenges
                      </p>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">Join</Button>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="p-2 bg-green-100 text-green-600 rounded-full">
                      <Star className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Featured Author Program</h4>
                      <p className="text-sm text-muted-foreground">
                        Get featured for your top-performing workbooks
                      </p>
                    </div>
                    <Button size="sm" variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50">Learn More</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
