/// <reference types="multer" />
import { user } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { ImageUploadService } from 'src/s3/image-upload/image-upload.service';
import { changeDto } from './change-info.dto';
export declare class ChangeInfoService {
    private readonly db;
    private readonly imageUploadService;
    constructor(db: PrismaService, imageUploadService: ImageUploadService);
    changeProfileImage(file: Express.Multer.File, user_wallet_address: string): Promise<{
        status: boolean;
        httpStatus: number;
    }>;
    changeUserName(dto: changeDto): Promise<user>;
}
