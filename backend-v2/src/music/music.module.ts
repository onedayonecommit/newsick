import { Module } from '@nestjs/common';
import { StreamingController } from './streaming/streaming.controller';
import { StreamingService } from './streaming/streaming.service';
import { RegistNormalMusicController } from './regist-normal-music/regist-normal-music.controller';
import { RegistNormalMusicService } from './regist-normal-music/regist-normal-music.service';
import { RegistFundingMusicService } from './regist-funding-music/regist-funding-music.service';
import { RegistFundingMusicController } from './regist-funding-music/regist-funding-music.controller';
import { PrismaService } from 'src/prisma.service';
import { FileUploadService } from 'src/s3/file-upload/file-upload.service';
import { ApproveFundingMusicService } from './approve-funding-music/approve-funding-music.service';
import { ApproveFundingMusicController } from './approve-funding-music/approve-funding-music.controller';
import { StreamingAuthService } from 'src/auth/streaming-auth/streaming-auth.service';

@Module({
  controllers: [
    StreamingController,
    RegistNormalMusicController,
    RegistFundingMusicController,
    ApproveFundingMusicController,
  ],
  providers: [
    StreamingService,
    RegistNormalMusicService,
    RegistFundingMusicService,
    PrismaService,
    FileUploadService,
    ApproveFundingMusicService,
    StreamingAuthService,
  ],
})
export class MusicModule {}
