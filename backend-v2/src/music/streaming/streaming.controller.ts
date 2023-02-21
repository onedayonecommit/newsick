import { Body, Controller, Post } from '@nestjs/common';
import { streamingDto } from './streaming.dto';
import { StreamingService } from './streaming.service';

@Controller('streaming')
export class StreamingController {
  constructor(private readonly streamingService: StreamingService) {}

  @Post('normal/music')
  async fundingMusicStreaming(@Body() dto: streamingDto) {
    return await this.streamingService.fundingMusicStreaming(dto);
  }
}
