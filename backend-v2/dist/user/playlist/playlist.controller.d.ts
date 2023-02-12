import { playlistDto } from './playlist.dto';
import { PlaylistService } from './playlist.service';
export declare class PlaylistController {
    private readonly playlistService;
    constructor(playlistService: PlaylistService);
    playListAdd(dto: playlistDto): Promise<import(".prisma/client").Prisma.BatchPayload | import(".prisma/client").playlist>;
}
