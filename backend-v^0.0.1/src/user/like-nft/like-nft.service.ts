import { Injectable } from '@nestjs/common';
import { heart_nft } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { likeNftDto } from './like-nft.dto';

@Injectable()
export class LikeNftService {
  constructor(private readonly db: PrismaService) {}

  async likeNft(dto: likeNftDto): Promise<heart_nft | string> {
    const checkResult = await this.searchLikeNft(dto);
    if (checkResult) {
      return 'already heart nft';
    } else {
      const result = await this.db.heart_nft.create({
        data: { user_id: dto.user_wallet_address, funding_id: dto.funding_id },
      });
      const resDto = { ...result, message: '추가' };
      return resDto;
    }
  }

  async deleteNft(dto: likeNftDto) {
    return await this.db.heart_nft.deleteMany({
      where: { user_id: dto.user_wallet_address, funding_id: dto.funding_id },
    });
  }

  async searchLikeNft(dto: likeNftDto): Promise<boolean> {
    const result = await this.db.heart_nft.findFirst({
      where: { user_id: dto.user_wallet_address, funding_id: dto.funding_id },
    });
    if (result) return true;
    else return false;
  }
}
