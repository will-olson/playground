import { Controller, Get, Post, Delete, Param, UseGuards, Request, Body, NotFoundException, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { WorkbooksService } from './workbooks.service';
import { SigmaApiService } from '../sigma/sigma-api.service';
import { EmbedURLService } from '../sigma/embed-url.service';
import { SigmaBookmarksService } from '../sigma/sigma-bookmarks.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('workbooks')
@Controller('workbooks')
export class WorkbooksController {
  constructor(
    private readonly workbooksService: WorkbooksService,
    private readonly sigmaApiService: SigmaApiService,
    private readonly embedURLService: EmbedURLService,
    private readonly sigmaBookmarksService: SigmaBookmarksService
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all public workbooks' })
  @ApiResponse({ status: 200, description: 'Workbooks retrieved successfully' })
  async findAll(@Query('featured') featured?: string, @Query('limit') limit?: string) {
    const limitNum = limit ? parseInt(limit, 10) : undefined;
    return this.workbooksService.findAll(featured === 'true', limitNum);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific workbook by ID' })
  @ApiParam({ name: 'id', description: 'Workbook ID' })
  @ApiResponse({ status: 200, description: 'Workbook retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Workbook not found' })
  async findOne(@Param('id') id: string) {
    const workbook = await this.workbooksService.findOne(id);
    if (!workbook) {
      throw new NotFoundException('Workbook not found');
    }
    return workbook;
  }

  @Post(':id/favorite')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Toggle workbook favorite status' })
  @ApiParam({ name: 'id', description: 'Workbook ID' })
  @ApiResponse({ status: 200, description: 'Favorite status toggled' })
  @ApiResponse({ status: 404, description: 'Workbook not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async toggleFavorite(@Param('id') workbookId: string, @Request() req: any) {
    const userId = req.user.id;
    const result = await this.workbooksService.toggleFavorite(userId, workbookId);
    return result;
  }

  @Get('sigma')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user workbooks from Sigma' })
  @ApiResponse({ status: 200, description: 'Sigma workbooks retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getSigmaWorkbooks(@Request() req: any) {
    const user = req.user;
    return this.sigmaApiService.getUserWorkbooks(user.email);
  }

  @Post('import/:workbookId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Import workbook from Sigma to Playground' })
  @ApiParam({ name: 'workbookId', description: 'Sigma workbook ID' })
  @ApiResponse({ status: 201, description: 'Workbook imported successfully' })
  @ApiResponse({ status: 404, description: 'Workbook not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async importWorkbook(@Param('workbookId') workbookId: string, @Request() req: any) {
    const user = req.user;
    
    // Get user's Sigma workbooks to verify access
    const sigmaWorkbooks = await this.sigmaApiService.getUserWorkbooks(user.email);
    const workbook = sigmaWorkbooks.find(w => w.id === workbookId);
    
    if (!workbook) {
      throw new NotFoundException('Workbook not found or not accessible');
    }
    
    // Generate embed URL
    const embedUrl = await this.embedURLService.generateWorkbookEmbed(user.email, workbookId);
    
    // Create workbook in local database
    return this.workbooksService.create({
      title: workbook.name,
      description: workbook.description || '',
      sigma_embed_url: embedUrl,
      author_id: user.id,
      sigma_workbook_id: workbookId
    });
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new workbook post' })
  @ApiResponse({ status: 201, description: 'Workbook created successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async createWorkbook(@Body() createWorkbookDto: any, @Request() req: any) {
    const user = req.user;
    const embedUrl = await this.embedURLService.generateWorkbookEmbed(
      user.email,
      createWorkbookDto.sigma_workbook_id
    );
    
    return this.workbooksService.create({
      title: createWorkbookDto.title,
      description: createWorkbookDto.description,
      sigma_embed_url: embedUrl,
      author_id: user.id,
      sigma_workbook_id: createWorkbookDto.sigma_workbook_id
    });
  }

  @Post(':workbookId/bookmarks')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a bookmark for a workbook' })
  @ApiParam({ name: 'workbookId', description: 'Sigma workbook ID' })
  @ApiResponse({ status: 201, description: 'Bookmark created successfully' })
  @ApiResponse({ status: 404, description: 'Workbook not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async createBookmark(
    @Param('workbookId') workbookId: string,
    @Body() createBookmarkDto: { name: string; exploreKey: string },
    @Request() req: any
  ) {
    const user = req.user;
    return this.sigmaBookmarksService.createBookmark(
      user.email,
      workbookId,
      createBookmarkDto.exploreKey,
      createBookmarkDto.name
    );
  }

  @Get(':workbookId/bookmarks')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'List bookmarks for a workbook' })
  @ApiParam({ name: 'workbookId', description: 'Sigma workbook ID' })
  @ApiResponse({ status: 200, description: 'Bookmarks retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async listBookmarks(@Param('workbookId') workbookId: string) {
    return this.sigmaBookmarksService.listBookmarksForWorkbook(workbookId);
  }

  @Delete(':workbookId/bookmarks/:bookmarkId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a bookmark' })
  @ApiParam({ name: 'workbookId', description: 'Sigma workbook ID' })
  @ApiParam({ name: 'bookmarkId', description: 'Bookmark ID' })
  @ApiResponse({ status: 200, description: 'Bookmark deleted successfully' })
  @ApiResponse({ status: 404, description: 'Bookmark not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async deleteBookmark(
    @Param('workbookId') workbookId: string,
    @Param('bookmarkId') bookmarkId: string
  ) {
    await this.sigmaBookmarksService.deleteBookmark(workbookId, bookmarkId);
    return { message: 'Bookmark deleted successfully' };
  }

}

