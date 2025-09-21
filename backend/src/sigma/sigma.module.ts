import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { SigmaJWTService } from './sigma-jwt.service';
import { EmbedURLService } from './embed-url.service';
import { SigmaApiService } from './sigma-api.service';
import { SigmaBookmarksService } from './sigma-bookmarks.service';
import { SigmaMemberService } from './sigma-member.service';
import { SigmaController } from './sigma.controller';

@Module({
  imports: [ConfigModule, HttpModule],
  providers: [SigmaJWTService, EmbedURLService, SigmaApiService, SigmaBookmarksService, SigmaMemberService],
  controllers: [SigmaController],
  exports: [SigmaJWTService, EmbedURLService, SigmaApiService, SigmaBookmarksService, SigmaMemberService],
})
export class SigmaModule {}
