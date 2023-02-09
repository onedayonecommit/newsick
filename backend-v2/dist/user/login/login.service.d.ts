import { user } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class LoginService {
    private readonly db;
    constructor(db: PrismaService);
    userConnect(user_wallet_address: string): Promise<user | null>;
}
