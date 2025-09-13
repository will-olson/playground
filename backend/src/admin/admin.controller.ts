import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('admin')
@Controller('admin')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('stats')
  @ApiOperation({ summary: 'Get admin statistics' })
  @ApiResponse({ status: 200, description: 'Statistics retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getStats() {
    return this.adminService.getStats();
  }
}

