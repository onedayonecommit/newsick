import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
@Injectable()
export class FileUploadService {
  s3 = new AWS.S3({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    },
  });
  AWS_S3_BUCKET = process.env.AWS_BUCKET_NAME;

  /** 이전 파일 삭제 */
  async deleteFile(result: string) {
    if (result !== 'default_profile_image.jpeg') {
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

  /** 새로운 파일 업로드 */
  async uploadFile(file: Express.Multer.File) {
    console.log(file);
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
}
