import { Injectable } from '@nestjs/common';
import { funding } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { createFundMainDto } from './create-fund.dto';

@Injectable()
export class CreateFundService {
  constructor(private readonly db: PrismaService) {}

  async createFund(dto: createFundMainDto): Promise<funding> {
    const {
      id,
      creator_id,
      category,
      funding_info,
      funding_start_date,
      funding_finish_date,
      funding_production_date,
      funding_nft_image,
      funding_metadata,
    } = dto.fund;
    const { lyrics_name, lyrics_info, lyrics_sex } = dto.lyrics_maker;
    const { music_name, music_info, music_sex } = dto.music_maker;
    const { singer_name, singer_info, singer_sex } = dto.singer;
    return await this.db.funding.create({
      data: {
        id,
        creator_id,
        category,
        funding_info,
        funding_start_date,
        funding_finish_date,
        funding_production_date,
        funding_nft_image,
        funding_metadata,
        lyrics_maker: { create: [{ lyrics_name, lyrics_info, lyrics_sex }] },
        music_maker: { create: [{ music_name, music_info, music_sex }] },
        singer: { create: [{ singer_name, singer_info, singer_sex }] },
      },
    });
  }
}
