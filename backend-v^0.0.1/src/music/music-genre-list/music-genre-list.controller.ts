import { Controller, Get, Query } from '@nestjs/common';
import { MusicGenreListService } from './music-genre-list.service';

@Controller('music-genre-list')
export class MusicGenreListController {
  constructor(private readonly musicGenreService: MusicGenreListService) {}

  @Get()
  async songList(@Query('genre') genre: string) {
    return await this.musicGenreService.songList(genre);
  }
}
