import { PrismaService } from 'src/prisma.service';
import { FileUploadService } from 'src/s3/file-upload/file-upload.service';
import { fundingMusicDto } from './funding-music.dto';
export declare class RegistFundingMusicService {
    private readonly db;
    private readonly uploadService;
    constructor(db: PrismaService, uploadService: FileUploadService);
    registFundMusic(files: any, dto: fundingMusicDto): Promise<import(".prisma/client").funding_music>;
}
