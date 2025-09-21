'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function DebugEmbedPage() {
  const [embedURL, setEmbedURL] = useState('');
  const [testURL, setTestURL] = useState('https://app.sigmacomputing.com/playground/workbook/workbook-4osogXvjSNtZFo3DW2XYGs?:link_source=share');

  const generateEmbedURL = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/sigma/embed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          workbookPath: 'workbook/workbook-4osogXvjSNtZFo3DW2XYGs',
          userEmail: 'test@example.com',
          options: {
            jwtOptions: {
              sessionLength: 3600,
              isEmbedUser: false
            }
          }
        }),
      });

      const data = await response.json();
      console.log('API Response:', data);
      
      if (data.success && data.embedURL) {
        setEmbedURL(data.embedURL);
      } else {
        console.error('API Error:', data.error);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Debug Embed</h1>
        
        <div className="space-y-6">
          <div>
            <Button onClick={generateEmbedURL} className="mb-4">
              Generate Embed URL
            </Button>
            
            {embedURL && (
              <div className="space-y-4">
                <div>
                  <Label>Generated Embed URL:</Label>
                  <Input value={embedURL} readOnly className="mt-1" />
                </div>
                
                <div>
                  <Label>Test Direct URL:</Label>
                  <Input value={testURL} onChange={(e) => setTestURL(e.target.value)} className="mt-1" />
                </div>
              </div>
            )}
          </div>

          {embedURL && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Generated Embed (with JWT)</h2>
              <iframe
                src={embedURL}
                width="100%"
                height="600"
                className="border border-gray-300 rounded-lg"
                title="Generated Embed"
                onLoad={() => console.log('Generated embed loaded')}
                onError={(e) => console.error('Generated embed error:', e)}
              />
            </div>
          )}

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Direct URL (no JWT)</h2>
            <iframe
              src={testURL}
              width="100%"
              height="600"
              className="border border-gray-300 rounded-lg"
              title="Direct URL"
              onLoad={() => console.log('Direct URL loaded')}
              onError={(e) => console.error('Direct URL error:', e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
