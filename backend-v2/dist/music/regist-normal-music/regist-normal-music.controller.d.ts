import { normalMusicDto } from './normal-music.dto';
import { RegistNormalMusicService } from './regist-normal-music.service';
export declare class RegistNormalMusicController {
    private readonly registNormalMusic;
    constructor(registNormalMusic: RegistNormalMusicService);
    approveNormalMusic(dto: normalMusicDto, files: any): Promise<any>;
}
