import { Body, Controller, Post } from '@nestjs/common';
import { funding_music, funding_music_player } from '@prisma/client';
import { ApproveFundingMusicService } from './approve-funding-music.service';

@Controller('approve-funding-music')
export class ApproveFundingMusicController {
  constructor(private readonly approveService: ApproveFundingMusicService) {}

  @Post('list')
  async registFundMusicList(): Promise<funding_music[]> {
    return await this.approveService.registFundMusicList();
  }

  @Post('approve')
  async approveFundMusic(
    @Body() funding_id: number,
  ): Promise<[funding_music, funding_music_player]> {
    return await this.approveService.approveFundMusic(funding_id);
  }

  @Post('reject')
  async rejectFundMusic(@Body() funding_id: number): Promise<funding_music> {
    return await this.approveService.rejectFundMusic(funding_id);
  }
}
