import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { likeNftDto } from './like-nft.dto';

@Injectable()
export class LikeNftService {
  constructor(private readonly db: PrismaService) {}

  async likeNft(dto: likeNftDto) {
    const checkResult = await this.searchLikeNft(dto);
    if (checkResult) {
      const result = await this.db.heart_nft.deleteMany({
        where: { user_id: dto.user_wallet_address, funding_id: dto.funding_id },
      });
      const resDto = { ...result, message: '삭제' };
      return resDto;
    } else {
      const result = await this.db.heart_nft.create({
        data: { user_id: dto.user_wallet_address, funding_id: dto.funding_id },
      });
      const resDto = { ...result, message: '추가' };
      return resDto;
    }
  }

  async searchLikeNft(dto: likeNftDto): Promise<boolean> {
    const result = await this.db.heart_nft.findFirst({
      where: { user_id: dto.user_wallet_address, funding_id: dto.funding_id },
    });
    if (result) return true;
    else return false;
  }
}
