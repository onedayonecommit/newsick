import { PrismaService } from 'src/prisma.service';
import { likeMusicDto } from './like-music.dto';
export declare class LikeMusicService {
    private readonly db;
    constructor(db: PrismaService);
    likeMusic(dto: likeMusicDto): Promise<any>;
    normalMusicAdd(user_id: string, normal_music_id: number): Promise<any>;
    fundingMusicAdd(user_id: string, funding_music_id: number): Promise<any>;
}
