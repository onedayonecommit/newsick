import { PrismaService } from 'src/prisma.service';
import { FileUploadService } from 'src/s3/file-upload/file-upload.service';
import { normalMusicDto } from './normal-music.dto';
export declare class RegistNormalMusicService {
    private readonly db;
    private readonly s3Service;
    constructor(db: PrismaService, s3Service: FileUploadService);
    normalMusicUpload(dto: normalMusicDto, files: any): Promise<any>;
}
