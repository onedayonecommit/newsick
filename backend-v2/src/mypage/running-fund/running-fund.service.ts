import { Injectable } from '@nestjs/common';
import { funding } from '@prisma/client';
import { CreatorCheckService } from 'src/auth/creator-check/creator-check.service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RunningFundService {
  constructor(
    private readonly db: PrismaService,
    private readonly authService: CreatorCheckService,
  ) {}

  async myFundList(user_wallet_address: string): Promise<funding[]> {
    if (await this.authService.creatorCheck(user_wallet_address)) {
      return await this.db.funding.findMany({
        where: { creator_id: user_wallet_address },
        orderBy: { id: 'asc' },
      });
    }
  }
}
