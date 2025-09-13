import { Controller, Get, Put, Post, Delete, Param, Body, Query, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiQuery } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':username')
  @ApiOperation({ summary: 'Get user profile by username' })
  @ApiParam({ name: 'username', description: 'Username' })
  @ApiResponse({ status: 200, description: 'User profile retrieved successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async getUserProfile(@Param('username') username: string) {
    const user = await this.usersService.findByUsername(username);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  @Put('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update user profile' })
  @ApiResponse({ status: 200, description: 'Profile updated successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async updateProfile(@Request() req: any, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateProfile(req.user.id, updateUserDto);
  }

  @Post(':id/follow')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Follow a user' })
  @ApiParam({ name: 'id', description: 'User ID to follow' })
  @ApiResponse({ status: 201, description: 'Successfully followed user' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 403, description: 'Cannot follow yourself or already following' })
  async followUser(@Request() req: any, @Param('id') userId: string) {
    await this.usersService.followUser(req.user.id, userId);
    return { message: 'Successfully followed user' };
  }

  @Delete(':id/follow')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Unfollow a user' })
  @ApiParam({ name: 'id', description: 'User ID to unfollow' })
  @ApiResponse({ status: 200, description: 'Successfully unfollowed user' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Follow relationship not found' })
  async unfollowUser(@Request() req: any, @Param('id') userId: string) {
    await this.usersService.unfollowUser(req.user.id, userId);
    return { message: 'Successfully unfollowed user' };
  }

  @Get(':id/followers')
  @ApiOperation({ summary: 'Get user followers' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiQuery({ name: 'page', required: false, description: 'Page number' })
  @ApiQuery({ name: 'limit', required: false, description: 'Items per page' })
  @ApiResponse({ status: 200, description: 'Followers retrieved successfully' })
  async getFollowers(
    @Param('id') userId: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.usersService.getFollowers(userId, page, limit);
  }

  @Get(':id/following')
  @ApiOperation({ summary: 'Get users that this user follows' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiQuery({ name: 'page', required: false, description: 'Page number' })
  @ApiQuery({ name: 'limit', required: false, description: 'Items per page' })
  @ApiResponse({ status: 200, description: 'Following retrieved successfully' })
  async getFollowing(
    @Param('id') userId: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.usersService.getFollowing(userId, page, limit);
  }
}

