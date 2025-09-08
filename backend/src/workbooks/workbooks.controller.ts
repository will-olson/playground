import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { WorkbooksService } from './workbooks.service';

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
}
