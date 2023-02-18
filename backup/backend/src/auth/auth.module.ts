import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { StreamingAuthService } from './streaming-auth/streaming-auth.service';
import { CreatorCheckService } from './creator-check/creator-check.service';

@Module({
  controllers: [],
  providers: [StreamingAuthService, PrismaService, CreatorCheckService],
})
export class AuthModule {}
