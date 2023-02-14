import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { normalMusicDto } from './normal-music.dto';
import { RegistNormalMusicService } from './regist-normal-music.service';

@Controller('regist-normal-music')
export class RegistNormalMusicController {
  constructor(private readonly registNormalMusic: RegistNormalMusicService) {}

  @Post('approve')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'cover_image', maxCount: 1 },
      { name: 'mp3_file', maxCount: 1 },
      { name: 'data' },
    ]),
  )
  async approveNormalMusic(
    // @Body('data') dto: normalMusicDto, // postman 으로 테스트시에는 form-data 한번에 받아오기 어려워서 일단 json전송
    @UploadedFiles() files,
  ) {
    return await this.registNormalMusic.normalMusicUpload(files);
  }
}
