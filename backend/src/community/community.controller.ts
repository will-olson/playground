import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CommunityService } from './community.service';

@Controller('community')
@UseGuards(JwtAuthGuard)
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @Get('workbooks')
  async getTrendingWorkbooks(@Request() req) {
    const userId = req.user.id;
    return await this.communityService.getTrendingWorkbooks(userId);
  }

  @Get('authors')
  async getFeaturedAuthors(@Request() req) {
    const userId = req.user.id;
    return await this.communityService.getFeaturedAuthors(userId);
  }

  @Get('challenges')
  async getCommunityChallenges(@Request() req) {
    const userId = req.user.id;
    return await this.communityService.getCommunityChallenges(userId);
  }

  @Post('follow')
  async followUser(@Request() req, @Body() body: { targetUserId: string }) {
    const userId = req.user.id;
    return await this.communityService.followUser(userId, body.targetUserId);
  }

  @Post('unfollow')
  async unfollowUser(@Request() req, @Body() body: { targetUserId: string }) {
    const userId = req.user.id;
    return await this.communityService.unfollowUser(userId, body.targetUserId);
  }

  @Post('join-challenge')
  async joinChallenge(@Request() req, @Body() body: { challengeId: string }) {
    const userId = req.user.id;
    return await this.communityService.joinChallenge(userId, body.challengeId);
  }

  @Get('search')
  async searchCommunity(@Request() req, @Body() body: { query: string; type: 'workbooks' | 'authors' | 'tags' }) {
    const userId = req.user.id;
    return await this.communityService.searchCommunity(userId, body.query, body.type);
  }
}
