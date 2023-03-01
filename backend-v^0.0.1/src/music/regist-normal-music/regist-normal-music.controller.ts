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
    ]),
  )
  async approveNormalMusic(
    // @Body('data') dto: normalMusicDto, // postman 으로 테스트시에는 form-data 한번에 받아오기 어려워서 일단 json전송
    @UploadedFiles() files,
    @Body() file: normalMusicDto,
  ) {
    return await this.registNormalMusic.normalMusicUpload(files, file);
  }

  @Post('test')
  async testput(@Body() dto: normalMusicDto) {
    console.log('테스트 음원 생성');
    return await this.registNormalMusic.testput(dto);
  }

  @Post('test2')
  async testput2() {
    return await this.registNormalMusic.testput2();
  }
}
