import { Injectable } from '@nestjs/common';
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
}
