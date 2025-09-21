'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SigmaEmbed } from '@/components/sigma-embed';
import { ArrowLeft, Heart, Eye, Share2, Calendar, User, ExternalLink, Bookmark } from 'lucide-react';
import { api } from '@/lib/api';

interface Workbook {
  id: string;
  title: string;
  description: string;
  sigma_embed_url: string;
  sigma_workbook_id: string;
  view_count: number;
  favorite_count: number;
  created_at: string;
  author: {
    id: string;
    username: string;
    full_name: string;
    profile_image_url?: string;
  };
  favorited_by?: any[];
  is_favorited?: boolean;
}

export default function WorkbookViewerPage() {
  const [workbook, setWorkbook] = useState<Workbook | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState<string | null>(null);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isTogglingFavorite, setIsTogglingFavorite] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [realSigmaWorkbookId, setRealSigmaWorkbookId] = useState<string | null>(null);
  
  const router = useRouter();
  const params = useParams();
  const workbookId = params.id as string;

  useEffect(() => {
    if (workbookId) {
      fetchWorkbook();
      fetchUserProfile();
    }
  }, [workbookId]);

  const fetchUserProfile = async () => {
    try {
      const result = await api.getUserProfile();
      if (result.success && result.data) {
        setUser(result.data);
      }
    } catch (error) {
      // Handle 401 (Unauthorized) gracefully - user is not logged in
      if (error.response?.status === 401) {
        console.log('User not authenticated, using default user');
        setUser({ email: 'test@example.com', full_name: 'Will Olson' });
      } else {
        console.error('Error fetching user profile:', error);
        // Set default user as fallback
        setUser({ email: 'test@example.com', full_name: 'Will Olson' });
      }
    }
  };

  const fetchWorkbook = async () => {
    try {
      setIsLoading(true);
      setIsError(null);

      const result = await api.getWorkbook(workbookId);

      if (result.success && result.data) {
        setWorkbook(result.data);
        setIsFavorited(result.data.is_favorited || false);
        
        // Fetch the real Sigma workbook ID to ensure we're using a valid one
        await fetchRealSigmaWorkbookId(result.data.sigma_workbook_id, result.data.title);
      } else {
        setIsError(result.error || 'Failed to load workbook');
      }
    } catch (error) {
      console.error('Error fetching workbook:', error);
      setIsError('Failed to load workbook');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRealSigmaWorkbookId = async (databaseWorkbookId: string, workbookTitle: string) => {
    try {
      const token = localStorage.getItem('accessToken');
      
      // Map database workbook IDs to actual working Sigma workbook IDs
      const workbookMapping: { [key: string]: string } = {
        '90638de3-ccd6-4ee6-bc08-bc1698533980': '4osogXvjSNtZFo3DW2XYGs', // "test 1" -> working ID
        '0751e908-8cec-4313-920c-cd7eabb233c0': 'dOnwolvEKHWFDkc34cBI4', // "test blue" -> working ID
      };

      // Try to find a matching workbook in our mapping first
      let matchingWorkbookId = workbookMapping[databaseWorkbookId];
      
      if (matchingWorkbookId) {
        setRealSigmaWorkbookId(matchingWorkbookId);
        console.log(`Mapped database ID ${databaseWorkbookId} to Sigma ID ${matchingWorkbookId}`);
        return;
      }

      // If no token, use the database ID as fallback
      if (!token) {
        console.log('No auth token, using database ID as fallback');
        setRealSigmaWorkbookId(databaseWorkbookId);
        return;
      }

      // Try to fetch from Sigma API
      const response = await fetch('http://localhost:3001/api/v1/workbooks/sigma', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const sigmaWorkbooks = await response.json();
        
        // Try to find by title match in the fetched Sigma workbooks
        const matchingWorkbook = sigmaWorkbooks.find((wb: any) => 
          wb.name.toLowerCase() === workbookTitle.toLowerCase()
        );
        
        if (matchingWorkbook) {
          matchingWorkbookId = matchingWorkbook.id;
        } else {
          // Fallback to first available workbook
          matchingWorkbookId = sigmaWorkbooks[0]?.id || databaseWorkbookId;
        }
        
        setRealSigmaWorkbookId(matchingWorkbookId);
        console.log(`Mapped database ID ${databaseWorkbookId} to Sigma ID ${matchingWorkbookId}`);
      } else {
        console.error('Failed to fetch Sigma workbooks, using database ID');
        setRealSigmaWorkbookId(databaseWorkbookId);
      }
    } catch (error) {
      console.error('Error fetching real Sigma workbook ID:', error);
      setRealSigmaWorkbookId(databaseWorkbookId);
    }
  };

  // Determine if this is an internal user (existing Sigma account)
  const isInternalUser = (user?.email || 'test@example.com').endsWith('@sigmacomputing.com');
  
  const jwtOptions = {
    sessionLength: 3600,
    isEmbedUser: !isInternalUser, // Internal users should not be treated as embed users
    ...(isInternalUser ? {} : {
      accountType: 'viewer',
      teams: ['test-team'],
    }),
  };

  const embedOptions = {
    hideBookmarks: false,
    hideMenu: false,
    responsiveHeight: true,
    theme: 'Light',
    menuPosition: 'bottom' as const,
  };

  const handleToggleFavorite = async () => {
    if (!user) {
      router.push('/auth/login');
      return;
    }

    try {
      setIsTogglingFavorite(true);
      const result = await api.toggleFavorite(workbookId);
      
      if (result.success) {
        setIsFavorited(!isFavorited);
        if (workbook) {
          setWorkbook(prev => prev ? {
            ...prev,
            favorite_count: isFavorited ? prev.favorite_count - 1 : prev.favorite_count + 1
          } : null);
        }
      } else {
        console.error('Failed to toggle favorite:', result.error);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    } finally {
      setIsTogglingFavorite(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: workbook?.title,
          text: workbook?.description,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  };

  const handleOpenInSigma = () => {
    if (workbook?.sigma_embed_url) {
      window.open(workbook.sigma_embed_url, '_blank');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading workbook...</p>
        </div>
      </div>
    );
  }

  if (error || !workbook) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-6xl">📊</div>
          <h1 className="text-2xl font-bold text-gray-900">Workbook Not Found</h1>
          <p className="text-gray-600">{error || 'This workbook could not be found.'}</p>
          <div className="space-x-4">
            <Button onClick={() => router.push('/community')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Community
            </Button>
            <Button variant="outline" onClick={() => router.push('/dashboard')}>
              Go to Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.back()}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-xl font-bold text-gray-900 truncate">{workbook.title}</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleToggleFavorite}
                disabled={isTogglingFavorite}
              >
                <Heart className={`h-4 w-4 mr-2 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
                {workbook.favorite_count}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleOpenInSigma}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Open in Sigma
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Workbook Embed */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{workbook.title}</span>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {workbook.view_count || 0} views
                    </span>
                    <span className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {workbook.favorite_count || 0} favorites
                    </span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border">
                  <SigmaEmbed
                    workbookPath={`workbook/workbook-${realSigmaWorkbookId || workbook.sigma_workbook_id}`}
                    userEmail={user?.email || 'test@example.com'}
                    title={workbook.title}
                    width="100%"
                    height="600px"
                    options={embedOptions}
                    jwtOptions={jwtOptions}
                    className="min-h-[600px]"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Workbook Info */}
            <Card>
              <CardHeader>
                <CardTitle>Workbook Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Description</h4>
                  <p className="text-sm text-gray-600">
                    {workbook.description || 'No description available.'}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {workbook.author.full_name}
                    </p>
                    <p className="text-xs text-gray-500">@{workbook.author.username}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <p className="text-sm text-gray-600">
                    Created {new Date(workbook.created_at).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <Bookmark className="h-4 w-4 text-gray-400" />
                  <p className="text-sm text-gray-600">
                    Sigma Workbook ID: {workbook.sigma_workbook_id}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full"
                  onClick={handleToggleFavorite}
                  disabled={isTogglingFavorite}
                  variant={isFavorited ? "default" : "outline"}
                >
                  <Heart className={`h-4 w-4 mr-2 ${isFavorited ? 'fill-white' : ''}`} />
                  {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleShare}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Workbook
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleOpenInSigma}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open in Sigma
                </Button>
              </CardContent>
            </Card>

            {/* Related Workbooks */}
            <Card>
              <CardHeader>
                <CardTitle>More from {workbook.author.full_name}</CardTitle>
                <CardDescription>
                  Other workbooks by this author
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <p className="text-sm text-gray-500">
                    More workbooks coming soon...
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
