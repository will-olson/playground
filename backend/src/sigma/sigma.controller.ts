import { Controller, Post, Body, Get, Query, BadRequestException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { SigmaJWTService, JWTGenerationOptions } from './sigma-jwt.service';
import { EmbedURLService, EmbedURLOptions } from './embed-url.service';
import { CreateEmbedDto, TestEmbedDto } from './dto/create-embed.dto';

@ApiTags('Sigma Embedding')
@Controller('sigma')
export class SigmaController {
  constructor(
    private readonly jwtService: SigmaJWTService,
    private readonly embedURLService: EmbedURLService
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
    const clientId = process.env.SIGMA_CLIENT_ID;
    const orgSlug = process.env.SIGMA_ORG_SLUG;
    const baseUrl = process.env.SIGMA_BASE_URL || 'https://app.sigmacomputing.com';

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
}
