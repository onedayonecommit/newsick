import { fundingMusicDto } from './funding-music.dto';
import { RegistFundingMusicService } from './regist-funding-music.service';
export declare class RegistFundingMusicController {
    private readonly registFundingMusicService;
    constructor(registFundingMusicService: RegistFundingMusicService);
    registFundingMusic(files: any, dto: fundingMusicDto): Promise<any>;
}
