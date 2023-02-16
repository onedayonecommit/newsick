import { PrismaService } from 'src/prisma.service';
export declare class StreamingAuthService {
    private readonly db;
    constructor(db: PrismaService);
    streamingAuthCheck(user_wallet_address: string): Promise<boolean>;
}
