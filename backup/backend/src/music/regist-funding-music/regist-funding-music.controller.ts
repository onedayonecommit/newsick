import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { fundingMusicDto } from './funding-music.dto';
import { RegistFundingMusicService } from './regist-funding-music.service';

@Controller('regist-funding-music')
export class RegistFundingMusicController {
  constructor(
    private readonly registFundingMusicService: RegistFundingMusicService,
  ) {}

  @Post('apply')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'cover_image', maxCount: 1 },
      { name: 'mp3_file', maxCount: 1 },
    ]),
  )
  async registFundingMusic(
    @UploadedFiles() files,
    @Body() dto: fundingMusicDto,
  ) {
    return await this.registFundingMusicService.registFundMusic(files, dto);
  }
}
