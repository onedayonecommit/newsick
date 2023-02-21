import { Controller, Get } from '@nestjs/common';
import { MusicMainListService } from './music-main-list.service';

@Controller('music-main-list')
export class MusicMainListController {
  constructor(private readonly musicMainService: MusicMainListService) {}

  @Get('normal/list/all')
  async normalList() {
    return await this.musicMainService.allList();
  }
  @Get('funding/list/all')
  async fundingList() {
    return await this.musicMainService.fundingList();
  }
  @Get('newMusic')
  async newMusicList() {
    return await this.musicMainService.newMusicList();
  }
}
