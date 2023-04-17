import { Injectable } from '@nestjs/common';
import { CreatorCheckService } from 'src/auth/creator-check/creator-check.service';
import { PrismaService } from 'src/prisma.service';
import { fundFinishDto } from './fund-finish.dto';

@Injectable()
export class FundFinishService {
  constructor(
    private readonly db: PrismaService,
    private readonly authService: CreatorCheckService,
  ) {}

  async fundingFinish(dto: fundFinishDto) {
    const { funding_id, user_wallet_address, boon_status } = dto;
    if (
      await this.authService.fundingOwnerCheck(user_wallet_address, funding_id)
    ) {
      return await this.db.funding.update({
        where: { id: funding_id },
        data: { funding_finish_status: boon_status },
      });
    } else {
      return 'who are you?';
    }
  }
}
