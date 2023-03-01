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
import { CreatorCheckService } from 'src/auth/creator-check/creator-check.service';
import { MusicMainListService } from './music-main-list/music-main-list.service';
import { MusicMainListController } from './music-main-list/music-main-list.controller';
import { MusicGenreListService } from './music-genre-list/music-genre-list.service';
import { MusicGenreListController } from './music-genre-list/music-genre-list.controller';
import { MusicDetailInfoController } from './music-detail-info/music-detail-info.controller';
import { MusicDetailInfoService } from './music-detail-info/music-detail-info.service';

@Module({
  controllers: [
    StreamingController,
    RegistNormalMusicController,
    RegistFundingMusicController,
    ApproveFundingMusicController,
    MusicMainListController,
    MusicGenreListController,
    MusicDetailInfoController,
  ],
  providers: [
    StreamingService,
    RegistNormalMusicService,
    RegistFundingMusicService,
    PrismaService,
    FileUploadService,
    ApproveFundingMusicService,
    StreamingAuthService,
    CreatorCheckService,
    MusicMainListService,
    MusicGenreListService,
    MusicDetailInfoService,
  ],
})
export class MusicModule {}
