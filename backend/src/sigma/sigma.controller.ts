import { Controller, Post, Body, Get, Query, BadRequestException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { SigmaJWTService, JWTGenerationOptions } from './sigma-jwt.service';
import { EmbedURLService, EmbedURLOptions } from './embed-url.service';
import { CreateEmbedDto, TestEmbedDto } from './dto/create-embed.dto';

@ApiTags('Sigma Embedding')
@Controller('sigma')
export class SigmaController {
  constructor(
    private readonly jwtService: SigmaJWTService,
    private readonly embedURLService: EmbedURLService,
    private readonly configService: ConfigService
  ) {}

  @Post('embed')
  @ApiOperation({ summary: 'Create a secure Sigma embed URL' })
  @ApiBody({ type: CreateEmbedDto })
  @ApiResponse({ status: 200, description: 'Embed URL created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid request parameters' })
  async createEmbed(@Body() request: any) {
    try {
      const embedURL = await this.embedURLService.buildEmbedURL(
        request.workbookPath,
        request.userEmail,
        request.options
      );

      // Validate the generated URL
      const validation = this.embedURLService.validateEmbedURL(embedURL);
      if (!validation.isValid) {
        throw new BadRequestException(`Invalid embed URL: ${validation.errors.join(', ')}`);
      }

      return {
        success: true,
        embedURL,
        validation: {
          isValid: true,
          errors: []
        }
      };
    } catch (error) {
      throw new BadRequestException(`Failed to create embed URL: ${error.message}`);
    }
  }

  @Post('test-embed')
  @ApiOperation({ summary: 'Test embed URL generation with validation' })
  @ApiBody({ type: TestEmbedDto })
  @ApiResponse({ status: 200, description: 'Test completed successfully' })
  async testEmbed(@Body() request: any) {
    try {
      // Generate JWT for testing
      const jwt = await this.jwtService.generateJWT(request.userEmail, request.jwtOptions);
      
      // Decode JWT to verify structure
      const decoded = this.jwtService.validateJWT(jwt);
      
      // Create test embed URL
      const embedURL = await this.embedURLService.buildEmbedURL(
        request.workbookPath,
        request.userEmail,
        { jwtOptions: request.jwtOptions }
      );

      // Validate the URL
      const validation = this.embedURLService.validateEmbedURL(embedURL);

      return {
        success: true,
        jwt: {
          token: jwt,
          decoded: decoded,
          isValid: true
        },
        embedURL,
        validation,
        testResults: {
          jwtGeneration: true,
          urlConstruction: true,
          urlValidation: validation.isValid
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        testResults: {
          jwtGeneration: false,
          urlConstruction: false,
          urlValidation: false
        }
      };
    }
  }

  @Get('validate-url')
  @ApiOperation({ summary: 'Validate an existing embed URL' })
  @ApiResponse({ status: 200, description: 'URL validation completed' })
  async validateURL(@Query('url') url: string) {
    if (!url) {
      throw new BadRequestException('URL parameter is required');
    }

    const validation = this.embedURLService.validateEmbedURL(url);
    
    return {
      url,
      validation
    };
  }

  @Get('health')
  @ApiOperation({ summary: 'Check Sigma integration health' })
  @ApiResponse({ status: 200, description: 'Health check completed' })
  async healthCheck() {
    const clientId = this.configService.get<string>('SIGMA_CLIENT_ID');
    const orgSlug = this.configService.get<string>('SIGMA_ORG_SLUG');
    const baseUrl = this.configService.get<string>('SIGMA_BASE_URL') || 'https://app.sigmacomputing.com';

    return {
      status: 'healthy',
      configuration: {
        clientIdConfigured: !!clientId,
        orgSlugConfigured: !!orgSlug,
        baseUrl,
        timestamp: new Date().toISOString()
      },
      services: {
        jwtService: 'available',
        embedURLService: 'available'
      }
    };
  }
<<<<<<< Updated upstream
=======

  // NEW TESTING ENDPOINTS FOR REAL INTEGRATION TESTING

  @Post('test-workbook-embed')
  @ApiOperation({ summary: 'Test workbook embedding with real Sigma credentials' })
  @ApiResponse({ status: 200, description: 'Workbook embed test completed' })
  async testWorkbookEmbed(@Body() request: any) {
    try {
      const { userEmail, workbookId, tagName, jwtOptions, urlParams } = request;

      // Generate workbook embed URL
      const embedURL = await this.embedURLService.generateWorkbookEmbed(
        userEmail,
        workbookId,
        {
          tagName,
          jwtOptions,
          urlParams
        }
      );

      return {
        success: true,
        type: 'workbook',
        workbookId,
        embedURL,
        testResults: {
          jwtGeneration: true,
          urlConstruction: true,
          urlValidation: this.embedURLService.validateEmbedURL(embedURL)
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        type: 'workbook'
      };
    }
  }

  @Post('test-page-embed')
  @ApiOperation({ summary: 'Test page embedding with real Sigma credentials' })
  @ApiResponse({ status: 200, description: 'Page embed test completed' })
  async testPageEmbed(@Body() request: any) {
    try {
      const { userEmail, workbookId, pageId, jwtOptions, urlParams } = request;

      // Generate page embed URL
      const embedURL = await this.embedURLService.generatePageEmbed(
        userEmail,
        workbookId,
        pageId,
        {
          jwtOptions,
          urlParams
        }
      );

      return {
        success: true,
        type: 'page',
        workbookId,
        pageId,
        embedURL,
        testResults: {
          jwtGeneration: true,
          urlConstruction: true,
          urlValidation: this.embedURLService.validateEmbedURL(embedURL)
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        type: 'page'
      };
    }
  }

  @Post('test-ask-sigma-embed')
  @ApiOperation({ summary: 'Test Ask Sigma embedding with real Sigma credentials' })
  @ApiResponse({ status: 200, description: 'Ask Sigma embed test completed' })
  async testAskSigmaEmbed(@Body() request: any) {
    try {
      const { userEmail, jwtOptions, urlParams } = request;

      // Generate Ask Sigma embed URL
      const embedURL = await this.embedURLService.generateAskSigmaEmbed(
        userEmail,
        {
          jwtOptions,
          urlParams
        }
      );

      return {
        success: true,
        type: 'ask',
        embedURL,
        testResults: {
          jwtGeneration: true,
          urlConstruction: true,
          urlValidation: this.embedURLService.validateEmbedURL(embedURL)
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        type: 'ask'
      };
    }
  }

  @Get('test-credentials')
  @ApiOperation({ summary: 'Test Sigma credentials configuration' })
  @ApiResponse({ status: 200, description: 'Credentials test completed' })
  async testCredentials() {
    try {
      // Test JWT generation with test user
      const testEmail = 'test@example.com';
      const jwt = await this.jwtService.generateJWT(testEmail, {
        isEmbedUser: true,
        firstName: 'Test',
        lastName: 'User',
        accountType: 'Viewer',
        teams: ['Test Team'],
        sessionLength: 3600
      });

      // Validate the JWT
      const decoded = this.jwtService.validateJWT(jwt);

      return {
        success: true,
        credentials: {
          clientId: this.configService.get<string>('SIGMA_CLIENT_ID'),
          orgSlug: this.configService.get<string>('SIGMA_ORG_SLUG'),
          baseUrl: this.configService.get<string>('SIGMA_BASE_URL')
        },
        jwt: {
          generated: true,
          valid: true,
          decoded: decoded
        },
        testResults: {
          credentialsConfigured: true,
          jwtGeneration: true,
          jwtValidation: true
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        testResults: {
          credentialsConfigured: false,
          jwtGeneration: false,
          jwtValidation: false
        }
      };
    }
  }

  @Post('generate-test-embed')
  @ApiOperation({ summary: 'Generate embed URL for immediate testing' })
  @ApiResponse({ status: 200, description: 'Test embed URL generated' })
  async generateTestEmbed(@Body() request: any) {
    try {
      const {
        userEmail = 'test@example.com',
        workbookId,
        pageId,
        elementId,
        tagName,
        jwtOptions = {},
        urlParams = {}
      } = request;

      let embedURL: string;

      if (elementId && workbookId) {
        embedURL = await this.embedURLService.generateElementEmbed(
          userEmail,
          workbookId,
          elementId,
          { jwtOptions, urlParams }
        );
      } else if (pageId && workbookId) {
        embedURL = await this.embedURLService.generatePageEmbed(
          userEmail,
          workbookId,
          pageId,
          { jwtOptions, urlParams }
        );
      } else if (workbookId) {
        embedURL = await this.embedURLService.generateWorkbookEmbed(
          userEmail,
          workbookId,
          { tagName, jwtOptions, urlParams }
        );
      } else {
        embedURL = await this.embedURLService.generateAskSigmaEmbed(
          userEmail,
          { jwtOptions, urlParams }
        );
      }

      return {
        success: true,
        embedURL,
        userEmail,
        content: {
          workbookId,
          pageId,
          elementId,
          tagName
        },
        urlParams,
        readyForTesting: true,
        instructions: {
          step1: 'Copy the embedURL from the response',
          step2: 'Open a new browser tab',
          step3: 'Paste the URL and press Enter',
          step4: 'Verify the Sigma content loads correctly',
          note: 'This URL will expire based on the session length in jwtOptions'
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        readyForTesting: false
      };
    }
  }
>>>>>>> Stashed changes
}
