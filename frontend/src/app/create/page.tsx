'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus,
  FileText,
  Palette,
  Settings,
  Play,
  Save,
  Share2,
  Eye,
  Download,
  Upload,
  Zap,
  Bug,
  BookOpen,
  Users,
  Star,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface WorkbookTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  thumbnail: string;
  isPopular: boolean;
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface ExportSchedule {
  id: string;
  name: string;
  frequency: 'daily' | 'weekly' | 'monthly';
  format: 'pdf' | 'excel' | 'csv';
  status: 'active' | 'paused' | 'completed';
  lastRun: string;
  nextRun: string;
}

interface DebugResult {
  workbookId: string;
  workbookName: string;
  status: 'success' | 'error' | 'warning';
  message: string;
  embedUrl?: string;
  jwtValid?: boolean;
}

interface WorkbookData {
  name: string;
  description: string;
  templateId?: string;
  tags: string[];
  isPublic: boolean;
  allowComments: boolean;
  allowSharing: boolean;
}

export default function CreatePage() {
  const [userEmail, setUserEmail] = useState('test@example.com');
  const [showDebugMode, setShowDebugMode] = useState(false);
  const [workbookTemplates, setWorkbookTemplates] = useState<WorkbookTemplate[]>([]);
  const [exportSchedules, setExportSchedules] = useState<ExportSchedule[]>([]);
  const [debugResults, setDebugResults] = useState<DebugResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [activeTab, setActiveTab] = useState<'templates' | 'editor' | 'export'>('templates');
  const [selectedTemplate, setSelectedTemplate] = useState<WorkbookTemplate | null>(null);
  const [workbookData, setWorkbookData] = useState<WorkbookData>({
    name: '',
    description: '',
    tags: [],
    isPublic: true,
    allowComments: true,
    allowSharing: true
  });

  // Memoized templates by category
  const templatesByCategory = useMemo(() => {
    const categories = workbookTemplates.reduce((acc, template) => {
      if (!acc[template.category]) {
        acc[template.category] = [];
      }
      acc[template.category].push(template);
      return acc;
    }, {} as Record<string, WorkbookTemplate[]>);
    
    return categories;
  }, [workbookTemplates]);

  // Load templates and export schedules
  const loadCreationData = useCallback(async () => {
    try {
      setIsLoading(true);
      
      // Simulate API calls - replace with actual endpoints
      const [templatesResponse, exportsResponse] = await Promise.all([
        fetch('/api/v1/create/templates'),
        fetch('/api/v1/create/export-schedules')
      ]);
      
      if (templatesResponse.ok && exportsResponse.ok) {
        const templatesData = await templatesResponse.json();
        const exportsData = await exportsResponse.json();
        
        setWorkbookTemplates(templatesData.templates);
        setExportSchedules(exportsData.schedules);
      } else {
        // Fallback mock data for development
        setWorkbookTemplates([
          {
            id: '1',
            name: 'Sales Dashboard',
            description: 'Comprehensive sales performance tracking with KPIs and trends',
            category: 'Sales',
            thumbnail: '/templates/sales-dashboard.png',
            isPopular: true,
            estimatedTime: '2-3 hours',
            difficulty: 'intermediate'
          },
          {
            id: '2',
            name: 'Marketing Analytics',
            description: 'Track campaign performance, ROI, and customer acquisition',
            category: 'Marketing',
            thumbnail: '/templates/marketing-analytics.png',
            isPopular: true,
            estimatedTime: '3-4 hours',
            difficulty: 'advanced'
          },
          {
            id: '3',
            name: 'Financial Report',
            description: 'Monthly financial summaries with profit/loss analysis',
            category: 'Finance',
            thumbnail: '/templates/financial-report.png',
            isPopular: false,
            estimatedTime: '1-2 hours',
            difficulty: 'beginner'
          },
          {
            id: '4',
            name: 'Customer Insights',
            description: 'Customer behavior analysis and segmentation',
            category: 'Customer',
            thumbnail: '/templates/customer-insights.png',
            isPopular: true,
            estimatedTime: '2-3 hours',
            difficulty: 'intermediate'
          },
          {
            id: '5',
            name: 'Operations Dashboard',
            description: 'Real-time operational metrics and efficiency tracking',
            category: 'Operations',
            thumbnail: '/templates/operations-dashboard.png',
            isPopular: false,
            estimatedTime: '4-5 hours',
            difficulty: 'advanced'
          },
          {
            id: '6',
            name: 'HR Analytics',
            description: 'Employee performance and retention analysis',
            category: 'HR',
            thumbnail: '/templates/hr-analytics.png',
            isPopular: false,
            estimatedTime: '2-3 hours',
            difficulty: 'intermediate'
          }
        ]);
        
        setExportSchedules([
          {
            id: '1',
            name: 'Weekly Sales Report',
            frequency: 'weekly',
            format: 'pdf',
            status: 'active',
            lastRun: '2024-01-08T09:00:00Z',
            nextRun: '2024-01-15T09:00:00Z'
          },
          {
            id: '2',
            name: 'Monthly Marketing Summary',
            frequency: 'monthly',
            format: 'excel',
            status: 'active',
            lastRun: '2024-01-01T08:00:00Z',
            nextRun: '2024-02-01T08:00:00Z'
          }
        ]);
      }
    } catch (error) {
      console.error('Error loading creation data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Create workbook from template
  const createWorkbookFromTemplate = useCallback(async (template: WorkbookTemplate) => {
    try {
      setIsCreating(true);
      
      const response = await fetch('/api/v1/create/workbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          templateId: template.id,
          name: workbookData.name || template.name,
          description: workbookData.description || template.description,
          userEmail: userEmail,
          tags: workbookData.tags,
          isPublic: workbookData.isPublic,
          allowComments: workbookData.allowComments,
          allowSharing: workbookData.allowSharing
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        
        // Test the created workbook
        if (showDebugMode) {
          await testCreatedWorkbook(data.workbookId, data.name);
        }
        
        // Reset form
        setWorkbookData({
          name: '',
          description: '',
          tags: [],
          isPublic: true,
          allowComments: true,
          allowSharing: true
        });
        setSelectedTemplate(null);
        
        alert('Workbook created successfully!');
      } else {
        throw new Error('Failed to create workbook');
      }
    } catch (error) {
      console.error('Error creating workbook:', error);
      alert(`Error creating workbook: ${error.message}`);
    } finally {
      setIsCreating(false);
    }
  }, [workbookData, userEmail, showDebugMode]);

  // Breakthrough: Test created workbook for embed functionality
  const testCreatedWorkbook = useCallback(async (workbookId: string, workbookName: string) => {
    try {
      const response = await fetch('/api/v1/sigma/test-workbook-embed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          workbookId: workbookId,
          userEmail: userEmail,
          debugMode: true
        })
      });
      
      const data = await response.json();
      
      setDebugResults(prev => [...prev, {
        workbookId: workbookId,
        workbookName: workbookName,
        status: data.success ? 'success' : 'error',
        message: data.message || 'Test completed',
        embedUrl: data.embedURL,
        jwtValid: data.jwtValid
      }]);
    } catch (error) {
      setDebugResults(prev => [...prev, {
        workbookId: workbookId,
        workbookName: workbookName,
        status: 'error',
        message: `Test failed: ${error.message}`
      }]);
    }
  }, [userEmail]);

  // Create export schedule
  const createExportSchedule = useCallback(async (scheduleData: any) => {
    try {
      const response = await fetch('/api/v1/create/export-schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(scheduleData)
      });
      
      if (response.ok) {
        const data = await response.json();
        setExportSchedules(prev => [...prev, data.schedule]);
        alert('Export schedule created successfully!');
      } else {
        throw new Error('Failed to create export schedule');
      }
    } catch (error) {
      console.error('Error creating export schedule:', error);
      alert(`Error creating export schedule: ${error.message}`);
    }
  }, []);

  useEffect(() => {
    loadCreationData();
  }, [loadCreationData]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <Plus className="h-12 w-12 animate-pulse text-green-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading creation studio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Workbook Creation Studio
              </h1>
              <p className="text-gray-600">
                Create, customize, and share powerful data workbooks
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
          <AlertDescription>
              Debug Mode: Test embed functionality for newly created workbooks
            </AlertDescription>
          </Alert>
        )}

        {/* Debug Results */}
        {showDebugMode && debugResults.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Creation Debug Test Results</h3>
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
              value="templates" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 hover:text-gray-900"
            >
              <BookOpen className="h-4 w-4" />
              Templates
            </TabsTrigger>
            <TabsTrigger 
              value="editor" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 hover:text-gray-900"
            >
              <FileText className="h-4 w-4" />
              Editor
            </TabsTrigger>
            <TabsTrigger 
              value="export" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 hover:text-gray-900"
            >
              <Download className="h-4 w-4" />
              Export
            </TabsTrigger>
          </TabsList>

          {/* Templates Tab */}
          <TabsContent value="templates" className="space-y-6">
            {/* Workbook Configuration */}
            {selectedTemplate && (
              <Card>
                <CardHeader>
                  <CardTitle>Workbook Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Workbook Name</label>
                      <Input
                        placeholder={selectedTemplate.name}
                        value={workbookData.name}
                        onChange={(e) => setWorkbookData(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Tags (comma-separated)</label>
                      <Input
                        placeholder="sales, analytics, dashboard"
                        value={workbookData.tags.join(', ')}
                        onChange={(e) => setWorkbookData(prev => ({ 
                          ...prev, 
                          tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean) 
                        }))}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Description</label>
                    <Textarea
                      placeholder={selectedTemplate.description}
                      value={workbookData.description}
                      onChange={(e) => setWorkbookData(prev => ({ ...prev, description: e.target.value }))}
                      rows={3}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="isPublic"
                        checked={workbookData.isPublic}
                        onChange={(e) => setWorkbookData(prev => ({ ...prev, isPublic: e.target.checked }))}
                      />
                      <label htmlFor="isPublic" className="text-sm text-gray-700">Make Public</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="allowComments"
                        checked={workbookData.allowComments}
                        onChange={(e) => setWorkbookData(prev => ({ ...prev, allowComments: e.target.checked }))}
                      />
                      <label htmlFor="allowComments" className="text-sm text-gray-700">Allow Comments</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="allowSharing"
                        checked={workbookData.allowSharing}
                        onChange={(e) => setWorkbookData(prev => ({ ...prev, allowSharing: e.target.checked }))}
                      />
                      <label htmlFor="allowSharing" className="text-sm text-gray-700">Allow Sharing</label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Template Categories */}
            {Object.entries(templatesByCategory).map(([category, templates]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle>{category} Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {templates.map((template) => (
                      <Card 
                        key={template.id} 
                        className={`cursor-pointer hover:shadow-lg transition-all ${
                          selectedTemplate?.id === template.id ? 'ring-2 ring-blue-500' : ''
                        }`}
                        onClick={() => setSelectedTemplate(template)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
                              <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                            </div>
                            {template.isPopular && (
                              <Badge variant="default" className="text-xs bg-blue-100 text-blue-800 border-blue-200">Popular</Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center justify-between mb-4">
                            <Badge variant="outline" className="text-xs bg-gray-100 text-gray-600 border-gray-200">
                              {template.difficulty}
                            </Badge>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Clock className="h-3 w-3" />
                              {template.estimatedTime}
                            </div>
                          </div>
                          
                          <Button 
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              createWorkbookFromTemplate(template);
                            }}
                            disabled={isCreating}
                          >
                            {isCreating ? 'Creating...' : 'Create Workbook'}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Editor Tab */}
          <TabsContent value="editor" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Collaborative Editor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Real-time Collaborative Editing</h3>
                  <p className="text-gray-600 mb-4">
                    Create and edit workbooks with your team in real-time
                  </p>
                  <Button disabled className="bg-gray-300 text-gray-500 cursor-not-allowed">
                    <Users className="h-4 w-4 mr-2" />
                    Coming Soon
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Embedding</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">JWT-based authentication</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Custom permissions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Responsive design</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Theme customization</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Publishing Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Public portfolio</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Community sharing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Export capabilities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Version control</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Export Tab */}
          <TabsContent value="export" className="space-y-6">
            {/* Export Schedules */}
            <Card>
              <CardHeader>
                <CardTitle>Export Schedules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {exportSchedules.map((schedule) => (
                    <div key={schedule.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{schedule.name}</h4>
                        <p className="text-sm text-gray-600">
                          {schedule.frequency} • {schedule.format.toUpperCase()} • 
                          Next run: {new Date(schedule.nextRun).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={
                            schedule.status === 'active' ? 'default' :
                            schedule.status === 'paused' ? 'secondary' : 'outline'
                          }
                          className={`${
                            schedule.status === 'active'
                              ? "bg-green-100 text-green-800 border-green-200"
                              : schedule.status === 'paused'
                              ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                              : "bg-gray-100 text-gray-600 border-gray-200"
                          }`}
                        >
                          {schedule.status}
                        </Badge>
                        <Button size="sm" variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Create Export Schedule */}
            <Card>
              <CardHeader>
                <CardTitle>Create Export Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700">Schedule Name</label>
                      <Input placeholder="Weekly Sales Report" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700">Frequency</label>
                      <select className="w-full p-2 border rounded-md">
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700">Format</label>
                      <select className="w-full p-2 border rounded-md">
                        <option value="pdf">PDF</option>
                        <option value="excel">Excel</option>
                        <option value="csv">CSV</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700">Workbook</label>
                      <select className="w-full p-2 border rounded-md">
                        <option value="">Select workbook...</option>
                        <option value="1">Sales Dashboard</option>
                        <option value="2">Marketing Analytics</option>
                        <option value="3">Financial Report</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Export Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}