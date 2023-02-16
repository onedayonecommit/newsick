/// <reference types="multer" />
import { PrismaService } from 'src/prisma.service';
import { FileUploadService } from '../file-upload/file-upload.service';
export declare class ImageUploadService {
    private readonly db;
    private readonly uploadService;
    constructor(db: PrismaService, uploadService: FileUploadService);
    profileImageUpload(file: Express.Multer.File, user_wallet_address: string): Promise<{
        status: boolean;
        httpStatus: number;
    }>;
}
