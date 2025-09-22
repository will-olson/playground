import { Module } from '@nestjs/common';
import { CreateController } from './create.controller';
import { CreateService } from './create.service';
import { PrismaModule } from '../prisma/prisma.module';
import { SigmaModule } from '../sigma/sigma.module';

@Module({
  imports: [PrismaModule, SigmaModule],
  controllers: [CreateController],
  providers: [CreateService],
  exports: [CreateService],
})
export class CreateModule {}
