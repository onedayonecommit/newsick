import { Injectable } from '@nestjs/common';
import { StreamingAuthService } from 'src/auth/streaming-auth/streaming-auth.service';
import { PrismaService } from 'src/prisma.service';
import { streamingDto } from './streaming.dto';

@Injectable()
export class StreamingService {
  constructor(
    private readonly db: PrismaService,
    private readonly authCheckService: StreamingAuthService,
  ) {}

  async fundingMusicStreaming(dto: streamingDto) {
    const { user_wallet_address, music_id } = dto;
    const result = await this.authCheckService.streamingAuthCheck(
      user_wallet_address,
    );
    if (result) {
      return await this.db.funding_music.findUnique({
        where: { funding_id: music_id },
        select: { music_path: true },
      });
    } else {
      return '구독권이 만료되었습니다. 재 결제 바랍니다.';
    }
  }
}
