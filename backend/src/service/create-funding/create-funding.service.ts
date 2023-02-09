import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { funding } from '@prisma/client';
import { createFundingDto } from 'src/dto/create-funding/create-funding.dto';
import { PrismaService } from 'src/prisma.service';
import { FileUploadsService } from '../file-uploads/file-uploads.service';

@Injectable()
export class CreateFundingService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly uploadService: FileUploadsService,
  ) {}

  async findCreatorId(user_wallet_address: string): Promise<number> {
    const result = await this.prismaService.users.findUnique({
      where: { user_wallet_address },
    });
    return result.id;
  }

  async fundingInfoCreate(
    fundingDto: createFundingDto,
    file: Express.Multer.File,
  ): Promise<funding> {
    const {
      funding,
      funding_lyrics_maker,
      funding_music_maker,
      funding_singer,
    } = fundingDto;
    const creator_id = await this.findCreatorId(funding.creator_wallet_address);
    let fileurl = 'default_profile_image.png';
    if (file !== undefined) {
      fileurl = await this.uploadService.uploadFile(file);
    }
    try {
      const result = await this.prismaService.funding.create({
        data: {
          creator_id: creator_id,
          creator_wallet_address: funding.creator_wallet_address,
          category: funding.category,
          music_feel: funding.music_feel,
          funding_cover_image: fileurl,
          funding_info: funding.funding_info,
          start_date: funding.start_date,
          sale_date: funding.sale_date,
          music_maker: {
            create: [funding_music_maker],
          },
          lyrics_maker: { create: [funding_lyrics_maker] },
          singer: { create: [funding_singer] },
        },
        include: {
          music_maker: true,
          lyrics_maker: true,
          singer: true,
        },
      });
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
