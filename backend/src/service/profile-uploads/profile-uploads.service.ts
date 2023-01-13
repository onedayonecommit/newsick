import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { extname } from 'path';
import { PrismaService } from 'src/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProfileUploadsService {
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
  async uploadFile(file: Express.Multer.File) {
    const filebasename = `${uuidv4()}${extname(file.originalname)}`;
    console.log(`최종 파일 네임 : ${filebasename}`);
    const AWS_S3_BUCKET = this.configService.get<string>('AWS_BUCKET_NAME');
    const params = {
      Bucket: AWS_S3_BUCKET,
      Key: String(filebasename),
      Body: file.buffer,
    };
    try {
      const response = await this.s3.upload(params).promise();
      console.log(response);
      return { uploadStatus: true, httpStatus: 201 };
    } catch (e) {
      console.log(e);
      throw new Error('Failed to upload file.');
    }
  }
}
