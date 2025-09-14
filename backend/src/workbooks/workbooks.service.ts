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
      },
      orderBy: { published_at: 'desc' },
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
}

