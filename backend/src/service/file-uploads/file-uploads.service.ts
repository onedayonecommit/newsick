import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { extname } from 'path';
import { userProfileImageUpdateResponseDto } from 'src/dto/swagger/response/swagger-profileimg-response.dto/profile-image-update.dto';
import { PrismaService } from 'src/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FileUploadsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
  ) {}
  s3 = new AWS.S3({
    region: this.configService.get<string>('AWS_REGION'),
    credentials: {
      accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY'),
      secretAccessKey: this.configService.get<string>('AWS_SECRET_KEY'),
    },
  });
  AWS_S3_BUCKET = this.configService.get<string>('AWS_BUCKET_NAME');

  /** 이미지 업로드시 이전 이미지 S3에서 삭제 */
  async deleteFile(result: string) {
    if (result !== 'default_profile_image.png') {
      console.log('hi');
      try {
        this.s3
          .deleteObject({
            Bucket: this.AWS_S3_BUCKET,
            Key: result,
          })
          .promise();
      } catch (error) {
        throw new HttpException(
          '파일 삭제 안됌',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  /** 재 사용될 이미지 업로드 함수 */
  async uploadFile(file: Express.Multer.File) {
    const filebasename = `${uuidv4()}${extname(file.originalname)}`;

    const params = {
      Bucket: this.AWS_S3_BUCKET,
      Key: String(filebasename),
      Body: file.buffer,
    };

    try {
      await this.s3.upload(params).promise();
      // await this.profileImageUpload(filebasename, user_wallet_address);
      return filebasename;
    } catch (e) {
      console.log(e);
      throw new Error('Failed to upload file.');
    }
  }

  /** 개인 유저 프로필 사진 업데이트 함수 */
  async profileImageUpload(
    file: Express.Multer.File,
    user_wallet_address: string,
  ): Promise<userProfileImageUpdateResponseDto> {
    const result = await this.prismaService.users.findUnique({
      where: { user_wallet_address },
    });
    this.deleteFile(result.user_profile_image);
    const user_profile_image = await this.uploadFile(file);
    await this.prismaService.users.update({
      data: { user_profile_image },
      where: { user_wallet_address },
    });
    return { status: true, httpStatus: 201 };
  }

  /** funding CoverImage */
  async fundingCoverImageUpload(file: Express.Multer.File, id: number) {
    const result = await this.prismaService.funding.findUnique({
      where: { id },
    });
    this.deleteFile(result.funding_cover_image);
    const funding_cover_image = await this.uploadFile(file);
    await this.prismaService.funding.update({
      data: { funding_cover_image },
      where: { id },
    });
    return { status: true, httpStatus: 201 };
  }
}
