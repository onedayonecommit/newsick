import { likeMusicDto } from './like-music.dto';
import { LikeMusicService } from './like-music.service';
export declare class LikeMusicController {
    private readonly likeMusicService;
    constructor(likeMusicService: LikeMusicService);
    likeMusic(dto: likeMusicDto): Promise<import(".prisma/client").Prisma.BatchPayload | import(".prisma/client").heart_music>;
}
