import { Module } from '@nestjs/common';
import { StreamingController } from './streaming/streaming.controller';
import { StreamingService } from './streaming/streaming.service';
import { RegistNormalMusicController } from './regist-normal-music/regist-normal-music.controller';
import { RegistNormalMusicService } from './regist-normal-music/regist-normal-music.service';
import { RegistFundingMusicService } from './regist-funding-music/regist-funding-music.service';
import { RegistFundingMusicController } from './regist-funding-music/regist-funding-music.controller';

@Module({
  controllers: [
    StreamingController,
    RegistNormalMusicController,
    RegistFundingMusicController,
  ],
  providers: [
    StreamingService,
    RegistNormalMusicService,
    RegistFundingMusicService,
  ],
})
export class MusicModule {}
