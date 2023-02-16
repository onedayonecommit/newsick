import { PrismaService } from 'src/prisma.service';
import { FileUploadService } from 'src/s3/file-upload/file-upload.service';
export declare class RegistNormalMusicService {
    private readonly db;
    private readonly s3Service;
    constructor(db: PrismaService, s3Service: FileUploadService);
    normalMusicUpload(files: any): Promise<import(".prisma/client").normal_music>;
}
