'use client';

import { useState, useCallback, useRef } from 'react';
import { AlertCircle, Loader2, RefreshCw, ExternalLink } from 'lucide-react';

interface SecureIframeProps {
  src: string;
  title: string;
  width?: string | number;
  height?: string | number;
  allowFullscreen?: boolean;
  onLoad?: () => void;
  onError?: (error: Error) => void;
  className?: string;
}

export function SecureIframe({
  src,
  title,
  width = '100%',
  height = '600px',
  allowFullscreen = true,
  onLoad,
  onError,
  className = ''
}: SecureIframeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleLoad = useCallback(() => {
    console.log('Iframe loaded successfully:', src);
    setIsLoaded(true);
    setHasError(false);
    setIsRetrying(false);
    onLoad?.();
  }, [onLoad, src]);

  const handleError = useCallback((error: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
    console.error('Iframe failed to load:', error, 'URL:', src);
    setHasError(true);
    setIsRetrying(false);
    onError?.(new Error('Iframe failed to load'));
  }, [onError, src]);

  const handleRetry = useCallback(() => {
    setIsRetrying(true);
    setHasError(false);
    setIsLoaded(false);
    
    // Force reload by updating the src
    if (iframeRef.current) {
      const currentSrc = iframeRef.current.src;
      iframeRef.current.src = '';
      setTimeout(() => {
        if (iframeRef.current) {
          iframeRef.current.src = currentSrc;
        }
      }, 100);
    }
  }, []);

  // Security attributes for Sigma embeds
  const securityAttributes = {
    // Temporarily remove sandbox to test if that's causing the issue
    // sandbox: [
    //   'allow-scripts',
    //   'allow-same-origin',
    //   'allow-forms',
    //   'allow-popups',
    //   'allow-popups-to-escape-sandbox',
    //   allowFullscreen ? 'allow-fullscreen' : '',
    //   'allow-presentation'
    // ].filter(Boolean).join(' '),
    
    referrerPolicy: 'strict-origin-when-cross-origin' as const,
    loading: 'lazy' as const,
    
    // Content Security Policy for Sigma domains
    'data-csp': 'frame-src https://*.sigmacomputing.com; script-src \'self\' https://*.sigmacomputing.com; style-src \'self\' \'unsafe-inline\' https://*.sigmacomputing.com;'
  };

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 ${className}`} 
           style={{ height: typeof height === 'number' ? `${height}px` : height }}>
        <div className="text-center space-y-4 p-8">
          <AlertCircle className="h-12 w-12 text-gray-400 mx-auto" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Unable to Load Sigma Workbook</h3>
            <p className="text-gray-600 mb-4">The workbook could not be loaded. This might be due to network issues or access restrictions.</p>
            
            <div className="space-x-2">
              <button
                onClick={handleRetry}
                disabled={isRetrying}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isRetrying ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <RefreshCw className="h-4 w-4 mr-2" />
                )}
                {isRetrying ? 'Retrying...' : 'Retry'}
              </button>
              
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Open in New Tab
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && !isRetrying && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Loading Sigma workbook...</p>
          </div>
        </div>
      )}
      
      {isRetrying && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Retrying...</p>
          </div>
        </div>
      )}
      
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        width={width}
        height={height}
        className={`w-full rounded-lg border border-gray-200 ${
          isLoaded && !isRetrying ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        {...securityAttributes}
      />
    </div>
  );
}
