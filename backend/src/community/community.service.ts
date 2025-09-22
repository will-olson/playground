import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommunityService {
  constructor(private prisma: PrismaService) {}

  async getTrendingWorkbooks(userId: string) {
    // Get public workbooks with engagement metrics
    const workbooks = await this.prisma.workbook.findMany({
      where: {
        isPublic: true,
        status: 'published'
      },
      include: {
        user: {
          select: { username: true, email: true }
        },
        _count: {
          select: {
            views: true,
            favorites: true,
            shares: true
          }
        },
        tags: true
      },
      orderBy: [
        { favorites: { _count: 'desc' } },
        { views: { _count: 'desc' } },
        { createdAt: 'desc' }
      ],
      take: 20
    });

    // Calculate trending and featured status
    const trendingWorkbooks = workbooks.map(workbook => {
      const totalEngagement = workbook._count.views + workbook._count.favorites + workbook._count.shares;
      const isTrending = totalEngagement > 100; // Threshold for trending
      const isFeatured = workbook._count.favorites > 50; // Threshold for featured

      return {
        id: workbook.id,
        name: workbook.name,
        author: workbook.user.username,
        authorEmail: workbook.user.email,
        views: workbook._count.views,
        favorites: workbook._count.favorites,
        shares: workbook._count.shares,
        createdAt: workbook.createdAt,
        tags: workbook.tags.map(tag => tag.name),
        isTrending,
        isFeatured
      };
    });

    return { workbooks: trendingWorkbooks };
  }

  async getFeaturedAuthors(userId: string) {
    // Get authors with highest engagement
    const authors = await this.prisma.user.findMany({
      where: {
        workbooks: {
          some: {
            isPublic: true
          }
        }
      },
      include: {
        _count: {
          select: {
            workbooks: {
              where: { isPublic: true }
            },
            followers: true
          }
        },
        workbooks: {
          where: { isPublic: true },
          include: {
            _count: {
              select: {
                views: true,
                favorites: true
              }
            }
          }
        }
      },
      orderBy: {
        followers: { _count: 'desc' }
      },
      take: 10
    });

    const featuredAuthors = authors.map(author => {
      const totalViews = author.workbooks.reduce((sum, wb) => sum + wb._count.views, 0);
      const isVerified = author.followers.length > 100; // Threshold for verification

      return {
        id: author.id,
        name: author.username,
        email: author.email,
        followers: author._count.followers,
        workbooks: author._count.workbooks,
        totalViews,
        isVerified
      };
    });

    return { authors: featuredAuthors };
  }

  async getCommunityChallenges(userId: string) {
    // Get active and upcoming challenges
    const challenges = await this.prisma.communityChallenge.findMany({
      where: {
        OR: [
          { status: 'active' },
          { status: 'upcoming' }
        ]
      },
      include: {
        _count: {
          select: {
            participants: true
          }
        }
      },
      orderBy: { startDate: 'asc' }
    });

    const communityChallenges = challenges.map(challenge => ({
      id: challenge.id,
      title: challenge.title,
      description: challenge.description,
      deadline: challenge.endDate,
      participants: challenge._count.participants,
      prize: challenge.prize,
      status: challenge.status as 'active' | 'upcoming' | 'completed'
    }));

    return { challenges: communityChallenges };
  }

  async followUser(userId: string, targetUserId: string) {
    // Check if already following
    const existingFollow = await this.prisma.userFollow.findUnique({
      where: {
        followerId_followingId: {
          followerId: userId,
          followingId: targetUserId
        }
      }
    });

    if (existingFollow) {
      return { success: false, message: 'Already following this user' };
    }

    // Create follow relationship
    await this.prisma.userFollow.create({
      data: {
        followerId: userId,
        followingId: targetUserId,
        followedAt: new Date()
      }
    });

    // Create activity log
    await this.prisma.activityLog.create({
      data: {
        userId,
        type: 'follow',
        targetUserId,
        metadata: { action: 'followed_user' }
      }
    });

    return { success: true };
  }

  async unfollowUser(userId: string, targetUserId: string) {
    await this.prisma.userFollow.deleteMany({
      where: {
        followerId: userId,
        followingId: targetUserId
      }
    });

    return { success: true };
  }

  async joinChallenge(userId: string, challengeId: string) {
    // Check if already participating
    const existingParticipation = await this.prisma.challengeParticipation.findUnique({
      where: {
        userId_challengeId: {
          userId,
          challengeId
        }
      }
    });

    if (existingParticipation) {
      return { success: false, message: 'Already participating in this challenge' };
    }

    // Join challenge
    await this.prisma.challengeParticipation.create({
      data: {
        userId,
        challengeId,
        joinedAt: new Date()
      }
    });

    // Create activity log
    await this.prisma.activityLog.create({
      data: {
        userId,
        type: 'challenge_join',
        challengeId,
        metadata: { action: 'joined_challenge' }
      }
    });

    return { success: true };
  }

  async searchCommunity(userId: string, query: string, type: 'workbooks' | 'authors' | 'tags') {
    switch (type) {
      case 'workbooks':
        return await this.searchWorkbooks(query);
      case 'authors':
        return await this.searchAuthors(query);
      case 'tags':
        return await this.searchTags(query);
      default:
        throw new Error('Invalid search type');
    }
  }

  private async searchWorkbooks(query: string) {
    const workbooks = await this.prisma.workbook.findMany({
      where: {
        AND: [
          { isPublic: true },
          {
            OR: [
              { name: { contains: query, mode: 'insensitive' } },
              { description: { contains: query, mode: 'insensitive' } },
              { tags: { some: { name: { contains: query, mode: 'insensitive' } } } }
            ]
          }
        ]
      },
      include: {
        user: {
          select: { username: true, email: true }
        },
        _count: {
          select: {
            views: true,
            favorites: true,
            shares: true
          }
        },
        tags: true
      },
      take: 20
    });

    return { workbooks };
  }

  private async searchAuthors(query: string) {
    const authors = await this.prisma.user.findMany({
      where: {
        OR: [
          { username: { contains: query, mode: 'insensitive' } },
          { email: { contains: query, mode: 'insensitive' } }
        ]
      },
      include: {
        _count: {
          select: {
            workbooks: {
              where: { isPublic: true }
            },
            followers: true
          }
        }
      },
      take: 10
    });

    return { authors };
  }

  private async searchTags(query: string) {
    const tags = await this.prisma.tag.findMany({
      where: {
        name: { contains: query, mode: 'insensitive' }
      },
      include: {
        _count: {
          select: {
            workbooks: true
          }
        }
      },
      orderBy: {
        workbooks: { _count: 'desc' }
      },
      take: 10
    });

    return { tags };
  }
}
