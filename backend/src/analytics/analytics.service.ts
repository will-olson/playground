import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  async getDashboardAnalytics(userId: string) {
    // Get user's workbooks
    const userWorkbooks = await this.prisma.workbook.findMany({
      where: { userId },
      include: {
        _count: {
          select: {
            views: true,
            favorites: true,
            shares: true
          }
        }
      }
    });

    // Calculate total metrics
    const totalViews = userWorkbooks.reduce((sum, wb) => sum + wb._count.views, 0);
    const totalFavorites = userWorkbooks.reduce((sum, wb) => sum + wb._count.favorites, 0);
    const totalShares = userWorkbooks.reduce((sum, wb) => sum + wb._count.shares, 0);

    // Get user's followers/following
    const followers = await this.prisma.userFollow.count({
      where: { followingId: userId }
    });

    const following = await this.prisma.userFollow.count({
      where: { followerId: userId }
    });

    // Get recent activity
    const recentActivity = await this.prisma.activityLog.findMany({
      where: {
        OR: [
          { userId },
          { targetUserId: userId }
        ]
      },
      include: {
        user: {
          select: { username: true, email: true }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: 10
    });

    // Format workbook stats
    const workbookStats = userWorkbooks.map(wb => ({
      id: wb.id,
      name: wb.name,
      views: wb._count.views,
      favorites: wb._count.favorites,
      shares: wb._count.shares,
      lastViewed: wb.updatedAt,
      status: wb.status as 'active' | 'draft' | 'archived'
    }));

    return {
      analytics: {
        totalViews,
        totalFavorites,
        totalShares,
        totalFollowers: followers,
        totalFollowing: following,
        recentActivity: recentActivity.map(activity => ({
          id: activity.id,
          type: activity.type,
          workbookName: activity.workbook?.name || 'Unknown',
          timestamp: activity.createdAt,
          user: activity.user?.email
        }))
      },
      workbooks: workbookStats
    };
  }

  async getWorkbookAnalytics(userId: string, workbookId: string) {
    const workbook = await this.prisma.workbook.findFirst({
      where: {
        id: workbookId,
        OR: [
          { userId },
          { isPublic: true }
        ]
      },
      include: {
        _count: {
          select: {
            views: true,
            favorites: true,
            shares: true
          }
        },
        views: {
          include: {
            user: {
              select: { username: true, email: true }
            }
          },
          orderBy: { createdAt: 'desc' },
          take: 10
        }
      }
    });

    if (!workbook) {
      throw new Error('Workbook not found or access denied');
    }

    return {
      workbook: {
        id: workbook.id,
        name: workbook.name,
        views: workbook._count.views,
        favorites: workbook._count.favorites,
        shares: workbook._count.shares,
        recentViews: workbook.views.map(view => ({
          id: view.id,
          user: view.user?.email,
          timestamp: view.createdAt
        }))
      }
    };
  }

  async trackWorkbookView(userId: string, workbookId: string, viewerId?: string) {
    const actualViewerId = viewerId || userId;
    
    // Create view record
    await this.prisma.workbookView.create({
      data: {
        workbookId,
        userId: actualViewerId,
        viewedAt: new Date()
      }
    });

    // Create activity log
    await this.prisma.activityLog.create({
      data: {
        userId: actualViewerId,
        type: 'view',
        workbookId,
        metadata: { action: 'viewed_workbook' }
      }
    });

    return { success: true };
  }

  async trackWorkbookFavorite(userId: string, workbookId: string, action: 'add' | 'remove') {
    if (action === 'add') {
      await this.prisma.workbookFavorite.create({
        data: {
          workbookId,
          userId,
          favoritedAt: new Date()
        }
      });
    } else {
      await this.prisma.workbookFavorite.deleteMany({
        where: {
          workbookId,
          userId
        }
      });
    }

    // Create activity log
    await this.prisma.activityLog.create({
      data: {
        userId,
        type: action === 'add' ? 'favorite' : 'unfavorite',
        workbookId,
        metadata: { action: `workbook_${action}ed` }
      }
    });

    return { success: true };
  }

  async trackWorkbookShare(userId: string, workbookId: string, platform: string) {
    // Create share record
    await this.prisma.workbookShare.create({
      data: {
        workbookId,
        userId,
        platform,
        sharedAt: new Date()
      }
    });

    // Create activity log
    await this.prisma.activityLog.create({
      data: {
        userId,
        type: 'share',
        workbookId,
        metadata: { action: 'shared_workbook', platform }
      }
    });

    return { success: true };
  }
}