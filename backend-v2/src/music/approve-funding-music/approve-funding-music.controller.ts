import { Body, Controller, Post } from '@nestjs/common';
import { funding_music, funding_music_player } from '@prisma/client';
import { ApproveFundingMusicService } from './approve-funding-music.service';
import { approveDto } from './approve.dto';

@Controller('approve-funding-music')
export class ApproveFundingMusicController {
  constructor(private readonly approveService: ApproveFundingMusicService) {}

  @Post('list')
  async registFundMusicList(): Promise<funding_music[]> {
    return await this.approveService.registFundMusicList();
  }

  @Post('approve')
  async approveFundMusic(
    @Body() dto: approveDto,
  ): Promise<[funding_music, funding_music_player]> {
    return await this.approveService.approveFundMusic(dto.funding_id);
  }

  @Post('reject')
  async rejectFundMusic(@Body() dto: approveDto): Promise<funding_music> {
    return await this.approveService.rejectFundMusic(dto.funding_id);
  }
}
