# Section 14: 📸 Screenshot Generation & Thumbnail System

**Lines:** 3149-3451 (302 lines)

**Code Blocks:** 4

**Key Patterns:** 5

**Implementation Steps:** 0

---

## **14. 📸 Screenshot Generation & Thumbnail System**

### **Implementation Steps**:

**Step 1: Install html2canvas**
```bash
cd frontend
npm install html2canvas
npm install @types/html2canvas --save-dev
```

**Step 2: Create Screenshot Service**
```typescript
// frontend/src/lib/screenshot-service.ts
import html2canvas from 'html2canvas';

export interface ScreenshotOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'png' | 'jpeg';
  backgroundColor?: string;
  scale?: number;
}

export class ScreenshotService {
  static async captureElement(
    element: HTMLElement,
    options: ScreenshotOptions = {}
  ): Promise<string> {
    const {
      width = 800,
      height = 600,
      quality = 0.8,
      format = 'png',
      backgroundColor = '#ffffff',
      scale = 1,
    } = options;

    const canvas = await html2canvas(element, {
      width,
      height,
      backgroundColor,
      scale,
      useCORS: true,
      allowTaint: true,
      logging: false,
    });

    return canvas.toDataURL(`image/${format}`, quality);
  }

  static async captureWorkbook(
    workbookElement: HTMLElement,
    options: ScreenshotOptions = {}
  ): Promise<string> {
    // Wait for workbook to fully load
    await this.waitForWorkbookLoad(workbookElement);
    
    return this.captureElement(workbookElement, {
      width: 1200,
      height: 800,
      quality: 0.9,
      format: 'png',
      ...options,
    });
  }

  static async generateThumbnail(
    workbookElement: HTMLElement,
    size: 'sm' | 'md' | 'lg' = 'md'
  ): Promise<string> {
    const dimensions = {
      sm: { width: 300, height: 200 },
      md: { width: 400, height: 300 },
      lg: { width: 600, height: 400 },
    };

    return this.captureWorkbook(workbookElement, {
      ...dimensions[size],
      quality: 0.7,
      format: 'jpeg',
    });
  }

  private static async waitForWorkbookLoad(element: HTMLElement): Promise<void> {
    return new Promise((resolve) => {
      const iframe = element.querySelector('iframe');
      if (!iframe) {
        resolve();
        return;
      }

      iframe.onload = () => {
        // Additional wait for Sigma to fully render
        setTimeout(resolve, 2000);
      };
    });
  }

  static async saveScreenshot(
    dataUrl: string,
    filename: string
  ): Promise<void> {
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  static async uploadScreenshot(
    dataUrl: string,
    workbookId: string
  ): Promise<string> {
    const response = await fetch('/api/screenshots/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dataUrl,
        workbookId,
        timestamp: Date.now(),
      }),
    });

    const result = await response.json();
    return result.thumbnailUrl;
  }
}
```

**Step 3: Create Thumbnail Component**
```typescript
// frontend/src/components/workbook-thumbnail.tsx
import { useState, useRef, useEffect } from 'react';
import { ScreenshotService } from '@/lib/screenshot-service';
import { WorkbookCard, WorkbookTitle } from '@/components/styled/workbook-card';

interface WorkbookThumbnailProps {
  workbook: {
    id: string;
    title: string;
    description?: string;
    thumbnailUrl?: string;
  };
  onThumbnailGenerated?: (thumbnailUrl: string) => void;
}

export function WorkbookThumbnail({ 
  workbook, 
  onThumbnailGenerated 
}: WorkbookThumbnailProps) {
  const [thumbnailUrl, setThumbnailUrl] = useState(workbook.thumbnailUrl);
  const [isGenerating, setIsGenerating] = useState(false);
  const workbookRef = useRef<HTMLDivElement>(null);

  const generateThumbnail = async () => {
    if (!workbookRef.current) return;

    setIsGenerating(true);
    try {
      const thumbnail = await ScreenshotService.generateThumbnail(
        workbookRef.current,
        'md'
      );
      
      setThumbnailUrl(thumbnail);
      
      // Upload to server
      const uploadedUrl = await ScreenshotService.uploadScreenshot(
        thumbnail,
        workbook.id
      );
      
      onThumbnailGenerated?.(uploadedUrl);
    } catch (error) {
      console.error('Failed to generate thumbnail:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="workbook-thumbnail-container">
      <WorkbookCard ref={workbookRef}>
        <WorkbookTitle>{workbook.title}</WorkbookTitle>
        {workbook.description && (
          <p className="workbook-description">{workbook.description}</p>
        )}
        
        {thumbnailUrl ? (
          <div className="thumbnail-preview">
            <img 
              src={thumbnailUrl} 
              alt={`${workbook.title} thumbnail`}
              className="thumbnail-image"
            />
          </div>
        ) : (
          <div className="thumbnail-placeholder">
            <p>No thumbnail available</p>
            <button 
              onClick={generateThumbnail}
              disabled={isGenerating}
              className="generate-thumbnail-btn"
            >
              {isGenerating ? 'Generating...' : 'Generate Thumbnail'}
            </button>
          </div>
        )}
      </WorkbookCard>
    </div>
  );
}
```

**Step 4: Implement Social Sharing with Screenshots**
```typescript
// frontend/src/components/social-sharing.tsx
import { ScreenshotService } from '@/lib/screenshot-service';

interface SocialSharingProps {
  workbook: {
    id: string;
    title: string;
    url: string;
  };
  workbookElement: HTMLElement;
}

export function SocialSharing({ workbook, workbookElement }: SocialSharingProps) {
  const shareToTwitter = async () => {
    try {
      // Generate screenshot for social media
      const screenshot = await ScreenshotService.captureWorkbook(workbookElement, {
        width: 1200,
        height: 630, // Twitter card dimensions
        quality: 0.9,
        format: 'png',
      });

      // Upload screenshot
      const imageUrl = await ScreenshotService.uploadScreenshot(
        screenshot,
        workbook.id
      );

      // Create Twitter share URL
      const twitterUrl = new URL('https://twitter.com/intent/tweet');
      twitterUrl.searchParams.set('text', `Check out this amazing workbook: ${workbook.title}`);
      twitterUrl.searchParams.set('url', workbook.url);
      twitterUrl.searchParams.set('hashtags', 'SigmaComputing,DataViz,Analytics');

      window.open(twitterUrl.toString(), '_blank');
    } catch (error) {
      console.error('Failed to share to Twitter:', error);
    }
  };

  const shareToLinkedIn = async () => {
    try {
      const screenshot = await ScreenshotService.captureWorkbook(workbookElement, {
        width: 1200,
        height: 630,
        quality: 0.9,
        format: 'png',
      });

      const imageUrl = await ScreenshotService.uploadScreenshot(
        screenshot,
        workbook.id
      );

      const linkedInUrl = new URL('https://www.linkedin.com/sharing/share-offsite/');
      linkedInUrl.searchParams.set('url', workbook.url);

      window.open(linkedInUrl.toString(), '_blank');
    } catch (error) {
      console.error('Failed to share to LinkedIn:', error);
    }
  };

  return (
    <div className="social-sharing">
      <h3>Share this workbook</h3>
      <div className="share-buttons">
        <button onClick={shareToTwitter} className="share-btn twitter">
          Share on Twitter
        </button>
        <button onClick={shareToLinkedIn} className="share-btn linkedin">
          Share on LinkedIn
        </button>
      </div>
    </div>
  );
}
```

**Impact**: Enables automatic thumbnail generation, social media sharing with visual previews, and enhanced workbook discovery through visual content.

---
