# Sigma Playground - Sigma Integration & Embedding Guide

## Executive Summary
This document provides comprehensive guidance for integrating Sigma workbooks into the Sigma Playground platform. It covers embed URL validation, iframe security, responsive embedding, performance optimization, and fallback strategies for when embeds fail.

---

## Table of Contents
1. [Sigma API Research](#sigma-api-research)
2. [Embed URL Validation](#embed-url-validation)
3. [Iframe Security & Sandboxing](#iframe-security--sandboxing)
4. [Responsive Embedding Strategies](#responsive-embedding-strategies)
5. [Performance Optimization](#performance-optimization)
6. [Error Handling & Fallbacks](#error-handling--fallbacks)
7. [Testing Procedures](#testing-procedures)
8. [Security Considerations](#security-considerations)
9. [Monitoring & Analytics](#monitoring--analytics)
10. [Troubleshooting Guide](#troubleshooting-guide)

---

## Sigma API Research

### Embed URL Patterns

```typescript
// Sigma Embed URL Patterns
export const SIGMA_EMBED_PATTERNS = {
  // Standard embed URLs
  standard: /^https:\/\/.*sigma.*\/(embed|public|viz)\/[a-zA-Z0-9-_]+/,
  
  // With parameters
  withParams: /^https:\/\/.*sigma.*\/(embed|public|viz)\/[a-zA-Z0-9-_]+\?.*/,
  
  // Different domains
  domains: [
    'app.sigma.com',
    'sigma.example.com',
    'sigma.io',
    '*.sigma.com'
  ],
  
  // Supported protocols
  protocols: ['https:'],
  
  // Required parameters
  requiredParams: ['workbookId'],
  
  // Optional parameters
  optionalParams: ['theme', 'locale', 'toolbar', 'fullscreen']
};

// Embed URL Validation Service
@Injectable()
export class SigmaEmbedValidationService {
  constructor(private httpService: HttpService) {}

  async validateEmbedUrl(url: string): Promise<EmbedValidationResult> {
    try {
      // Parse URL
      const parsedUrl = new URL(url);
      
      // Validate protocol
      if (!SIGMA_EMBED_PATTERNS.protocols.includes(parsedUrl.protocol)) {
        return {
          isValid: false,
          error: 'Only HTTPS URLs are supported',
          code: 'INVALID_PROTOCOL'
        };
      }

      // Validate domain
      const isValidDomain = SIGMA_EMBED_PATTERNS.domains.some(domain => {
        if (domain.startsWith('*.')) {
          const baseDomain = domain.substring(2);
          return parsedUrl.hostname.endsWith(baseDomain);
        }
        return parsedUrl.hostname === domain;
      });

      if (!isValidDomain) {
        return {
          isValid: false,
          error: 'Invalid Sigma domain',
          code: 'INVALID_DOMAIN'
        };
      }

      // Validate path pattern
      const pathMatch = parsedUrl.pathname.match(SIGMA_EMBED_PATTERNS.standard);
      if (!pathMatch) {
        return {
          isValid: false,
          error: 'Invalid embed URL pattern',
          code: 'INVALID_PATTERN'
        };
      }

      // Test embed accessibility
      const accessibilityTest = await this.testEmbedAccessibility(url);
      if (!accessibilityTest.accessible) {
        return {
          isValid: false,
          error: accessibilityTest.error,
          code: 'INACCESSIBLE_EMBED'
        };
      }

      return {
        isValid: true,
        workbookId: this.extractWorkbookId(url),
        embedType: this.determineEmbedType(url),
        metadata: await this.extractEmbedMetadata(url)
      };

    } catch (error) {
      return {
        isValid: false,
        error: 'Invalid URL format',
        code: 'INVALID_URL'
      };
    }
  }

  private async testEmbedAccessibility(url: string): Promise<AccessibilityTestResult> {
    try {
      const response = await this.httpService.head(url).toPromise();
      
      return {
        accessible: response.status === 200,
        statusCode: response.status,
        contentType: response.headers['content-type'],
        error: response.status !== 200 ? `HTTP ${response.status}` : null
      };
    } catch (error) {
      return {
        accessible: false,
        error: error.message,
        statusCode: null,
        contentType: null
      };
    }
  }

  private extractWorkbookId(url: string): string {
    const match = url.match(/\/(embed|public|viz)\/([a-zA-Z0-9-_]+)/);
    return match ? match[2] : null;
  }

  private determineEmbedType(url: string): EmbedType {
    if (url.includes('/embed/')) return 'embed';
    if (url.includes('/public/')) return 'public';
    if (url.includes('/viz/')) return 'viz';
    return 'unknown';
  }

  private async extractEmbedMetadata(url: string): Promise<EmbedMetadata> {
    // Extract metadata from URL parameters
    const parsedUrl = new URL(url);
    const params = parsedUrl.searchParams;
    
    return {
      theme: params.get('theme') || 'default',
      locale: params.get('locale') || 'en',
      toolbar: params.get('toolbar') !== 'false',
      fullscreen: params.get('fullscreen') === 'true',
      width: params.get('width') || '100%',
      height: params.get('height') || '600px'
    };
  }
}
```

### Sigma API Integration

```typescript
// Sigma API Service
@Injectable()
export class SigmaApiService {
  constructor(private httpService: HttpService) {}

  async getWorkbookMetadata(workbookId: string): Promise<WorkbookMetadata> {
    try {
      // Attempt to fetch metadata from Sigma API
      const response = await this.httpService.get(`/api/workbooks/${workbookId}/metadata`).toPromise();
      
      return {
        title: response.data.title,
        description: response.data.description,
        author: response.data.author,
        created_at: response.data.created_at,
        updated_at: response.data.updated_at,
        thumbnail_url: response.data.thumbnail_url,
        tags: response.data.tags || []
      };
    } catch (error) {
      // Fallback to URL-based extraction
      return this.extractMetadataFromUrl(workbookId);
    }
  }

  async generateEmbedUrl(workbookId: string, options: EmbedOptions = {}): Promise<string> {
    const baseUrl = process.env.SIGMA_EMBED_BASE_URL || 'https://app.sigma.com';
    const embedPath = options.type === 'public' ? 'public' : 'embed';
    
    const url = new URL(`/${embedPath}/${workbookId}`, baseUrl);
    
    // Add options as query parameters
    Object.entries(options).forEach(([key, value]) => {
      if (value !== undefined && key !== 'type') {
        url.searchParams.set(key, value.toString());
      }
    });

    return url.toString();
  }

  private extractMetadataFromUrl(workbookId: string): WorkbookMetadata {
    // Basic metadata extraction when API is not available
    return {
      title: `Workbook ${workbookId}`,
      description: 'Sigma workbook',
      author: 'Unknown',
      created_at: new Date(),
      updated_at: new Date(),
      thumbnail_url: null,
      tags: []
    };
  }
}
```

---

## Embed URL Validation

### Comprehensive Validation

```typescript
// Embed URL Validator
export class EmbedUrlValidator {
  private static readonly VALIDATION_RULES = {
    protocol: /^https:$/,
    domain: /^.*\.sigma\.(com|io)$/,
    path: /^\/(embed|public|viz)\/[a-zA-Z0-9-_]+/,
    maxLength: 1000,
    allowedParams: ['theme', 'locale', 'toolbar', 'fullscreen', 'width', 'height']
  };

  static validate(url: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Basic URL validation
    try {
      const parsedUrl = new URL(url);
      
      // Protocol validation
      if (!this.VALIDATION_RULES.protocol.test(parsedUrl.protocol)) {
        errors.push('Only HTTPS URLs are allowed');
      }

      // Domain validation
      if (!this.VALIDATION_RULES.domain.test(parsedUrl.hostname)) {
        errors.push('Invalid Sigma domain');
      }

      // Path validation
      if (!this.VALIDATION_RULES.path.test(parsedUrl.pathname)) {
        errors.push('Invalid embed path format');
      }

      // Length validation
      if (url.length > this.VALIDATION_RULES.maxLength) {
        errors.push('URL exceeds maximum length');
      }

      // Parameter validation
      const invalidParams = this.validateParameters(parsedUrl.searchParams);
      if (invalidParams.length > 0) {
        warnings.push(`Unknown parameters: ${invalidParams.join(', ')}`);
      }

      // Security validation
      const securityIssues = this.validateSecurity(parsedUrl);
      if (securityIssues.length > 0) {
        errors.push(...securityIssues);
      }

    } catch (error) {
      errors.push('Invalid URL format');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  private static validateParameters(params: URLSearchParams): string[] {
    const invalidParams: string[] = [];
    
    for (const [key] of params) {
      if (!this.VALIDATION_RULES.allowedParams.includes(key)) {
        invalidParams.push(key);
      }
    }

    return invalidParams;
  }

  private static validateSecurity(url: URL): string[] {
    const issues: string[] = [];

    // Check for potentially dangerous parameters
    const dangerousParams = ['script', 'javascript', 'data', 'vbscript'];
    for (const [key, value] of url.searchParams) {
      if (dangerousParams.some(param => 
        key.toLowerCase().includes(param) || 
        value.toLowerCase().includes(param)
      )) {
        issues.push(`Potentially dangerous parameter: ${key}`);
      }
    }

    // Check for suspicious characters
    if (/[<>'"]/.test(url.href)) {
      issues.push('URL contains potentially dangerous characters');
    }

    return issues;
  }
}
```

### Real-time Validation

```typescript
// Real-time URL validation hook
export function useEmbedUrlValidation() {
  const [url, setUrl] = useState('');
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const [isValidating, setIsValidating] = useState(false);

  const validateUrl = useCallback(async (urlToValidate: string) => {
    if (!urlToValidate) {
      setValidation(null);
      return;
    }

    setIsValidating(true);
    
    try {
      // Client-side validation
      const clientValidation = EmbedUrlValidator.validate(urlToValidate);
      
      if (!clientValidation.isValid) {
        setValidation(clientValidation);
        setIsValidating(false);
        return;
      }

      // Server-side validation
      const serverValidation = await validateEmbedUrlOnServer(urlToValidate);
      setValidation(serverValidation);
      
    } catch (error) {
      setValidation({
        isValid: false,
        errors: ['Validation failed'],
        warnings: []
      });
    } finally {
      setIsValidating(false);
    }
  }, []);

  // Debounced validation
  const debouncedValidate = useMemo(
    () => debounce(validateUrl, 500),
    [validateUrl]
  );

  useEffect(() => {
    debouncedValidate(url);
  }, [url, debouncedValidate]);

  return {
    url,
    setUrl,
    validation,
    isValidating
  };
}
```

---

## Iframe Security & Sandboxing

### Secure Iframe Implementation

```typescript
// Secure Iframe Component
interface SecureIframeProps {
  src: string;
  title: string;
  width?: string | number;
  height?: string | number;
  allowFullscreen?: boolean;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export function SecureIframe({
  src,
  title,
  width = '100%',
  height = '600px',
  allowFullscreen = true,
  onLoad,
  onError
}: SecureIframeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback((error: ErrorEvent) => {
    setHasError(true);
    onError?.(new Error('Iframe failed to load'));
  }, [onError]);

  // Security attributes
  const securityAttributes = {
    sandbox: [
      'allow-scripts',
      'allow-same-origin',
      'allow-forms',
      'allow-popups',
      'allow-popups-to-escape-sandbox',
      allowFullscreen ? 'allow-fullscreen' : '',
      'allow-presentation'
    ].filter(Boolean).join(' '),
    
    referrerPolicy: 'strict-origin-when-cross-origin',
    
    loading: 'lazy' as const,
    
    // Content Security Policy
    'data-csp': 'frame-src https://*.sigma.com; script-src \'self\' https://*.sigma.com; style-src \'self\' \'unsafe-inline\' https://*.sigma.com;'
  };

  if (hasError) {
    return (
      <div className="flex items-center justify-center h-96 bg-muted rounded-lg">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Failed to load Sigma workbook</p>
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2"
            onClick={() => {
              setHasError(false);
              setIsLoaded(false);
            }}
          >
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-lg">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Loading workbook...</p>
          </div>
        </div>
      )}
      
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        width={width}
        height={height}
        className={`w-full rounded-lg border ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        {...securityAttributes}
      />
    </div>
  );
}
```

### Content Security Policy

```typescript
// CSP Configuration for Sigma Embeds
export const sigmaCSPConfig = {
  directives: {
    frameSrc: [
      "'self'",
      "https://*.sigma.com",
      "https://app.sigma.com",
      "https://sigma.io"
    ],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'", // Required for Sigma embeds
      "https://*.sigma.com",
      "https://cdn.sigma.com"
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'", // Required for Sigma styling
      "https://*.sigma.com",
      "https://fonts.googleapis.com"
    ],
    fontSrc: [
      "'self'",
      "https://*.sigma.com",
      "https://fonts.gstatic.com"
    ],
    imgSrc: [
      "'self'",
      "data:",
      "https:",
      "blob:"
    ],
    connectSrc: [
      "'self'",
      "https://*.sigma.com",
      "wss://*.sigma.com"
    ],
    objectSrc: ["'none'"],
    baseUri: ["'self'"],
    formAction: ["'self'"]
  }
};

// CSP Middleware
@Injectable()
export class CSPMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const cspHeader = this.buildCSPHeader();
    res.setHeader('Content-Security-Policy', cspHeader);
    next();
  }

  private buildCSPHeader(): string {
    const directives = Object.entries(sigmaCSPConfig.directives)
      .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
      .join('; ');
    
    return `${directives}; upgrade-insecure-requests;`;
  }
}
```

---

## Responsive Embedding Strategies

### Responsive Container

```typescript
// Responsive Embed Container
interface ResponsiveEmbedProps {
  embedUrl: string;
  title: string;
  aspectRatio?: number;
  minHeight?: number;
  maxHeight?: number;
}

export function ResponsiveEmbed({
  embedUrl,
  title,
  aspectRatio = 16 / 9,
  minHeight = 300,
  maxHeight = 800
}: ResponsiveEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const calculatedHeight = Math.min(
          Math.max(containerWidth / aspectRatio, minHeight),
          maxHeight
        );
        
        setDimensions({
          width: containerWidth,
          height: calculatedHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [aspectRatio, minHeight, maxHeight]);

  return (
    <div 
      ref={containerRef}
      className="w-full relative"
      style={{ height: dimensions.height }}
    >
      <SecureIframe
        src={embedUrl}
        title={title}
        width="100%"
        height={dimensions.height}
      />
    </div>
  );
}
```

### Mobile Optimization

```typescript
// Mobile-optimized embed
export function MobileOptimizedEmbed({ embedUrl, title }: { embedUrl: string; title: string }) {
  const { isMobile, isTablet } = useResponsive();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenToggle = useCallback(() => {
    setIsFullscreen(!isFullscreen);
  }, [isFullscreen]);

  if (isMobile) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Button
            variant="outline"
            size="sm"
            onClick={handleFullscreenToggle}
          >
            <Maximize2 className="h-4 w-4 mr-2" />
            {isFullscreen ? 'Exit' : 'Fullscreen'}
          </Button>
        </div>
        
        <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-background' : ''}`}>
          <SecureIframe
            src={embedUrl}
            title={title}
            width="100%"
            height={isFullscreen ? '100vh' : '300px'}
          />
        </div>
      </div>
    );
  }

  return (
    <ResponsiveEmbed
      embedUrl={embedUrl}
      title={title}
      aspectRatio={isTablet ? 4 / 3 : 16 / 9}
    />
  );
}
```

---

## Performance Optimization

### Lazy Loading Implementation

```typescript
// Lazy Loading Hook
export function useLazyEmbed(embedUrl: string, threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsVisible(true);
          setIsLoaded(true);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, isLoaded]);

  return {
    elementRef,
    isVisible,
    isLoaded
  };
}

// Lazy Loaded Embed Component
export function LazyLoadedEmbed({ embedUrl, title }: { embedUrl: string; title: string }) {
  const { elementRef, isVisible, isLoaded } = useLazyEmbed(embedUrl);

  return (
    <div ref={elementRef} className="w-full">
      {isVisible ? (
        <SecureIframe
          src={embedUrl}
          title={title}
          width="100%"
          height="600px"
        />
      ) : (
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          <div className="text-center">
            <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Click to load workbook</p>
          </div>
        </div>
      )}
    </div>
  );
}
```

### Embed Preloading

```typescript
// Embed Preloader Service
@Injectable()
export class EmbedPreloaderService {
  private preloadedEmbeds = new Set<string>();

  async preloadEmbed(embedUrl: string): Promise<void> {
    if (this.preloadedEmbeds.has(embedUrl)) {
      return;
    }

    try {
      // Create hidden iframe to preload
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = embedUrl;
      
      document.body.appendChild(iframe);
      
      // Wait for load or timeout
      await Promise.race([
        new Promise<void>((resolve) => {
          iframe.onload = () => resolve();
        }),
        new Promise<void>((resolve) => {
          setTimeout(() => resolve(), 5000); // 5 second timeout
        })
      ]);

      document.body.removeChild(iframe);
      this.preloadedEmbeds.add(embedUrl);
      
    } catch (error) {
      console.warn('Failed to preload embed:', embedUrl, error);
    }
  }

  isPreloaded(embedUrl: string): boolean {
    return this.preloadedEmbeds.has(embedUrl);
  }
}
```

---

## Error Handling & Fallbacks

### Comprehensive Error Handling

```typescript
// Embed Error Handler
export class EmbedErrorHandler {
  static handleError(error: EmbedError): ErrorHandlingResult {
    switch (error.code) {
      case 'NETWORK_ERROR':
        return {
          fallback: 'network',
          message: 'Unable to load workbook. Please check your connection.',
          retryable: true
        };
      
      case 'CORS_ERROR':
        return {
          fallback: 'proxy',
          message: 'Loading workbook through secure proxy...',
          retryable: true
        };
      
      case 'INVALID_URL':
        return {
          fallback: 'placeholder',
          message: 'Invalid workbook URL provided.',
          retryable: false
        };
      
      case 'TIMEOUT':
        return {
          fallback: 'retry',
          message: 'Workbook is taking longer than expected to load.',
          retryable: true
        };
      
      default:
        return {
          fallback: 'placeholder',
          message: 'Unable to load workbook.',
          retryable: true
        };
    }
  }
}

// Fallback Components
export function EmbedFallback({ 
  error, 
  onRetry, 
  embedUrl 
}: { 
  error: EmbedError; 
  onRetry: () => void; 
  embedUrl: string;
}) {
  const errorHandling = EmbedErrorHandler.handleError(error);

  return (
    <div className="flex items-center justify-center h-96 bg-muted rounded-lg">
      <div className="text-center space-y-4">
        <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto" />
        <div>
          <h3 className="text-lg font-semibold mb-2">Unable to Load Workbook</h3>
          <p className="text-muted-foreground mb-4">{errorHandling.message}</p>
          
          {errorHandling.retryable && (
            <div className="space-x-2">
              <Button onClick={onRetry} variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Retry
              </Button>
              <Button asChild variant="outline">
                <a 
                  href={embedUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open in New Tab
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
```

### Proxy Fallback

```typescript
// Embed Proxy Service
@Injectable()
export class EmbedProxyService {
  constructor(private httpService: HttpService) {}

  async proxyEmbed(embedUrl: string): Promise<string> {
    try {
      // Create proxy endpoint
      const proxyUrl = `/api/embed/proxy?url=${encodeURIComponent(embedUrl)}`;
      
      // Test proxy accessibility
      const response = await this.httpService.head(proxyUrl).toPromise();
      
      if (response.status === 200) {
        return proxyUrl;
      }
      
      throw new Error(`Proxy returned status ${response.status}`);
      
    } catch (error) {
      throw new Error(`Proxy failed: ${error.message}`);
    }
  }
}

// Proxy Controller
@Controller('embed')
export class EmbedProxyController {
  constructor(private embedProxyService: EmbedProxyService) {}

  @Get('proxy')
  async proxyEmbed(@Query('url') url: string, @Res() res: Response) {
    try {
      // Validate URL
      const validation = await this.validateEmbedUrl(url);
      if (!validation.isValid) {
        return res.status(400).json({ error: 'Invalid embed URL' });
      }

      // Proxy the request
      const response = await this.httpService.get(url).toPromise();
      
      res.set({
        'Content-Type': response.headers['content-type'],
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "frame-ancestors 'self'"
      });
      
      res.send(response.data);
      
    } catch (error) {
      res.status(500).json({ error: 'Failed to proxy embed' });
    }
  }
}
```

---

## Testing Procedures

### Embed Testing Suite

```typescript
// Embed Testing Suite
describe('Sigma Embed Integration', () => {
  let app: INestApplication;
  let embedValidationService: SigmaEmbedValidationService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    embedValidationService = moduleFixture.get<SigmaEmbedValidationService>(SigmaEmbedValidationService);
    
    await app.init();
  });

  describe('Embed URL Validation', () => {
    it('should validate correct Sigma embed URLs', async () => {
      const validUrls = [
        'https://app.sigma.com/embed/workbook123',
        'https://sigma.example.com/public/abc123',
        'https://sigma.io/viz/xyz789?theme=dark'
      ];

      for (const url of validUrls) {
        const result = await embedValidationService.validateEmbedUrl(url);
        expect(result.isValid).toBe(true);
      }
    });

    it('should reject invalid URLs', async () => {
      const invalidUrls = [
        'http://app.sigma.com/embed/workbook123', // HTTP not HTTPS
        'https://malicious.com/embed/workbook123', // Wrong domain
        'https://app.sigma.com/invalid/workbook123', // Wrong path
        'javascript:alert("xss")', // JavaScript URL
        'data:text/html,<script>alert("xss")</script>' // Data URL
      ];

      for (const url of invalidUrls) {
        const result = await embedValidationService.validateEmbedUrl(url);
        expect(result.isValid).toBe(false);
      }
    });
  });

  describe('Iframe Security', () => {
    it('should apply correct sandbox attributes', () => {
      render(<SecureIframe src="https://app.sigma.com/embed/test" title="Test" />);
      
      const iframe = screen.getByTitle('Test');
      expect(iframe).toHaveAttribute('sandbox');
      expect(iframe.getAttribute('sandbox')).toContain('allow-scripts');
      expect(iframe.getAttribute('sandbox')).toContain('allow-same-origin');
    });

    it('should handle iframe load errors gracefully', () => {
      const onError = jest.fn();
      render(
        <SecureIframe 
          src="https://invalid-url.com/embed/test" 
          title="Test"
          onError={onError}
        />
      );

      // Simulate iframe error
      const iframe = screen.getByTitle('Test');
      fireEvent.error(iframe);

      expect(onError).toHaveBeenCalled();
    });
  });

  describe('Responsive Behavior', () => {
    it('should adjust dimensions on window resize', () => {
      render(<ResponsiveEmbed embedUrl="https://app.sigma.com/embed/test" title="Test" />);
      
      const container = screen.getByRole('img', { hidden: true }); // iframe has role="img"
      
      // Simulate window resize
      act(() => {
        Object.defineProperty(window, 'innerWidth', { value: 800 });
        window.dispatchEvent(new Event('resize'));
      });

      // Check if dimensions updated
      expect(container).toHaveStyle({ width: '100%' });
    });
  });
});
```

### Load Testing

```typescript
// Embed Load Testing
describe('Embed Performance', () => {
  it('should load multiple embeds without performance degradation', async () => {
    const embedUrls = Array(10).fill(null).map((_, i) => 
      `https://app.sigma.com/embed/workbook${i}`
    );

    const startTime = performance.now();
    
    const promises = embedUrls.map(url => 
      embedValidationService.validateEmbedUrl(url)
    );
    
    await Promise.all(promises);
    
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    // Should complete within reasonable time
    expect(duration).toBeLessThan(5000); // 5 seconds
  });

  it('should handle concurrent embed loads', async () => {
    const embedUrls = Array(5).fill(null).map((_, i) => 
      `https://app.sigma.com/embed/workbook${i}`
    );

    const results = await Promise.allSettled(
      embedUrls.map(url => embedValidationService.validateEmbedUrl(url))
    );

    const successful = results.filter(result => result.status === 'fulfilled');
    expect(successful.length).toBe(embedUrls.length);
  });
});
```

---

## Security Considerations

### XSS Prevention

```typescript
// XSS Prevention for Embeds
export class EmbedXSSPrevention {
  static sanitizeEmbedUrl(url: string): string {
    // Remove potentially dangerous characters
    const sanitized = url
      .replace(/[<>'"]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/data:/gi, '')
      .replace(/vbscript:/gi, '');
    
    return sanitized;
  }

  static validateEmbedContent(content: string): boolean {
    // Check for script tags
    if (/<script/i.test(content)) {
      return false;
    }
    
    // Check for event handlers
    if (/on\w+\s*=/i.test(content)) {
      return false;
    }
    
    // Check for javascript: URLs
    if (/javascript:/i.test(content)) {
      return false;
    }
    
    return true;
  }
}
```

### CSRF Protection

```typescript
// CSRF Protection for Embed Actions
@Injectable()
export class EmbedCSRFProtection {
  constructor(private csrfService: CSRFProtectionService) {}

  async protectEmbedAction(userId: string, action: string): Promise<string> {
    const token = await this.csrfService.generateCSRFToken(userId);
    
    // Store action with token
    await this.redis.setex(
      `embed_action:${token}`,
      300, // 5 minutes
      JSON.stringify({ userId, action, timestamp: Date.now() })
    );
    
    return token;
  }

  async validateEmbedAction(token: string, userId: string): Promise<boolean> {
    const stored = await this.redis.get(`embed_action:${token}`);
    
    if (!stored) {
      return false;
    }
    
    const { userId: storedUserId, timestamp } = JSON.parse(stored);
    
    // Check user match and token age
    if (storedUserId !== userId || Date.now() - timestamp > 300000) {
      return false;
    }
    
    return true;
  }
}
```

---

## Monitoring & Analytics

### Embed Performance Monitoring

```typescript
// Embed Analytics Service
@Injectable()
export class EmbedAnalyticsService {
  constructor(private analytics: AnalyticsService) {}

  trackEmbedLoad(workbookId: string, loadTime: number, success: boolean) {
    this.analytics.track('embed_load', {
      workbookId,
      loadTime,
      success,
      timestamp: new Date().toISOString()
    });
  }

  trackEmbedError(workbookId: string, error: EmbedError) {
    this.analytics.track('embed_error', {
      workbookId,
      errorCode: error.code,
      errorMessage: error.message,
      timestamp: new Date().toISOString()
    });
  }

  trackEmbedInteraction(workbookId: string, interaction: string) {
    this.analytics.track('embed_interaction', {
      workbookId,
      interaction,
      timestamp: new Date().toISOString()
    });
  }
}

// Performance Monitoring Hook
export function useEmbedPerformance(workbookId: string) {
  const analytics = useAnalytics();
  const [loadStartTime, setLoadStartTime] = useState<number | null>(null);

  const startLoadTimer = useCallback(() => {
    setLoadStartTime(performance.now());
  }, []);

  const endLoadTimer = useCallback((success: boolean) => {
    if (loadStartTime) {
      const loadTime = performance.now() - loadStartTime;
      analytics.trackEmbedLoad(workbookId, loadTime, success);
      setLoadStartTime(null);
    }
  }, [loadStartTime, workbookId, analytics]);

  return { startLoadTimer, endLoadTimer };
}
```

---

## Troubleshooting Guide

### Common Issues & Solutions

```typescript
// Troubleshooting Service
export class EmbedTroubleshootingService {
  static diagnoseEmbedIssue(embedUrl: string, error: any): TroubleshootingResult {
    const issues: string[] = [];
    const solutions: string[] = [];

    // Check URL format
    if (!embedUrl.startsWith('https://')) {
      issues.push('URL does not use HTTPS');
      solutions.push('Ensure the embed URL uses HTTPS protocol');
    }

    // Check domain
    if (!embedUrl.includes('sigma')) {
      issues.push('URL does not appear to be from Sigma');
      solutions.push('Verify the URL is from a valid Sigma domain');
    }

    // Check for common patterns
    if (!/\/embed\/|\/public\/|\/viz\//.test(embedUrl)) {
      issues.push('URL does not match expected Sigma embed pattern');
      solutions.push('Ensure the URL follows the pattern: .../embed/workbookId or .../public/workbookId');
    }

    // Check for CORS issues
    if (error?.message?.includes('CORS')) {
      issues.push('CORS policy blocking the embed');
      solutions.push('Try using the proxy endpoint or contact Sigma support');
    }

    // Check for network issues
    if (error?.message?.includes('network') || error?.code === 'NETWORK_ERROR') {
      issues.push('Network connectivity issue');
      solutions.push('Check your internet connection and try again');
    }

    return {
      issues,
      solutions,
      severity: issues.length > 2 ? 'high' : issues.length > 0 ? 'medium' : 'low'
    };
  }
}
```

---

## References & Resources

- [Sigma Documentation](https://docs.sigma.com/)
- [Iframe Security Best Practices](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

## Version Control

- **Version:** 1.0.0
- **Last Updated:** 2024-01-01
- **Next Review:** 2024-02-01
- **Maintainer:** Integration Team
