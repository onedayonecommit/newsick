import { Body, Controller, Post } from '@nestjs/common';
import { likeNftDto } from './like-nft.dto';
import { LikeNftService } from './like-nft.service';

@Controller('like-nft')
export class LikeNftController {
  constructor(private readonly likeNftService: LikeNftService) {}

  @Post('add')
  async likeNft(@Body() dto: likeNftDto) {
    return await this.likeNftService.likeNft(dto);
  }
}
