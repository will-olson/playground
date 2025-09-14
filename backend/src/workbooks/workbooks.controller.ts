import { Controller, Get, Post, Delete, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { WorkbooksService } from './workbooks.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('workbooks')
@Controller('workbooks')
export class WorkbooksController {
  constructor(private readonly workbooksService: WorkbooksService) {}

  @Get()
  @ApiOperation({ summary: 'Get all public workbooks' })
  @ApiResponse({ status: 200, description: 'Workbooks retrieved successfully' })
  async findAll() {
    return this.workbooksService.findAll();
  }

  @Post(':id/favorite')
  @ApiOperation({ summary: 'Add workbook to favorites (test mode - no auth required)' })
  @ApiParam({ name: 'id', description: 'Workbook ID' })
  @ApiResponse({ status: 201, description: 'Workbook added to favorites' })
  @ApiResponse({ status: 404, description: 'Workbook not found' })
  async addToFavorites(@Param('id') workbookId: string) {
    // Use the first test user for testing - hardcoded for simplicity
    const userId = 'edd83f3d-77ee-4eac-8be2-84b7e6b16bda'; // John Doe's ID
    
    await this.workbooksService.addToFavorites(userId, workbookId);
    return { message: 'Workbook added to favorites' };
  }

  @Delete(':id/favorite')
  @ApiOperation({ summary: 'Remove workbook from favorites (test mode - no auth required)' })
  @ApiParam({ name: 'id', description: 'Workbook ID' })
  @ApiResponse({ status: 200, description: 'Workbook removed from favorites' })
  @ApiResponse({ status: 404, description: 'Favorite not found' })
  async removeFromFavorites(@Param('id') workbookId: string) {
    // Use the first test user for testing - hardcoded for simplicity
    const userId = 'edd83f3d-77ee-4eac-8be2-84b7e6b16bda'; // John Doe's ID
    
    await this.workbooksService.removeFromFavorites(userId, workbookId);
    return { message: 'Workbook removed from favorites' };
  }

  @Get('favorites')
  @ApiOperation({ summary: 'Get user favorites (test mode - no auth required)' })
  @ApiResponse({ status: 200, description: 'User favorites retrieved successfully' })
  async getUserFavorites() {
    // Use the first test user for testing - hardcoded for simplicity
    const userId = 'edd83f3d-77ee-4eac-8be2-84b7e6b16bda'; // John Doe's ID
    
    return this.workbooksService.getUserFavorites(userId);
  }

  @Get(':id/favorite-status')
  @ApiOperation({ summary: 'Check if workbook is favorited by user (test mode - no auth required)' })
  @ApiParam({ name: 'id', description: 'Workbook ID' })
  @ApiResponse({ status: 200, description: 'Favorite status retrieved successfully' })
  async getFavoriteStatus(@Param('id') workbookId: string) {
    // Use the first test user for testing - hardcoded for simplicity
    const userId = 'edd83f3d-77ee-4eac-8be2-84b7e6b16bda'; // John Doe's ID
    
    const isFavorited = await this.workbooksService.isFavorited(userId, workbookId);
    return { isFavorited };
  }

}

