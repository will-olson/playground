import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AnalyticsService } from './analytics.service';

@Controller('api/v1/analytics')
@UseGuards(JwtAuthGuard)
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('dashboard')
  async getDashboardAnalytics(@Request() req) {
    const userId = req.user.id;
    return await this.analyticsService.getDashboardAnalytics(userId);
  }

  @Get('workbook/:workbookId')
  async getWorkbookAnalytics(@Request() req, @Body('workbookId') workbookId: string) {
    const userId = req.user.id;
    return await this.analyticsService.getWorkbookAnalytics(userId, workbookId);
  }

  @Post('track-view')
  async trackWorkbookView(@Request() req, @Body() body: { workbookId: string; userId?: string }) {
    const userId = req.user.id;
    return await this.analyticsService.trackWorkbookView(userId, body.workbookId, body.userId);
  }

  @Post('track-favorite')
  async trackWorkbookFavorite(@Request() req, @Body() body: { workbookId: string; action: 'add' | 'remove' }) {
    const userId = req.user.id;
    return await this.analyticsService.trackWorkbookFavorite(userId, body.workbookId, body.action);
  }

  @Post('track-share')
  async trackWorkbookShare(@Request() req, @Body() body: { workbookId: string; platform: string }) {
    const userId = req.user.id;
    return await this.analyticsService.trackWorkbookShare(userId, body.workbookId, body.platform);
  }
}