import { Module } from '@nestjs/common';
import { WorkbooksController } from './workbooks.controller';
import { WorkbooksService } from './workbooks.service';
import { PrismaModule } from '../prisma/prisma.module';
import { SigmaModule } from '../sigma/sigma.module';

@Module({
  imports: [PrismaModule, SigmaModule],
  controllers: [WorkbooksController],
  providers: [WorkbooksService],
  exports: [WorkbooksService],
})
export class WorkbooksModule {}

