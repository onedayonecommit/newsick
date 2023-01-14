import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ImagedownloadService {
  constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
  ) {}

  async downloadFile(user_wallet_address: string) {
    const imgKey = await this.getUserProfileImageUrl(user_wallet_address);
    const s3 = new AWS.S3({
      region: this.configService.get<string>('AWS_REGION'),
      credentials: {
        accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY'),
        secretAccessKey: this.configService.get<string>('AWS_SECRET_KEY'),
      },
    });
    const options = {
      Bucket: this.configService.get<string>('AWS_BUCKET_NAME'),
      Key: imgKey,
    };

    const s3Result = s3.getSignedUrl('getObject', options);
    console.log(s3Result);
    return s3Result;
  }

  async getUserProfileImageUrl(user_wallet_address: string): Promise<string> {
    try {
      const result = await this.prismaService.users.findUnique({
        where: { user_wallet_address },
      });
      return result.user_profile_image;
    } catch (error) {
      throw new HttpException('DB Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
