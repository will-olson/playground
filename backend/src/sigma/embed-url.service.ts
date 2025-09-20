import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SigmaJWTService, JWTGenerationOptions } from './sigma-jwt.service';

export interface EmbedURLOptions {
  jwtOptions?: JWTGenerationOptions;
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
}

@Injectable()
export class EmbedURLService {
  constructor(
    private configService: ConfigService,
    private jwtService: SigmaJWTService
  ) {}

  async buildEmbedURL(
    workbookPath: string,
    userEmail: string,
    options: EmbedURLOptions = {}
  ): Promise<string> {
    const baseUrl = this.configService.get<string>('SIGMA_BASE_URL', 'https://app.sigmacomputing.com');
    const orgSlug = this.configService.get<string>('SIGMA_ORG_SLUG');
    
    if (!orgSlug) {
      throw new Error('SIGMA_ORG_SLUG environment variable is required');
    }
    
    // Generate JWT
    const jwt = await this.jwtService.generateJWT(userEmail, options.jwtOptions);
    
    // Build base URL
    const embedPath = this.buildEmbedPath(workbookPath, orgSlug);
    const url = new URL(embedPath, baseUrl);
    
    // Add JWT and embed parameters (don't URL encode the colons)
    const jwtParam = `:jwt=${jwt}`;
    const embedParam = `:embed=true`;
    
    // Manually construct the query string to avoid URL encoding the colons
    const existingParams = url.search;
    const separator = existingParams ? '&' : '?';
    url.href = url.href + separator + jwtParam + '&' + embedParam;
    
    // Add optional parameters
    this.addOptionalParameters(url, options);
    
    return url.toString();
  }

  private buildEmbedPath(workbookPath: string, orgSlug: string): string {
    // Convert API path to embed path
    // API: /workbook/workbookName/workbookId
    // Embed: /workbook/workbookName-workbookId
    
    const pathParts = workbookPath.split('/');
    if (pathParts[0] === 'workbook' && pathParts.length >= 3) {
      const workbookName = pathParts[1];
      const workbookId = pathParts[2];
      let embedPath = `/${orgSlug}/workbook/${workbookName}-${workbookId}`;
      
      // Add additional path segments (page, element, tag)
      if (pathParts.length > 3) {
        embedPath += '/' + pathParts.slice(3).join('/');
      }
      
      return embedPath;
    }
    
    throw new Error('Invalid workbook path format. Expected: workbook/workbookName/workbookId');
  }

  private addOptionalParameters(url: URL, options: EmbedURLOptions): void {
    const {
      hideBookmarks,
      hideFolderNavigation,
      hideMenu,
      hideTooltip,
      language,
      languageVariant,
      menuPosition,
      responsiveHeight,
      theme,
      controlValues
    } = options;

    const params: string[] = [];
    
    if (hideBookmarks) params.push('hide_bookmarks=true');
    if (hideFolderNavigation) params.push('hide_folder_navigation=true');
    if (hideMenu) params.push('hide_menu=true');
    if (hideTooltip) params.push('hide_tooltip=true');
    if (language) params.push(`lng=${language}`);
    if (languageVariant) params.push(`lng_variant=${languageVariant}`);
    if (menuPosition) params.push(`menu_position=${menuPosition}`);
    if (responsiveHeight) params.push('responsive_height=true');
    if (theme) params.push(`theme=${theme}`);
    
    // Add control values
    if (controlValues) {
      for (const [controlId, value] of Object.entries(controlValues)) {
        params.push(`${controlId}=${value}`);
      }
    }
    
    // Append parameters to URL
    if (params.length > 0) {
      const separator = url.href.includes('?') ? '&' : '?';
      url.href = url.href + separator + params.join('&');
    }
  }

  // Workbook embed generation
  async generateWorkbookEmbed(
    userEmail: string,
    workbookId: string,
    options: {
      tagName?: string;
      jwtOptions?: JWTGenerationOptions;
      urlParams?: Record<string, string>;
    } = {}
  ): Promise<string> {
    const workbookPath = `workbook/workbook/${workbookId}`;
    const embedOptions: EmbedURLOptions = {
      jwtOptions: options.jwtOptions,
      ...options.urlParams
    };
    
    return this.buildEmbedURL(workbookPath, userEmail, embedOptions);
  }

  // Page embed generation
  async generatePageEmbed(
    userEmail: string,
    workbookId: string,
    pageId: string,
    options: {
      tagName?: string;
      jwtOptions?: JWTGenerationOptions;
      urlParams?: Record<string, string>;
    } = {}
  ): Promise<string> {
    const workbookPath = `workbook/workbook-${workbookId}/page/${pageId}`;
    const embedOptions: EmbedURLOptions = {
      jwtOptions: options.jwtOptions,
      ...options.urlParams
    };
    
    return this.buildEmbedURL(workbookPath, userEmail, embedOptions);
  }

  // Element embed generation
  async generateElementEmbed(
    userEmail: string,
    workbookId: string,
    pageId: string,
    elementId: string,
    options: {
      tagName?: string;
      jwtOptions?: JWTGenerationOptions;
      urlParams?: Record<string, string>;
    } = {}
  ): Promise<string> {
    const workbookPath = `workbook/workbook-${workbookId}/page/${pageId}/element/${elementId}`;
    const embedOptions: EmbedURLOptions = {
      jwtOptions: options.jwtOptions,
      ...options.urlParams
    };
    
    return this.buildEmbedURL(workbookPath, userEmail, embedOptions);
  }

  // Ask Sigma embed generation
  async generateAskSigmaEmbed(
    userEmail: string,
    options: {
      tagName?: string;
      jwtOptions?: JWTGenerationOptions;
      urlParams?: Record<string, string>;
    } = {}
  ): Promise<string> {
    const workbookPath = 'ask-sigma';
    const embedOptions: EmbedURLOptions = {
      jwtOptions: options.jwtOptions,
      ...options.urlParams
    };
    
    return this.buildEmbedURL(workbookPath, userEmail, embedOptions);
  }

  validateEmbedURL(url: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    try {
      const parsedUrl = new URL(url);
      
      // Check protocol
      if (parsedUrl.protocol !== 'https:') {
        errors.push('Only HTTPS URLs are supported');
      }
      
      // Check domain
      if (!parsedUrl.hostname.includes('sigmacomputing.com')) {
        errors.push('Invalid Sigma domain');
      }
      
      // Check for required parameters
      if (!parsedUrl.searchParams.has(':jwt')) {
        errors.push('Missing required :jwt parameter');
      }
      
      if (!parsedUrl.searchParams.has(':embed')) {
        errors.push('Missing required :embed parameter');
      }
      
      // Check path format
      const pathMatch = parsedUrl.pathname.match(/^\/[^\/]+\/workbook\/[^\/]+-[^\/]+/);
      if (!pathMatch) {
        errors.push('Invalid embed path format');
      }
      
    } catch (error) {
      errors.push('Invalid URL format');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
}
