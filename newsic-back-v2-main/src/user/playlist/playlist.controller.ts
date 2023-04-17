import { Body, Controller, Get, Post } from '@nestjs/common';
import { mylistDto, playlistDto } from './playlist.dto';
import { PlaylistService } from './playlist.service';

@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post('add')
  async playListAdd(@Body() dto: playlistDto) {
    return await this.playlistService.playListAdd(dto);
  }

  @Post()
  async myPlayList(@Body() dto: mylistDto) {
    return await this.playlistService.myPlayList(dto.user_wallet_address);
  }
}
