import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  // Placeholder implementation
  async findAll() {
    return this.prisma.report.findMany({
      orderBy: { created_at: 'desc' },
    });
  }
}
