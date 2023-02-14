import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { StreamingAuthService } from './streaming-auth/streaming-auth.service';

@Module({
  controllers: [],
  providers: [StreamingAuthService, PrismaService],
})
export class AuthModule {}
