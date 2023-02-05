import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ImageUploadService } from 'src/s3/image-upload/image-upload.service';

@Injectable()
export class ChangeInfoService {
  constructor(
    private readonly db: PrismaService,
    private readonly imageUploadService: ImageUploadService,
  ) {}

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
}
