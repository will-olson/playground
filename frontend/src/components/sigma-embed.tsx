'use client';

import { useState, useEffect } from 'react';
import { SimpleIframe } from './simple-iframe';
import { AlertCircle, Loader2 } from 'lucide-react';

interface SigmaEmbedProps {
  workbookPath: string;
  userEmail: string;
  title?: string;
  width?: string | number;
  height?: string | number;
  options?: {
    hideBookmarks?: boolean;
    hideFolderNavigation?: boolean;
    hideMenu?: boolean;
    hideTooltip?: boolean;
    language?: string;
    languageVariant?: string;
    menuPosition?: 'top' | 'bottom' | 'none';
    responsiveHeight?: boolean;
    theme?: string;
    controlValues?: Record<string, string>;
  };
  jwtOptions?: {
    sessionLength?: number;
    isEmbedUser?: boolean;
    firstName?: string;
    lastName?: string;
    userAttributes?: Record<string, string>;
    accountType?: string;
    teams?: string[];
  };
  className?: string;
}

interface EmbedResponse {
  success: boolean;
  embedURL?: string;
  validation?: {
    isValid: boolean;
    errors: string[];
  };
  error?: string;
}

export function SigmaEmbed({
  workbookPath,
  userEmail,
  title,
  width = '100%',
  height = '600px',
  options = {},
  jwtOptions = {},
  className = ''
}: SigmaEmbedProps) {
  const [embedURL, setEmbedURL] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRetrying, setIsRetrying] = useState(false);

  const generateEmbedURL = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Guard clause to prevent requests with invalid parameters
      if (!workbookPath || !userEmail) {
        console.error('Invalid parameters:', { workbookPath, userEmail });
        setError('Invalid parameters');
        return;
      }

      const requestBody = {
        workbookPath,
        userEmail,
        options: {
          ...options,
          jwtOptions
        }
      };

      console.log('Making embed request with body:', requestBody);
      console.log('Request timestamp:', new Date().toISOString());

      const response = await fetch('http://localhost:3001/api/v1/sigma/embed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      const data: EmbedResponse = await response.json();
      console.log('Response data:', data);

      // Debug: Check if response is successful but data.success is false
      if (response.ok && !data.success) {
        console.error('Backend returned 200 but data.success is false:', data);
      }

      if (data.success && data.embedURL) {
        console.log('Generated embed URL:', data.embedURL);
        setEmbedURL(data.embedURL);
      } else {
        throw new Error(data.error || 'Failed to generate embed URL');
      }
    } catch (err) {
      console.error('Error generating embed URL:', err);
      setError(err instanceof Error ? err.message : 'Failed to load embed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = async () => {
    setIsRetrying(true);
    await generateEmbedURL();
    setIsRetrying(false);
  };

  useEffect(() => {
    generateEmbedURL();
  }, [workbookPath, userEmail, options, jwtOptions]);

  if (isLoading || isRetrying) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 ${className}`} 
           style={{ height: typeof height === 'number' ? `${height}px` : height }}>
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500 mx-auto mb-2" />
          <p className="text-sm text-gray-600">
            {isRetrying ? 'Retrying...' : 'Generating secure embed...'}
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 ${className}`} 
           style={{ height: typeof height === 'number' ? `${height}px` : height }}>
        <div className="text-center space-y-4 p-8">
          <AlertCircle className="h-12 w-12 text-red-400 mx-auto" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Embed Error</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={handleRetry}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!embedURL) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 ${className}`} 
           style={{ height: typeof height === 'number' ? `${height}px` : height }}>
        <div className="text-center">
          <AlertCircle className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600">No embed URL available</p>
        </div>
      </div>
    );
  }

  return (
    <SimpleIframe
      src={embedURL}
      title={title || `Sigma Workbook: ${workbookPath}`}
      width={width}
      height={height}
      className={className}
    />
  );
}
