import { Controller, Get, Put, Post, Delete, Param, Body, Query, UseGuards, Request, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiQuery } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('test-auth-bypass')
  @ApiOperation({ summary: 'Test endpoint to verify auth bypass is working' })
  @ApiResponse({ status: 200, description: 'Test successful' })
  async testAuthBypass() {
    return { 
      message: 'SUCCESS: Auth bypass is working!', 
      timestamp: new Date().toISOString(),
      status: 'no_auth_required'
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user profile by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User profile retrieved successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async getUserProfile(@Param('id') userId: string) {
    try {
      console.log('Fetching user with ID:', userId);
      
      // Simple test first
      if (userId === 'test') {
        return { id: 'test', name: 'Test User', message: 'API is working' };
      }
      
      // Try simple user fetch first
      const user = await this.usersService.findById(userId);
      console.log('User found:', user ? 'Yes' : 'No');
      if (!user) {
        throw new NotFoundException('User not found');
      }
      
      // Return simplified user data for now
      return {
        id: user.id,
        email: user.email,
        full_name: user.full_name,
        bio: user.bio,
        title: user.title,
        organization: user.organization,
        location: user.location,
        profile_image_url: user.profile_image_url,
        created_at: user.created_at,
        updated_at: user.updated_at,
      };
    } catch (error) {
      console.error('Error in getUserProfile:', error);
      throw error;
    }
  }

  @Get(':id/stats')
  @ApiOperation({ summary: 'Get user statistics' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User stats retrieved successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async getUserStats(@Param('id') userId: string) {
    return this.usersService.getUserStats(userId);
  }

  @Get(':id/workbooks')
  @ApiOperation({ summary: 'Get user workbooks' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiQuery({ name: 'page', required: false, description: 'Page number' })
  @ApiQuery({ name: 'limit', required: false, description: 'Items per page' })
  @ApiResponse({ status: 200, description: 'User workbooks retrieved successfully' })
  async getUserWorkbooks(
    @Param('id') userId: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.usersService.getUserWorkbooks(userId, page, limit);
  }

  @Get(':id/favorites')
  @ApiOperation({ summary: 'Get user favorite workbooks' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiQuery({ name: 'page', required: false, description: 'Page number' })
  @ApiQuery({ name: 'limit', required: false, description: 'Items per page' })
  @ApiResponse({ status: 200, description: 'User favorites retrieved successfully' })
  async getUserFavorites(
    @Param('id') userId: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.usersService.getUserFavorites(userId, page, limit);
  }

  @Get(':id/following/workbooks')
  @ApiOperation({ summary: 'Get workbooks from users this user follows' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiQuery({ name: 'page', required: false, description: 'Page number' })
  @ApiQuery({ name: 'limit', required: false, description: 'Items per page' })
  @ApiResponse({ status: 200, description: 'Following workbooks retrieved successfully' })
  async getFollowingWorkbooks(
    @Param('id') userId: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.usersService.getFollowingWorkbooks(userId, page, limit);
  }

  @Get(':id/followers/workbooks')
  @ApiOperation({ summary: 'Get workbooks from users who follow this user' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiQuery({ name: 'page', required: false, description: 'Page number' })
  @ApiQuery({ name: 'limit', required: false, description: 'Items per page' })
  @ApiResponse({ status: 200, description: 'Followers workbooks retrieved successfully' })
  async getFollowersWorkbooks(
    @Param('id') userId: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.usersService.getFollowersWorkbooks(userId, page, limit);
  }

  @Get(':id/hidden')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user hidden workbooks' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiQuery({ name: 'page', required: false, description: 'Page number' })
  @ApiQuery({ name: 'limit', required: false, description: 'Items per page' })
  @ApiResponse({ status: 200, description: 'Hidden workbooks retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden - can only view own hidden workbooks' })
  async getHiddenWorkbooks(
    @Request() req: any,
    @Param('id') userId: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    if (req.user.id !== userId) {
      throw new Error('Forbidden - can only view own hidden workbooks');
    }
    return this.usersService.getHiddenWorkbooks(userId, page, limit);
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
  @ApiOperation({ summary: 'Follow a user (test mode - no auth required)' })
  @ApiParam({ name: 'id', description: 'User ID to follow' })
  @ApiResponse({ status: 201, description: 'Successfully followed user' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 403, description: 'Cannot follow yourself or already following' })
  async followUser(@Param('id') userId: string) {
    // TEST: Return immediately to verify endpoint is working
    return { message: 'TEST: Follow endpoint working without auth', userId, timestamp: new Date().toISOString() };
  }

  @Delete(':id/follow')
  @ApiOperation({ summary: 'Unfollow a user (test mode - no auth required)' })
  @ApiParam({ name: 'id', description: 'User ID to unfollow' })
  @ApiResponse({ status: 200, description: 'Successfully unfollowed user' })
  @ApiResponse({ status: 404, description: 'Follow relationship not found' })
  async unfollowUser(@Param('id') userId: string) {
    // TEST: Return immediately to verify endpoint is working
    return { message: 'TEST: Unfollow endpoint working without auth', userId, timestamp: new Date().toISOString() };
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

  @Post('test-follow/:id')
  @ApiOperation({ summary: 'Test follow a user (no auth required)' })
  @ApiParam({ name: 'id', description: 'User ID to follow' })
  @ApiResponse({ status: 201, description: 'Successfully followed user' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 403, description: 'Cannot follow yourself or already following' })
  async testFollowUser(@Param('id') userId: string) {
    // Use the first test user as the follower for testing
    const testUsers = await this.usersService.findTestUsers();
    const followerId = testUsers[0].id;
    
    await this.usersService.followUser(followerId, userId);
    return { message: 'Successfully followed user' };
  }

  @Delete('test-follow/:id')
  @ApiOperation({ summary: 'Test unfollow a user (no auth required)' })
  @ApiParam({ name: 'id', description: 'User ID to unfollow' })
  @ApiResponse({ status: 200, description: 'Successfully unfollowed user' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async testUnfollowUser(@Param('id') userId: string) {
    // Use the first test user as the follower for testing
    const testUsers = await this.usersService.findTestUsers();
    const followerId = testUsers[0].id;
    
    await this.usersService.unfollowUser(followerId, userId);
    return { message: 'Successfully unfollowed user' };
  }
}

