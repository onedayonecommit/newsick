import { funding_music, funding_music_player } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { FileUploadService } from 'src/s3/file-upload/file-upload.service';
export declare class ApproveFundingMusicService {
    private readonly db;
    private readonly s3Service;
    constructor(db: PrismaService, s3Service: FileUploadService);
    registFundMusicList(): Promise<funding_music[]>;
    approveFundMusic(funding_id: number): Promise<[funding_music, funding_music_player]>;
    rejectFundMusic(funding_id: number): Promise<funding_music>;
}
