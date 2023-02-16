/// <reference types="multer" />
import { PrismaService } from 'src/prisma.service';
import { FileUploadService } from '../file-upload/file-upload.service';
export declare class FundingSoundUploadService {
    private readonly db;
    private readonly uploadService;
    constructor(db: PrismaService, uploadService: FileUploadService);
    fundingSoundUpload(mp3: Express.Multer.File, funding_id: number): Promise<void>;
}
