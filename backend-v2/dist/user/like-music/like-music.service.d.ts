import { PrismaService } from 'src/prisma.service';
import { likeMusicDto } from './like-music.dto';
export declare class LikeMusicService {
    private readonly db;
    constructor(db: PrismaService);
    likeMusic(dto: likeMusicDto): Promise<import(".prisma/client").Prisma.BatchPayload | import(".prisma/client").heart_music>;
    normalMusicAdd(user_id: string, normal_music_id: number): Promise<import(".prisma/client").Prisma.BatchPayload | import(".prisma/client").heart_music>;
    fundingMusicAdd(user_id: string, funding_music_id: number): Promise<import(".prisma/client").Prisma.BatchPayload | import(".prisma/client").heart_music>;
}
