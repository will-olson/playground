import { Module } from '@nestjs/common';
import { WorkbooksController } from './workbooks.controller';
import { WorkbooksService } from './workbooks.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WorkbooksController],
  providers: [WorkbooksService],
  exports: [WorkbooksService],
})
export class WorkbooksModule {}
