import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { funding } from '@prisma/client';
import { IsOptional } from 'class-validator';
import { createFundingDto } from 'src/dto/create-funding/create-funding.dto';
import { fundingOfficialsDto } from 'src/dto/create-funding/funding-officials.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CreateFundingService {
  constructor(private readonly prismaService: PrismaService) {}

  async fundingLylicsMakerCreate(lylics_dto: fundingOfficialsDto, id: number) {
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
    console.log(fundingDto.funding);
    try {
      // const result2 = await this.prismaService.funding
      const result = await this.prismaService.funding.create({
        data: fundingDto.funding,
      });

      await this.fundingLylicsMakerCreate(
        fundingDto.funding_lyrics_maker,
        result.id,
      );
      await this.fundingMusicMakerCreate(
        fundingDto.funding_music_maker,
        result.id,
      );
      await this.fundingSingerCreate(fundingDto.funding_singer, result.id);

      return { createStatus: true, httpStatus: 201 };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'funding create failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
