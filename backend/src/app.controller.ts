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
        { id: 'fdc99ece-6fb6-4fbe-a5e0-908309561fe4', name: 'John Doe' },
        { id: '2da2dbad-a0c5-408c-a8e6-2cf197c3a947', name: 'Jane Smith' },
        { id: '6cfe2f8d-b690-422f-aa92-bc897e814cc9', name: 'Mike Johnson' },
      ]
    };
  }

  @Post('test-follow/:id')
  async testFollowUser(@Param('id') userId: string) {
    // Use the first test user as the follower for testing - hardcoded for simplicity
    const followerId = 'fdc99ece-6fb6-4fbe-a5e0-908309561fe4'; // John Doe's ID (actual seeded ID)
    
    await this.usersService.followUser(followerId, userId);
    return { message: 'Successfully followed user' };
  }

  @Delete('test-follow/:id')
  async testUnfollowUser(@Param('id') userId: string) {
    // Use the first test user as the follower for testing - hardcoded for simplicity
    const followerId = 'fdc99ece-6fb6-4fbe-a5e0-908309561fe4'; // John Doe's ID (actual seeded ID)
    
    await this.usersService.unfollowUser(followerId, userId);
    return { message: 'Successfully unfollowed user' };
  }

  @Post('test-favorite/:id')
  async testFavoriteWorkbook(@Param('id') workbookId: string) {
    // Use the first test user for testing - hardcoded for simplicity
    const userId = 'fdc99ece-6fb6-4fbe-a5e0-908309561fe4'; // John Doe's ID (actual seeded ID)
    
    await this.workbooksService.addToFavorites(userId, workbookId);
    return { message: 'Successfully favorited workbook' };
  }

  @Delete('test-favorite/:id')
  async testUnfavoriteWorkbook(@Param('id') workbookId: string) {
    // Use the first test user for testing - hardcoded for simplicity
    const userId = 'fdc99ece-6fb6-4fbe-a5e0-908309561fe4'; // John Doe's ID (actual seeded ID)
    
    await this.workbooksService.removeFromFavorites(userId, workbookId);
    return { message: 'Successfully unfavorited workbook' };
  }
}
