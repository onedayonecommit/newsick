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
      discord_address,
      funding_title,
      nft_name,
      funding_hard_cap,
      funding_price,
    } = dto.fund;
    const { lyrics_name, lyrics_sns_address, lyrics_info } = dto.lyrics_maker;
    const { music_name, music_sns_address, music_info } = dto.music_maker;
    const { singer_name, singer_sns_address, singer_info } = dto.singer;
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
        discord_address,
        funding_title,
        nft_name,
        funding_hard_cap,
        funding_price,
        lyrics_maker: {
          create: [{ lyrics_info, lyrics_name, lyrics_sns_address }],
        },
        music_maker: {
          create: [{ music_info, music_name, music_sns_address }],
        },
        singer: { create: [{ singer_info, singer_name, singer_sns_address }] },
        funding_music: { create: [{ funding_music_player: { create: [{}] } }] },
        // id,
        // creator_id,
        // category,
        // funding_info,
        // funding_start_date,
        // funding_finish_date,
        // funding_production_date,
        // funding_nft_image,
        // funding_metadata,
        // discord_address,
        // lyrics_maker: {
        //   create: [{ lyrics_name, lyrics_info, lyrics_sns_address }],
        // },
        // music_maker: {
        //   create: [{ music_name, music_info, music_sns_address }],
        // },
        // singer: { create: [{ singer_name, singer_info, singer_sns_address }] },
      },
    });
  }
}
