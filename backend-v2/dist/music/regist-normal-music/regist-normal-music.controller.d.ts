import { RegistNormalMusicService } from './regist-normal-music.service';
export declare class RegistNormalMusicController {
    private readonly registNormalMusic;
    constructor(registNormalMusic: RegistNormalMusicService);
    approveNormalMusic(files: any): Promise<import(".prisma/client").normal_music>;
}
