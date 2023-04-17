import { Controller, Get, Query } from '@nestjs/common';
import { MusicDetailInfoService } from './music-detail-info.service';

@Controller('music-detail-info')
export class MusicDetailInfoController {
  constructor(private readonly musicDetailService: MusicDetailInfoService) {}

  @Get()
  async musicDetailInfo(
    @Query('nmid') nmid: number | null,
    @Query('fmid') fmid: number | null,
  ) {
    return await this.musicDetailService.musicDetailInfo(nmid, fmid);
  }
}
