import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SigmaJWTService } from './sigma-jwt.service';
import { EmbedURLService } from './embed-url.service';
import { SigmaController } from './sigma.controller';

@Module({
  imports: [ConfigModule],
  providers: [SigmaJWTService, EmbedURLService],
  controllers: [SigmaController],
  exports: [SigmaJWTService, EmbedURLService],
})
export class SigmaModule {}
