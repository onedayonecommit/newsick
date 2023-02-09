import { Body, Controller, Post } from '@nestjs/common';
import { likeMusicDto } from './like-music.dto';
import { LikeMusicService } from './like-music.service';

@Controller('like-music')
export class LikeMusicController {
  constructor(private readonly likeMusicService: LikeMusicService) {}

  @Post()
  async likeMusic(@Body() dto: likeMusicDto) {
    return await this.likeMusicService.likeMusic(dto);
  }
}
