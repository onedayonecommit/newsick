import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StreamingAuthService {
  constructor(private readonly db: PrismaService) {}

  async streamingAuthCheck(user_wallet_address: string): Promise<boolean> {
    const result = await this.db.ticket.findUnique({
      where: { id: user_wallet_address },
    });
    if (
      Math.floor(result.expired.getTime() / 1000) >
      Math.floor(new Date().getTime() / 1000)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
