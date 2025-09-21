'use client';

import { useState } from 'react';

interface SimpleIframeProps {
  src: string;
  title: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function SimpleIframe({
  src,
  title,
  width = '100%',
  height = '600px',
  className = ''
}: SimpleIframeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    console.log('Simple iframe loaded:', src);
    setIsLoaded(true);
  };

  const handleError = (e: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
    console.error('Simple iframe error:', e, 'URL:', src);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 ${className}`} 
           style={{ height: typeof height === 'number' ? `${height}px` : height }}>
        <div className="text-center space-y-4 p-8">
          <div className="text-red-500 text-4xl">⚠️</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Iframe Error</h3>
            <p className="text-gray-600 mb-4">Failed to load: {src}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
            <p className="text-sm text-gray-600">Loading...</p>
          </div>
        </div>
      )}
      
      <iframe
        src={src}
        title={title}
        width={width}
        height={height}
        className={`w-full rounded-lg border border-gray-200 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}
