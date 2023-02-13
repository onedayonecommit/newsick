import { Body, Controller, Post } from '@nestjs/common';
import { streamingDto } from './streaming.dto';
import { StreamingService } from './streaming.service';

@Controller('streaming')
export class StreamingController {
  constructor(private readonly streamingService: StreamingService) {}

  @Post('music')
  async musicStreaming(@Body() dto: streamingDto) {
    return await this.streamingService.musicStreaming(dto.user_wallet_address);
  }
}
