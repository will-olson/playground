'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Play, 
  Settings, 
  Users, 
  Lock, 
  Globe, 
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

interface CollaborativeEditorProps {
  userEmail?: string;
  workbookId?: string;
  onWorkbookCreated?: (workbookId: string, embedUrl: string) => void;
}

export function CollaborativeEditor({ 
  userEmail = 'test@example.com', 
  workbookId,
  onWorkbookCreated 
}: CollaborativeEditorProps) {
  const [embedURL, setEmbedURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmbedding, setIsEmbedding] = useState(false);
  const [error, setError] = useState('');
  const [sessionInfo, setSessionInfo] = useState<{
    userEmail: string;
    isAuthenticated: boolean;
    sessionType: 'internal' | 'external';
  } | null>(null);

  // Initialize session info
  useEffect(() => {
    const isInternalUser = userEmail.endsWith('@sigmacomputing.com');
    setSessionInfo({
      userEmail,
      isAuthenticated: true,
      sessionType: isInternalUser ? 'internal' : 'external'
    });
  }, [userEmail]);

  const generateEmbedURL = async () => {
    if (!userEmail) {
      setError('User email is required');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Use the breakthrough pattern for internal users
      const isInternalUser = userEmail.endsWith('@sigmacomputing.com');
      
      const response = await fetch('http://localhost:3001/api/v1/sigma/embed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          workbookPath: workbookId || 'workbook/workbook-4osogXvjSNtZFo3DW2XYGs',
          userEmail,
          options: {
            jwtOptions: {
              sessionLength: 3600,
              isEmbedUser: !isInternalUser, // Breakthrough: false for internal users
              ...(isInternalUser ? {} : {
                accountType: 'viewer',
                teams: ['analytics']
              })
            }
          }
        }),
      });

      const data = await response.json();
      
      if (data.success && data.embedURL) {
        setEmbedURL(data.embedURL);
        setIsEmbedding(true);
        
        // Notify parent component if callback provided
        if (onWorkbookCreated && workbookId) {
          onWorkbookCreated(workbookId, data.embedURL);
        }
      } else {
        setError(data.error || 'Failed to generate embed URL');
      }
    } catch (error) {
      setError(`Network error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleIframeLoad = () => {
    setIsEmbedding(false);
  };

  const handleIframeError = (error: any) => {
    setIsEmbedding(false);
    setError('Failed to load collaborative editor');
  };

  return (
    <div className="space-y-6">
      {/* Session Info */}
      {sessionInfo && (
        <Alert className="border-blue-200 bg-blue-50">
          <Users className="h-4 w-4" />
          <AlertDescription className="flex items-center justify-between">
            <div>
              <span className="font-medium">Collaborative Session Active</span>
              <span className="ml-2 text-sm text-gray-600">
                ({sessionInfo.userEmail})
              </span>
              <Badge 
                variant={sessionInfo.sessionType === 'internal' ? 'default' : 'secondary'}
                className={`ml-2 ${
                  sessionInfo.sessionType === 'internal'
                    ? "bg-green-100 text-green-800 border-green-200"
                    : "bg-blue-100 text-blue-800 border-blue-200"
                }`}
              >
                {sessionInfo.sessionType === 'internal' ? 'Internal User' : 'External User'}
              </Badge>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Editor Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5" />
            Launch Collaborative Editor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="userEmail">User Email</Label>
              <Input
                id="userEmail"
                value={userEmail}
                readOnly
                className="bg-gray-50"
              />
            </div>
            <div>
              <Label htmlFor="workbookId">Workbook ID</Label>
              <Input
                id="workbookId"
                value={workbookId || 'workbook/workbook-4osogXvjSNtZFo3DW2XYGs'}
                readOnly
                className="bg-gray-50"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              onClick={generateEmbedURL} 
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Launch Editor
                </>
              )}
            </Button>

            {sessionInfo?.sessionType === 'internal' && (
              <Badge className="bg-green-100 text-green-800 border-green-200">
                <CheckCircle className="h-3 w-3 mr-1" />
                Breakthrough Authentication Enabled
              </Badge>
            )}
          </div>

          {error && (
            <Alert className="border-red-200 bg-red-50">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Collaborative Editor */}
      {embedURL && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Real-time Collaborative Editor
              {isEmbedding && (
                <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
              <iframe
                src={embedURL}
                width="100%"
                height="600"
                className="w-full"
                title="Collaborative Editor"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
              />
            </div>
            
            {/* Editor Features */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="h-4 w-4" />
                Real-time collaboration
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Lock className="h-4 w-4" />
                Secure JWT authentication
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Globe className="h-4 w-4" />
                Full Sigma functionality
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
