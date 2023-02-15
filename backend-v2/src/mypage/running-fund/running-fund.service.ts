import { Injectable } from '@nestjs/common';
import { funding } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RunningFundService {
  constructor(private readonly db: PrismaService) {}

  async myFundList(user_wallet_address: string): Promise<funding[]> {
    return await this.db.funding.findMany({
      where: { creator_id: user_wallet_address },
      orderBy: { id: 'asc' },
    });
  }
}
