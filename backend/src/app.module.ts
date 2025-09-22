import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { WorkbooksModule } from './workbooks/workbooks.module';
import { TagsModule } from './tags/tags.module';
import { AdminModule } from './admin/admin.module';
import { ReportsModule } from './reports/reports.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { SigmaModule } from './sigma/sigma.module';
import { CommunityModule } from './community/community.module';
import { CreateModule } from './create/create.module';
import { UsersService } from './users/users.service';
import { WorkbooksService } from './workbooks/workbooks.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000, // 1 minute
        limit: 100, // 100 requests per minute
      },
    ]),
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => {
        // Use in-memory cache for development if Redis is not available
        if (process.env.NODE_ENV === 'development' && !process.env.REDIS_HOST) {
          return {
            ttl: 300, // 5 minutes default TTL
          };
        }
        
        try {
          const store = await redisStore({
            socket: {
              host: process.env.REDIS_HOST || 'localhost',
              port: parseInt(process.env.REDIS_PORT || '6379'),
            },
            password: process.env.REDIS_PASSWORD,
          });
          return {
            store,
            ttl: 300, // 5 minutes default TTL
          };
        } catch (error) {
          console.warn('Redis not available, using in-memory cache:', error.message);
          return {
            ttl: 300, // 5 minutes default TTL
          };
        }
      },
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    WorkbooksModule,
    TagsModule,
    AdminModule,
    ReportsModule,
    AnalyticsModule,
    SigmaModule,
    CommunityModule,
    CreateModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersService, WorkbooksService],
})
export class AppModule {}