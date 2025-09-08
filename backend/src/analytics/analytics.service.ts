import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  // Placeholder implementation
  async getOverview() {
    const [totalUsers, totalWorkbooks, totalViews] = await Promise.all([
      this.prisma.user.count(),
      this.prisma.workbook.count(),
      this.prisma.workbookView.count(),
    ]);

    return {
      totalUsers,
      totalWorkbooks,
      totalViews,
    };
  }
}
