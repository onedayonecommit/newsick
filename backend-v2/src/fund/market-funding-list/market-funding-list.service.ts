import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MarketFundingListService {
  constructor(private readonly db: PrismaService) {}

  async getList(): Promise<object[]> {
    return await this.db.funding.findMany({
      select: {
        id: true,
        nft_name: true,
        funding_nft_image: true,
      },
    });
  }

  async getDetailList(id: number) {
    return await this.db.funding.findUnique({
      where: { id },
      include: {
        singer: true,
        lyrics_maker: true,
        music_maker: true,
      },
    });
  }
}
