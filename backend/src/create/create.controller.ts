import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateService } from './create.service';

@Controller('create')
@UseGuards(JwtAuthGuard)
export class CreateController {
  constructor(private readonly createService: CreateService) {}

  @Get('templates')
  async getTemplates(@Request() req) {
    const userId = req.user.id;
    return await this.createService.getTemplates(userId);
  }

  @Post('workbook')
  async createWorkbook(@Request() req, @Body() body: any) {
    const userId = req.user.id;
    return await this.createService.createWorkbook(userId, body);
  }

  @Get('export-schedules')
  async getExportSchedules(@Request() req) {
    const userId = req.user.id;
    return await this.createService.getExportSchedules(userId);
  }

  @Post('export-schedule')
  async createExportSchedule(@Request() req, @Body() body: any) {
    const userId = req.user.id;
    return await this.createService.createExportSchedule(userId, body);
  }

  @Post('workbook/copy')
  async copyWorkbook(@Request() req, @Body() body: { sourceWorkbookId: string; newName: string }) {
    const userId = req.user.id;
    return await this.createService.copyWorkbook(userId, body.sourceWorkbookId, body.newName);
  }

  @Post('workbook/from-template')
  async createFromTemplate(@Request() req, @Body() body: { templateId: string; name: string; userEmail: string }) {
    const userId = req.user.id;
    return await this.createService.createFromTemplate(userId, body);
  }
}
