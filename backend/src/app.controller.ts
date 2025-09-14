import { Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { WorkbooksService } from './workbooks/workbooks.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService,
    private readonly workbooksService: WorkbooksService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test-users')
  getTestUsers() {
    return {
      message: 'Test users endpoint',
      users: [
        { id: 'f6afdbc8-526f-4e77-aeae-096ec9210633', name: 'John Doe' },
        { id: '24ba172f-c585-49c2-8da0-7545da625025', name: 'Jane Smith' },
      ]
    };
  }

  @Post('test-follow/:id')
  async testFollowUser(@Param('id') userId: string) {
    // Use the first test user as the follower for testing - hardcoded for simplicity
    const followerId = 'f6afdbc8-526f-4e77-aeae-096ec9210633'; // John Doe's ID
    
    await this.usersService.followUser(followerId, userId);
    return { message: 'Successfully followed user' };
  }

  @Delete('test-follow/:id')
  async testUnfollowUser(@Param('id') userId: string) {
    // Use the first test user as the follower for testing - hardcoded for simplicity
    const followerId = 'f6afdbc8-526f-4e77-aeae-096ec9210633'; // John Doe's ID
    
    await this.usersService.unfollowUser(followerId, userId);
    return { message: 'Successfully unfollowed user' };
  }

  @Post('test-favorite/:id')
  async testFavoriteWorkbook(@Param('id') workbookId: string) {
    // Use the first test user for testing - hardcoded for simplicity
    const userId = 'f6afdbc8-526f-4e77-aeae-096ec9210633'; // John Doe's ID
    
    await this.workbooksService.addToFavorites(userId, workbookId);
    return { message: 'Successfully favorited workbook' };
  }

  @Delete('test-favorite/:id')
  async testUnfavoriteWorkbook(@Param('id') workbookId: string) {
    // Use the first test user for testing - hardcoded for simplicity
    const userId = 'f6afdbc8-526f-4e77-aeae-096ec9210633'; // John Doe's ID
    
    await this.workbooksService.removeFromFavorites(userId, workbookId);
    return { message: 'Successfully unfavorited workbook' };
  }
}
