import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SigmaJWTService } from './sigma-jwt.service';
import { EmbedURLService } from './embed-url.service';
import { SigmaApiService } from './sigma-api.service';
import { SigmaBookmarksService } from './sigma-bookmarks.service';
import { SigmaController } from './sigma.controller';

@Module({
  imports: [ConfigModule],
  providers: [SigmaJWTService, EmbedURLService, SigmaApiService, SigmaBookmarksService],
  controllers: [SigmaController],
  exports: [SigmaJWTService, EmbedURLService, SigmaApiService, SigmaBookmarksService],
})
export class SigmaModule {}
