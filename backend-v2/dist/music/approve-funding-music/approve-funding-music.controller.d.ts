import { funding_music, funding_music_player } from '@prisma/client';
import { ApproveFundingMusicService } from './approve-funding-music.service';
import { approveDto } from './approve.dto';
export declare class ApproveFundingMusicController {
    private readonly approveService;
    constructor(approveService: ApproveFundingMusicService);
    registFundMusicList(): Promise<funding_music[]>;
    approveFundMusic(dto: approveDto): Promise<[funding_music, funding_music_player]>;
    rejectFundMusic(dto: approveDto): Promise<funding_music>;
}
