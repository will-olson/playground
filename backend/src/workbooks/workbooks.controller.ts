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
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add workbook to favorites' })
  @ApiParam({ name: 'id', description: 'Workbook ID' })
  @ApiResponse({ status: 201, description: 'Workbook added to favorites' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Workbook not found' })
  async addToFavorites(@Request() req: any, @Param('id') workbookId: string) {
    await this.workbooksService.addToFavorites(req.user.id, workbookId);
    return { message: 'Workbook added to favorites' };
  }

  @Delete(':id/favorite')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Remove workbook from favorites' })
  @ApiParam({ name: 'id', description: 'Workbook ID' })
  @ApiResponse({ status: 200, description: 'Workbook removed from favorites' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Favorite not found' })
  async removeFromFavorites(@Request() req: any, @Param('id') workbookId: string) {
    await this.workbooksService.removeFromFavorites(req.user.id, workbookId);
    return { message: 'Workbook removed from favorites' };
  }
}

