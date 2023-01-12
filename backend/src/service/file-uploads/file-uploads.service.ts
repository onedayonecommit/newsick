import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { extname } from 'path';
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

  async profileImageUpload(
    file: Express.Multer.File,
    user_wallet_address: string,
  ) {
    const user_profile_image = await this.uploadFile(file);
    await this.prismaService.users.update({
      data: { user_profile_image },
      where: { user_wallet_address },
    });
  }

  async uploadFile(file: Express.Multer.File) {
    const filebasename = `${uuidv4()}${extname(file.originalname)}`;

    const AWS_S3_BUCKET = this.configService.get<string>('AWS_BUCKET_NAME');

    const params = {
      Bucket: AWS_S3_BUCKET,
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
}
