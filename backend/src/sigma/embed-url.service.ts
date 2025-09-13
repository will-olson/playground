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
    
    // Add JWT and embed parameters
    url.searchParams.set(':jwt', jwt);
    url.searchParams.set(':embed', 'true');
    
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

    if (hideBookmarks) url.searchParams.set('hide_bookmarks', 'true');
    if (hideFolderNavigation) url.searchParams.set('hide_folder_navigation', 'true');
    if (hideMenu) url.searchParams.set('hide_menu', 'true');
    if (hideTooltip) url.searchParams.set('hide_tooltip', 'true');
    if (language) url.searchParams.set('lng', language);
    if (languageVariant) url.searchParams.set('lng_variant', languageVariant);
    if (menuPosition) url.searchParams.set('menu_position', menuPosition);
    if (responsiveHeight) url.searchParams.set('responsive_height', 'true');
    if (theme) url.searchParams.set('theme', theme);
    
    // Add control values
    if (controlValues) {
      for (const [controlId, value] of Object.entries(controlValues)) {
        url.searchParams.set(controlId, value);
      }
    }
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
