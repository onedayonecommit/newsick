/// <reference types="multer" />
import * as AWS from 'aws-sdk';
export declare class FileUploadService {
    s3: AWS.S3;
    AWS_S3_BUCKET: string;
    deleteFile(result: string): Promise<void>;
    uploadFile(file: Express.Multer.File): Promise<string>;
}
