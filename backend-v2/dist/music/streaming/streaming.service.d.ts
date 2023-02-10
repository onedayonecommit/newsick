import { StreamingAuthService } from 'src/auth/streaming-auth/streaming-auth.service';
import { PrismaService } from 'src/prisma.service';
export declare class StreamingService {
    private readonly db;
    private readonly authCheckService;
    constructor(db: PrismaService, authCheckService: StreamingAuthService);
    musicStreaming(user_wallet_address: string): Promise<void>;
}
