import { likeMusicDto } from './like-music.dto';
import { LikeMusicService } from './like-music.service';
export declare class LikeMusicController {
    private readonly likeMusicService;
    constructor(likeMusicService: LikeMusicService);
    likeMusic(dto: likeMusicDto): Promise<any>;
}
