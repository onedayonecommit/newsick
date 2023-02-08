import { Injectable } from '@nestjs/common';
import { StreamingAuthService } from 'src/auth/streaming-auth/streaming-auth.service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StreamingService {
  constructor(
    private readonly db: PrismaService,
    private readonly authCheckService: StreamingAuthService,
  ) {}

  async musicStreaming(user_wallet_address: string) {
    const result = await this.authCheckService.streamingAuthCheck(
      user_wallet_address,
    );
    if (result) {
    }
  }
}
