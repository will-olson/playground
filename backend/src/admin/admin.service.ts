import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  // Placeholder implementation
  async getStats() {
    const [users, workbooks, reports] = await Promise.all([
      this.prisma.user.count(),
      this.prisma.workbook.count(),
      this.prisma.report.count(),
    ]);

    return { users, workbooks, reports };
  }
}
