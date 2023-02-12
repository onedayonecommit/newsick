import { PrismaService } from 'src/prisma.service';
import { playlistDto } from './playlist.dto';
export declare class PlaylistService {
    private readonly db;
    constructor(db: PrismaService);
    playListAdd(dto: playlistDto): Promise<import(".prisma/client").Prisma.BatchPayload | import(".prisma/client").playlist>;
}
