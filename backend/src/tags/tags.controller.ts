import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TagsService } from './tags.service';

@ApiTags('tags')
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all active tags' })
  @ApiResponse({ status: 200, description: 'Tags retrieved successfully' })
  async findAll() {
    return this.tagsService.findAll();
  }
}

