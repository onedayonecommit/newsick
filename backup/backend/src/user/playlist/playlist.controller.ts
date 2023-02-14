import { Body, Controller, Post } from '@nestjs/common';
import { playlistDto } from './playlist.dto';
import { PlaylistService } from './playlist.service';

@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post('add')
  async playListAdd(@Body() dto: playlistDto) {
    return await this.playlistService.playListAdd(dto);
  }
}
