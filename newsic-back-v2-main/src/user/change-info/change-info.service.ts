import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { user } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { ImageUploadService } from 'src/s3/image-upload/image-upload.service';
import { changeDto } from './change-info.dto';

@Injectable()
export class ChangeInfoService {
  constructor(
    private readonly db: PrismaService,
    private readonly imageUploadService: ImageUploadService,
  ) {}

  /** 프로필 이미지 변경 */
  async changeProfileImage(
    file: Express.Multer.File,
    user_wallet_address: string,
  ) {
    try {
      return await this.imageUploadService.profileImageUpload(
        file,
        user_wallet_address,
      );
    } catch (error) {
      throw new HttpException(
        'profile image upload server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /** 유저네임 변경 */
  async changeUserName(dto: changeDto): Promise<user> {
    const { user_wallet_address, user_name } = dto;
    try {
      return await this.db.user.update({
        where: { user_wallet_address },
        data: {
          user_name,
        },
      });
    } catch (error) {
      throw new HttpException(
        'change name Service Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
