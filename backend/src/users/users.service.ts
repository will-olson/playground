import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<any | null> {
    try {
      return await this.prisma.user.findUnique({
        where: { id },
        include: {
          workbooks: {
            where: { is_publicly_visible: true },
            orderBy: { published_at: 'desc' },
            take: 10,
          },
        },
      });
    } catch (error) {
      console.error('Error in findById:', error);
      throw error;
    }
  }

  async findByUsername(username: string): Promise<any | null> {
    return this.prisma.user.findUnique({
      where: { username },
      include: {
        workbooks: {
          where: { is_publicly_visible: true },
          orderBy: { published_at: 'desc' },
        },
        _count: {
          select: {
            workbooks: true,
            followers: true,
            following: true,
          },
        },
      },
    });
  }

  async updateProfile(userId: string, updateUserDto: UpdateUserDto): Promise<any> {
    return this.prisma.user.update({
      where: { id: userId },
      data: updateUserDto,
    });
  }

  async followUser(followerId: string, followingId: string): Promise<void> {
    if (followerId === followingId) {
      throw new ForbiddenException('Cannot follow yourself');
    }

    // Check if user exists
    const user = await this.prisma.user.findUnique({
      where: { id: followingId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Check if already following
    const existingFollow = await this.prisma.follow.findUnique({
      where: {
        follower_id_following_id: {
          follower_id: followerId,
          following_id: followingId,
        },
      },
    });

    if (existingFollow) {
      throw new ForbiddenException('Already following this user');
    }

    await this.prisma.follow.create({
      data: {
        follower_id: followerId,
        following_id: followingId,
      },
    });
  }

  async unfollowUser(followerId: string, followingId: string): Promise<void> {
    const follow = await this.prisma.follow.findUnique({
      where: {
        follower_id_following_id: {
          follower_id: followerId,
          following_id: followingId,
        },
      },
    });

    if (!follow) {
      throw new NotFoundException('Follow relationship not found');
    }

    await this.prisma.follow.delete({
      where: {
        follower_id_following_id: {
          follower_id: followerId,
          following_id: followingId,
        },
      },
    });
  }

  async getFollowers(userId: string, page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;

    const [followers, total] = await Promise.all([
      this.prisma.follow.findMany({
        where: { following_id: userId },
        include: {
          follower: {
            select: {
              id: true,
              username: true,
              full_name: true,
              profile_image_url: true,
              bio: true,
            },
          },
        },
        skip,
        take: limit,
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.follow.count({
        where: { following_id: userId },
      }),
    ]);

    return {
      data: followers.map(f => f.follower),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNext: page * limit < total,
        hasPrev: page > 1,
      },
    };
  }

  async getFollowing(userId: string, page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;

    const [following, total] = await Promise.all([
      this.prisma.follow.findMany({
        where: { follower_id: userId },
        include: {
          following: {
            select: {
              id: true,
              username: true,
              full_name: true,
              profile_image_url: true,
              bio: true,
            },
          },
        },
        skip,
        take: limit,
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.follow.count({
        where: { follower_id: userId },
      }),
    ]);

    return {
      data: following.map(f => f.following),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNext: page * limit < total,
        hasPrev: page > 1,
      },
    };
  }

  async getUserStats(userId: string) {
    const [workbooksCount, favoritesCount, followingCount, followersCount, hiddenCount] = await Promise.all([
      this.prisma.workbook.count({
        where: { 
          author_id: userId,
          is_publicly_visible: true 
        },
      }),
      this.prisma.favorite.count({
        where: { user_id: userId },
      }),
      this.prisma.follow.count({
        where: { follower_id: userId },
      }),
      this.prisma.follow.count({
        where: { following_id: userId },
      }),
      this.prisma.workbook.count({
        where: { 
          author_id: userId,
          is_publicly_visible: false 
        },
      }),
    ]);

    return {
      workbooksCount,
      favoritesCount,
      followingCount,
      followersCount,
      hiddenCount,
    };
  }

  async getUserWorkbooks(userId: string, page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;

    const [workbooks, total] = await Promise.all([
      this.prisma.workbook.findMany({
        where: { 
          author_id: userId,
          is_publicly_visible: true 
        },
        include: {
          author: {
            select: {
              id: true,
              full_name: true,
              profile_image_url: true,
            },
          },
          tags: {
            include: {
              tag: {
                select: {
                  name: true,
                },
              },
            },
          },
          _count: {
            select: {
                  favorited_by: true,
              views: true,
            },
          },
        },
        skip,
        take: limit,
        orderBy: { updated_at: 'desc' },
      }),
      this.prisma.workbook.count({
        where: { 
          author_id: userId,
          is_publicly_visible: true 
        },
      }),
    ]);

    return workbooks;
  }

  async getUserFavorites(userId: string, page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;

    const [favorites, total] = await Promise.all([
      this.prisma.favorite.findMany({
        where: { user_id: userId },
        include: {
          workbook: {
            include: {
              author: {
                select: {
                  id: true,
                  full_name: true,
                  profile_image_url: true,
                },
              },
              tags: {
                include: {
                  tag: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
              _count: {
                select: {
                  favorited_by: true,
                  views: true,
                },
              },
            },
          },
        },
        skip,
        take: limit,
        orderBy: { created_at: 'desc' },
      }),
      this.prisma.favorite.count({
        where: { user_id: userId },
      }),
    ]);

    return favorites.map(f => f.workbook);
  }

  async getFollowingWorkbooks(userId: string, page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;

    // Get users that this user follows
    const followingUsers = await this.prisma.follow.findMany({
      where: { follower_id: userId },
      select: { following_id: true },
    });

    const followingUserIds = followingUsers.map(f => f.following_id);

    if (followingUserIds.length === 0) {
      return [];
    }

    const [workbooks, total] = await Promise.all([
      this.prisma.workbook.findMany({
        where: { 
          author_id: { in: followingUserIds },
          is_publicly_visible: true 
        },
        include: {
          author: {
            select: {
              id: true,
              full_name: true,
              profile_image_url: true,
            },
          },
          tags: {
            include: {
              tag: {
                select: {
                  name: true,
                },
              },
            },
          },
          _count: {
            select: {
                  favorited_by: true,
              views: true,
            },
          },
        },
        skip,
        take: limit,
        orderBy: { updated_at: 'desc' },
      }),
      this.prisma.workbook.count({
        where: { 
          author_id: { in: followingUserIds },
          is_publicly_visible: true 
        },
      }),
    ]);

    return workbooks;
  }

  async getFollowersWorkbooks(userId: string, page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;

    // Get users who follow this user
    const followers = await this.prisma.follow.findMany({
      where: { following_id: userId },
      select: { follower_id: true },
    });

    const followerIds = followers.map(f => f.follower_id);

    if (followerIds.length === 0) {
      return [];
    }

    const [workbooks, total] = await Promise.all([
      this.prisma.workbook.findMany({
        where: { 
          author_id: { in: followerIds },
          is_publicly_visible: true 
        },
        include: {
          author: {
            select: {
              id: true,
              full_name: true,
              profile_image_url: true,
            },
          },
          tags: {
            include: {
              tag: {
                select: {
                  name: true,
                },
              },
            },
          },
          _count: {
            select: {
                  favorited_by: true,
              views: true,
            },
          },
        },
        skip,
        take: limit,
        orderBy: { updated_at: 'desc' },
      }),
      this.prisma.workbook.count({
        where: { 
          author_id: { in: followerIds },
          is_publicly_visible: true 
        },
      }),
    ]);

    return workbooks;
  }

  async getHiddenWorkbooks(userId: string, page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;

    const [workbooks, total] = await Promise.all([
      this.prisma.workbook.findMany({
        where: { 
          author_id: userId,
          is_publicly_visible: false 
        },
        include: {
          author: {
            select: {
              id: true,
              full_name: true,
              profile_image_url: true,
            },
          },
          tags: {
            include: {
              tag: {
                select: {
                  name: true,
                },
              },
            },
          },
          _count: {
            select: {
                  favorited_by: true,
              views: true,
            },
          },
        },
        skip,
        take: limit,
        orderBy: { updated_at: 'desc' },
      }),
      this.prisma.workbook.count({
        where: { 
          author_id: userId,
          is_publicly_visible: false 
        },
      }),
    ]);

    return workbooks;
  }
}
