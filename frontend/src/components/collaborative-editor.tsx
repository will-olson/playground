'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Play, 
  Users, 
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
  const [currentUserEmail, setCurrentUserEmail] = useState(userEmail);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateEmbedURL = async () => {
    if (!currentUserEmail) {
      setError('User email is required');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Use the breakthrough pattern - exactly like debug-embed
      const response = await fetch('http://localhost:3001/api/v1/sigma/embed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          workbookPath: workbookId || 'workbook/workbook-4osogXvjSNtZFo3DW2XYGs',
          userEmail: currentUserEmail,
          options: {
            jwtOptions: {
              sessionLength: 3600,
              isEmbedUser: false // Breakthrough: always false for real Sigma login
            }
          }
        }),
      });

      const data = await response.json();
      console.log('API Response:', data);
      
      if (data.success && data.embedURL) {
        setEmbedURL(data.embedURL);
        
        // Notify parent component if callback provided
        if (onWorkbookCreated && workbookId) {
          onWorkbookCreated(workbookId, data.embedURL);
        }
      } else {
        setError(data.error || 'Failed to generate embed URL');
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setError(`Network error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Breakthrough Authentication Alert */}
      <Alert className="border-green-200 bg-green-50">
        <CheckCircle className="h-4 w-4" />
        <AlertDescription>
          <strong>Breakthrough Authentication:</strong> Log into your Sigma account within the application interface to unlock full workbook building capabilities.
        </AlertDescription>
      </Alert>

      {/* Editor Controls - Simple like debug-embed */}
      <div>
        <Button 
          onClick={generateEmbedURL} 
          disabled={isLoading}
          className="mb-4 bg-blue-600 hover:bg-blue-700 text-white"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Play className="h-4 w-4 mr-2" />
              Launch Collaborative Editor
            </>
          )}
        </Button>
        
        {embedURL && (
          <div className="space-y-4">
            <div>
              <Label>User Email:</Label>
              <Input 
                value={currentUserEmail} 
                onChange={(e) => setCurrentUserEmail(e.target.value)}
                className="mt-1" 
              />
            </div>
            
            <div>
              <Label>Workbook ID:</Label>
              <Input 
                value={workbookId || 'workbook/workbook-4osogXvjSNtZFo3DW2XYGs'} 
                readOnly 
                className="mt-1 bg-gray-50" 
              />
            </div>
          </div>
        )}
      </div>

      {error && (
        <Alert className="border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Collaborative Editor - Exactly like debug-embed */}
      {embedURL && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Real-time Collaborative Editor</h3>
          <iframe
            src={embedURL}
            width="100%"
            height="600"
            className="border border-gray-300 rounded-lg"
            title="Collaborative Editor"
            onLoad={() => console.log('Collaborative editor loaded')}
            onError={(e) => console.error('Collaborative editor error:', e)}
          />
        </div>
      )}
    </div>
  );
}
