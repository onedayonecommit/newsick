import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { funding } from '@prisma/client';
import { createFundingDto } from 'src/dto/create-funding/create-funding.dto';
import { fundingOfficialsDto } from 'src/dto/create-funding/funding-officials.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CreateFundingService {
  constructor(private readonly prismaService: PrismaService) {}

  async fundingLylicsMakerCreate(lylics_dto: fundingOfficialsDto, id: number) {
    lylics_dto.funding_id = id;
    try {
      await this.prismaService.funding_lyrics_maker.create({
        data: lylics_dto,
      });
    } catch (error) {
      throw new HttpException(
        'lyrics create error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async fundingMusicMakerCreate(music_dto: fundingOfficialsDto, id: number) {
    music_dto.funding_id = id;
    try {
      await this.prismaService.funding_music_maker.create({
        data: music_dto,
      });
    } catch (error) {
      throw new HttpException(
        'music create create error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async fundingSingerCreate(singer_dto: fundingOfficialsDto, id: number) {
    singer_dto.funding_id = id;
    try {
      await this.prismaService.funding_singer.create({
        data: singer_dto,
      });
    } catch (error) {
      throw new HttpException(
        'singer create error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async fundingInfoCreate(fundingDto: createFundingDto): Promise<object> {
    console.log(fundingDto);
    const {
      funding,
      funding_lyrics_maker,
      funding_music_maker,
      funding_singer,
    } = fundingDto;
    const creator_id = await this.prismaService.users.findUnique({
      where: { user_wallet_address: funding.creator_wallet_address },
    });
    console.log(creator_id.id);
    funding.creator_id = creator_id.id;
    console.log(funding);
    try {
      const result = await this.prismaService.funding.create({
        data: funding,
      });
      await this.fundingLylicsMakerCreate(funding_lyrics_maker, result.id);
      await this.fundingMusicMakerCreate(funding_music_maker, result.id);
      await this.fundingSingerCreate(funding_singer, result.id);
      return result;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'funding create failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
