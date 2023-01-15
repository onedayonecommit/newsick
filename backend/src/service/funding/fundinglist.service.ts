import { Injectable } from '@nestjs/common';
import { funding } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FundinglistService {
  constructor(private readonly prismaService: PrismaService) {}

  /** 펀딩 리스트 전부 반환 */
  async getFundingList(): Promise<funding[]> {
    return await this.prismaService.funding.findMany();
  }

  /** 상세 페이지 들어갔을 때 해당 펀딩에 대한 상세정보 */
  async getFundingItem(id: number): Promise<funding> {
    const result = await this.prismaService.funding.findUnique({
      where: { id },
      include: {
        lyrics_maker: true,
        music_maker: true,
        singer: true,
      },
    });
    return result;
  }
}
