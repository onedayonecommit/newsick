import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FileUploadService } from '../file-upload/file-upload.service';

@Injectable()
export class ImageUploadService {
  constructor(
    private readonly db: PrismaService,
    private readonly uploadService: FileUploadService,
  ) {}

  /** 유저 프로필 이미지 업로드 */
  async profileImageUpload(
    file: Express.Multer.File,
    user_wallet_address: string,
  ) {
    const result = await this.db.user.findUnique({
      where: { user_wallet_address },
    });
    if (result) {
      this.uploadService.deleteFile(result.user_profile_image);
      const user_profile_image = await this.uploadService.uploadFile(file);
      await this.db.user.update({
        data: { user_profile_image },
        where: { user_wallet_address },
      });
      return { status: true, httpStatus: 201 };
    } else {
      throw new HttpException('who are you?', HttpStatus.BAD_REQUEST);
    }
  }

  /** funding CoverImage */
  //   async fundingNftImageUpload(file: Express.Multer.File, id: number) {
  //     const result = await this.db.funding.findUnique({
  //       where: { id },
  //     });
  //     this.uploadService.deleteFile(result.funding_nft_image);
  //     const funding_nft_image = await this.uploadService.uploadFile(file);
  //     await this.db.funding.update({
  //       data: { funding_nft_image },
  //       where: { id },
  //     });
  //     return { status: true, httpStatus: 201 };
  //   }
}
