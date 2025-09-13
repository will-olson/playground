import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('reports')
@Controller('reports')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all reports' })
  @ApiResponse({ status: 200, description: 'Reports retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async findAll() {
    return this.reportsService.findAll();
  }
}

