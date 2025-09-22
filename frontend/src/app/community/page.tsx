'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search,
  Filter,
  TrendingUp,
  Users,
  Star,
  Heart,
  Share2,
  Eye,
  BookOpen,
  Award,
  Zap,
  Bug,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MessageSquare
} from 'lucide-react';

interface Workbook {
  id: string;
  name: string;
  author: string;
  authorEmail: string;
  views: number;
  favorites: number;
  shares: number;
  createdAt: string;
  tags: string[];
  thumbnail?: string;
  isTrending?: boolean;
  isFeatured?: boolean;
}

interface Author {
  id: string;
  name: string;
  email: string;
  followers: number;
  workbooks: number;
  totalViews: number;
  isVerified: boolean;
  avatar?: string;
}

interface CommunityChallenge {
  id: string;
  title: string;
  description: string;
  deadline: string;
  participants: number;
  prize: string;
  status: 'active' | 'upcoming' | 'completed';
}

interface DebugResult {
  workbookId: string;
  workbookName: string;
  status: 'success' | 'error' | 'warning';
  message: string;
  embedUrl?: string;
  jwtValid?: boolean;
}

export default function CommunityPage() {
  const [userEmail, setUserEmail] = useState('test@example.com');
  const [showDebugMode, setShowDebugMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'trending' | 'featured' | 'recent'>('all');
  const [trendingWorkbooks, setTrendingWorkbooks] = useState<Workbook[]>([]);
  const [featuredAuthors, setFeaturedAuthors] = useState<Author[]>([]);
  const [communityChallenges, setCommunityChallenges] = useState<CommunityChallenge[]>([]);
  const [debugResults, setDebugResults] = useState<DebugResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<'discover' | 'authors' | 'challenges'>('discover');

  // Memoized filtered workbooks
  const filteredWorkbooks = useMemo(() => {
    let filtered = trendingWorkbooks;
    
    if (selectedFilter !== 'all') {
      filtered = filtered.filter(workbook => {
        switch (selectedFilter) {
          case 'trending':
            return workbook.isTrending;
          case 'featured':
            return workbook.isFeatured;
          case 'recent':
            const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
            return new Date(workbook.createdAt) > weekAgo;
          default:
            return true;
        }
      });
    }
    
    if (searchQuery) {
      filtered = filtered.filter(workbook =>
        workbook.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        workbook.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        workbook.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    return filtered;
  }, [trendingWorkbooks, selectedFilter, searchQuery]);

  // Load community data
  const loadCommunityData = useCallback(async () => {
    try {
      setIsLoading(true);
      
      // Simulate API calls - replace with actual endpoints
      const [workbooksResponse, authorsResponse, challengesResponse] = await Promise.all([
        fetch('/api/v1/community/workbooks'),
        fetch('/api/v1/community/authors'),
        fetch('/api/v1/community/challenges')
      ]);
      
      if (workbooksResponse.ok && authorsResponse.ok && challengesResponse.ok) {
        const workbooksData = await workbooksResponse.json();
        const authorsData = await authorsResponse.json();
        const challengesData = await challengesResponse.json();
        
        setTrendingWorkbooks(workbooksData.workbooks);
        setFeaturedAuthors(authorsData.authors);
        setCommunityChallenges(challengesData.challenges);
      } else {
        // Fallback mock data for development
        setTrendingWorkbooks([
          {
            id: '1',
            name: 'Sales Performance Dashboard',
            author: 'Sarah Johnson',
            authorEmail: 'sarah.johnson@example.com',
            views: 1250,
            favorites: 89,
            shares: 45,
            createdAt: '2024-01-10T00:00:00Z',
            tags: ['sales', 'analytics', 'dashboard'],
            isTrending: true,
            isFeatured: false
          },
          {
            id: '2',
            name: 'Marketing ROI Analysis',
            author: 'Mike Chen',
            authorEmail: 'mike.chen@example.com',
            views: 980,
            favorites: 67,
            shares: 32,
            createdAt: '2024-01-12T00:00:00Z',
            tags: ['marketing', 'roi', 'analytics'],
            isTrending: true,
            isFeatured: true
          },
          {
            id: '3',
            name: 'Customer Churn Prediction',
            author: 'Emily Rodriguez',
            authorEmail: 'emily.rodriguez@example.com',
            views: 750,
            favorites: 54,
            shares: 28,
            createdAt: '2024-01-14T00:00:00Z',
            tags: ['customer', 'prediction', 'ml'],
            isTrending: false,
            isFeatured: true
          }
        ]);
        
        setFeaturedAuthors([
          {
            id: '1',
            name: 'Sarah Johnson',
            email: 'sarah.johnson@example.com',
            followers: 245,
            workbooks: 12,
            totalViews: 15600,
            isVerified: true
          },
          {
            id: '2',
            name: 'Mike Chen',
            email: 'mike.chen@example.com',
            followers: 189,
            workbooks: 8,
            totalViews: 12300,
            isVerified: true
          },
          {
            id: '3',
            name: 'Emily Rodriguez',
            email: 'emily.rodriguez@example.com',
            followers: 156,
            workbooks: 15,
            totalViews: 9800,
            isVerified: false
          }
        ]);
        
        setCommunityChallenges([
          {
            id: '1',
            title: 'Q1 Analytics Challenge',
            description: 'Create the most innovative Q1 performance dashboard',
            deadline: '2024-02-15T23:59:59Z',
            participants: 45,
            prize: '$500 Amazon Gift Card',
            status: 'active'
          },
          {
            id: '2',
            title: 'Data Visualization Masterclass',
            description: 'Design interactive visualizations for customer data',
            deadline: '2024-03-01T23:59:59Z',
            participants: 23,
            prize: 'Sigma Pro Subscription',
            status: 'upcoming'
          }
        ]);
      }
    } catch (error) {
      console.error('Error loading community data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Breakthrough: Test community workbooks for embed functionality
  const testCommunityWorkbooks = useCallback(async () => {
    if (!trendingWorkbooks.length) return;
    
    setDebugResults([]);
    const results: DebugResult[] = [];
    
    for (const workbook of trendingWorkbooks.slice(0, 5)) { // Test top 5
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
  }, [trendingWorkbooks, userEmail]);

  // Carousel navigation
  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, Math.max(0, filteredWorkbooks.length - 3)));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    loadCommunityData();
  }, [loadCommunityData]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <Users className="h-12 w-12 animate-pulse text-purple-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading community hub...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Community Hub
              </h1>
              <p className="text-gray-600">
                Discover, collaborate, and share with the Sigma community
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
              <span>Debug Mode: Test community workbook embed functionality</span>
              <Button
                size="sm"
                onClick={testCommunityWorkbooks}
                disabled={!trendingWorkbooks.length}
                className="ml-4"
              >
                Test Community Workbooks
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {/* Debug Results */}
        {showDebugMode && debugResults.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Community Debug Test Results</h3>
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
                      <Badge variant={
                        result.status === 'success' ? 'default' : 
                        result.status === 'warning' ? 'secondary' : 'destructive'
                      }>
                        {result.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search workbooks, authors, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'trending', 'featured', 'recent'].map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter as any)}
                className={`capitalize ${
                  selectedFilter === filter 
                    ? "bg-blue-600 text-white border-blue-600" 
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100 border border-gray-200">
            <TabsTrigger 
              value="discover" 
              className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=inactive]:text-gray-600"
            >
              <Search className="h-4 w-4" />
              Discover
            </TabsTrigger>
            <TabsTrigger 
              value="authors" 
              className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=inactive]:text-gray-600"
            >
              <Users className="h-4 w-4" />
              Authors
            </TabsTrigger>
            <TabsTrigger 
              value="challenges" 
              className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=inactive]:text-gray-600"
            >
              <Award className="h-4 w-4" />
              Challenges
            </TabsTrigger>
          </TabsList>

          {/* Discover Tab */}
          <TabsContent value="discover" className="space-y-6">
            {/* Workbook Carousel */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Trending Workbooks
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={prevSlide} 
                      disabled={currentSlide === 0}
                      className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 disabled:opacity-50"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={nextSlide} 
                      disabled={currentSlide >= filteredWorkbooks.length - 3}
                      className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 disabled:opacity-50"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
                  >
                    {filteredWorkbooks.map((workbook) => (
                      <div key={workbook.id} className="w-1/3 flex-shrink-0 px-3">
                        <Card className="h-full hover:shadow-lg transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h3 className="font-semibold text-lg mb-1">{workbook.name}</h3>
                                <p className="text-sm text-gray-600">by {workbook.author}</p>
                              </div>
                              <div className="flex gap-1">
                                {workbook.isTrending && <Badge variant="default" className="text-xs bg-green-100 text-green-800 border-green-200">Trending</Badge>}
                                {workbook.isFeatured && <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800 border-blue-200">Featured</Badge>}
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-1 mb-4">
                              {workbook.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs bg-gray-100 text-gray-700 border-gray-300">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="grid grid-cols-3 gap-2 text-center mb-4">
                              <div>
                                <div className="text-lg font-bold text-blue-600">{workbook.views}</div>
                                <div className="text-xs text-gray-500">Views</div>
                              </div>
                              <div>
                                <div className="text-lg font-bold text-red-600">{workbook.favorites}</div>
                                <div className="text-xs text-gray-500">Favorites</div>
                              </div>
                              <div>
                                <div className="text-lg font-bold text-green-600">{workbook.shares}</div>
                                <div className="text-xs text-gray-500">Shares</div>
                              </div>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button size="sm" className="flex-1 bg-blue-600 text-white hover:bg-blue-700">View</Button>
                              <Button size="sm" variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
                                <Heart className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* All Workbooks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkbooks.map((workbook) => (
                <Card key={workbook.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{workbook.name}</h3>
                        <p className="text-sm text-gray-600">by {workbook.author}</p>
                      </div>
                      <div className="flex gap-1">
                        {workbook.isTrending && <Badge variant="default" className="text-xs bg-green-100 text-green-800 border-green-200">Trending</Badge>}
                        {workbook.isFeatured && <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800 border-blue-200">Featured</Badge>}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {workbook.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs bg-gray-100 text-gray-700 border-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-center mb-4">
                      <div>
                        <div className="text-lg font-bold text-blue-600">{workbook.views}</div>
                        <div className="text-xs text-gray-500">Views</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-red-600">{workbook.favorites}</div>
                        <div className="text-xs text-gray-500">Favorites</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600">{workbook.shares}</div>
                        <div className="text-xs text-gray-500">Shares</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-blue-600 text-white hover:bg-blue-700">View</Button>
                      <Button size="sm" variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Authors Tab */}
          <TabsContent value="authors" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredAuthors.map((author) => (
                <Card key={author.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {author.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{author.name}</h3>
                      {author.isVerified && <Badge variant="default" className="text-xs">Verified</Badge>}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-center mb-4">
                      <div>
                        <div className="text-lg font-bold text-blue-600">{author.followers}</div>
                        <div className="text-xs text-gray-500">Followers</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600">{author.workbooks}</div>
                        <div className="text-xs text-gray-500">Workbooks</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-600">{author.totalViews.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">Total Views</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-blue-600 text-white hover:bg-blue-700">Follow</Button>
                      <Button size="sm" variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50">View Profile</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Challenges Tab */}
          <TabsContent value="challenges" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {communityChallenges.map((challenge) => (
                <Card key={challenge.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
                        <p className="text-gray-600 mb-4">{challenge.description}</p>
                      </div>
                      <Badge 
                        variant={
                          challenge.status === 'active' ? 'default' :
                          challenge.status === 'upcoming' ? 'secondary' : 'outline'
                        }
                        className={
                          challenge.status === 'active' 
                            ? "bg-green-100 text-green-800 border-green-200" 
                            : challenge.status === 'upcoming'
                            ? "bg-purple-100 text-purple-800 border-purple-200"
                            : "bg-gray-100 text-gray-600 border-gray-200"
                        }
                      >
                        {challenge.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">Deadline: {new Date(challenge.deadline).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{challenge.participants} participants</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">Prize: {challenge.prize}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                      {challenge.status === 'active' ? 'Join Challenge' :
                       challenge.status === 'upcoming' ? 'Notify Me' : 'View Results'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
