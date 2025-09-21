import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WorkbooksService {
  constructor(private prisma: PrismaService) {}

  // Placeholder implementation
  async findAll() {
    return this.prisma.workbook.findMany({
      where: { is_publicly_visible: true },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            full_name: true,
            profile_image_url: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        favorited_by: true,
        _count: {
          select: {
            favorited_by: true,
          },
        },
      },
      orderBy: { published_at: 'desc' },
    });
  }

  async findOne(id: string) {
    const workbook = await this.prisma.workbook.findUnique({
      where: { 
        id,
        is_publicly_visible: true 
      },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            full_name: true,
            profile_image_url: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        favorited_by: true,
        _count: {
          select: {
            favorited_by: true,
          },
        },
      },
    });

    if (!workbook) {
      return null;
    }

    // Transform the data to match frontend expectations
    return {
      ...workbook,
      favorite_count: workbook._count.favorited_by,
      view_count: workbook.view_count || 0,
      is_favorited: workbook.favorited_by && workbook.favorited_by.length > 0,
    };
  }

  async create(createWorkbookDto: any) {
    return this.prisma.workbook.create({
      data: {
        title: createWorkbookDto.title,
        description: createWorkbookDto.description,
        sigma_embed_url: createWorkbookDto.sigma_embed_url,
        sigma_workbook_id: createWorkbookDto.sigma_workbook_id,
        author_id: createWorkbookDto.author_id,
      },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            full_name: true,
            profile_image_url: true,
          },
        },
      },
    });
  }

  async addToFavorites(userId: string, workbookId: string): Promise<void> {
    // Check if workbook exists
    const workbook = await this.prisma.workbook.findUnique({
      where: { id: workbookId },
    });

    if (!workbook) {
      throw new NotFoundException('Workbook not found');
    }

    // Check if already favorited
    const existingFavorite = await this.prisma.favorite.findUnique({
      where: {
        user_id_workbook_id: {
          user_id: userId,
          workbook_id: workbookId,
        },
      },
    });

    if (existingFavorite) {
      throw new ForbiddenException('Workbook already in favorites');
    }

    await this.prisma.favorite.create({
      data: {
        user_id: userId,
        workbook_id: workbookId,
      },
    });
  }

  async removeFromFavorites(userId: string, workbookId: string): Promise<void> {
    const favorite = await this.prisma.favorite.findUnique({
      where: {
        user_id_workbook_id: {
          user_id: userId,
          workbook_id: workbookId,
        },
      },
    });

    if (!favorite) {
      throw new NotFoundException('Favorite not found');
    }

    await this.prisma.favorite.delete({
      where: {
        user_id_workbook_id: {
          user_id: userId,
          workbook_id: workbookId,
        },
      },
    });
  }

  async toggleFavorite(userId: string, workbookId: string): Promise<{ favorited: boolean }> {
    // Check if workbook exists
    const workbook = await this.prisma.workbook.findUnique({
      where: { id: workbookId },
    });

    if (!workbook) {
      throw new NotFoundException('Workbook not found');
    }

    // Check if already favorited
    const existingFavorite = await this.prisma.favorite.findUnique({
      where: {
        user_id_workbook_id: {
          user_id: userId,
          workbook_id: workbookId,
        },
      },
    });

    if (existingFavorite) {
      // Remove from favorites
      await this.prisma.favorite.delete({
        where: {
          user_id_workbook_id: {
            user_id: userId,
            workbook_id: workbookId,
          },
        },
      });
      return { favorited: false };
    } else {
      // Add to favorites
      await this.prisma.favorite.create({
        data: {
          user_id: userId,
          workbook_id: workbookId,
        },
      });
      return { favorited: true };
    }
  }
}

