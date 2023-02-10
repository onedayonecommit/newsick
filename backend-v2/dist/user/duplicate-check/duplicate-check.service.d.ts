import { PrismaService } from 'src/prisma.service';
export declare class DuplicateCheckService {
    private readonly db;
    constructor(db: PrismaService);
    userEmailCheck(user_email: string): Promise<boolean>;
    userNameCheck(user_name: string): Promise<boolean>;
    userWalletCheck(user_wallet_address: string): Promise<boolean>;
}
