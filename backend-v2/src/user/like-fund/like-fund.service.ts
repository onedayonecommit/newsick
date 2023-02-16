import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { likeFundDto } from './like-fund.dto';

@Injectable()
export class LikeFundService {
  constructor(private readonly db: PrismaService) {}

  async likeFund(dto: likeFundDto) {
    const { user_wallet_address, funding_id } = dto;
    try {
      const result = await this.db.heart_funding.findFirst({
        where: { funding_id: funding_id, user_id: user_wallet_address },
      });
      console.log(result);
      if (result) {
        console.log('이미 눌러놔서 삭제할거임');
        const result2 = await this.db.heart_funding.deleteMany({
          where: {
            funding_id: funding_id,
            user_id: user_wallet_address,
          },
        });
        console.log(result2);
        await this.db.funding.update({
          where: { id: funding_id },
          data: { funding_heart: { decrement: 1 } },
        });
        return result2;
      } else {
        console.log('없어서 추가함');
        const result3 = await this.db.heart_funding.create({
          data: { funding_id, user_id: user_wallet_address },
        });
        console.log(result3);
        await this.db.funding.update({
          where: { id: funding_id },
          data: { funding_heart: { increment: 1 } },
        });
        return result3;
      }
    } catch (error) {}
  }
}
