import { PrismaService } from 'src/prisma.service';
import { likeFundDto } from './like-fund.dto';
export declare class LikeFundService {
    private readonly db;
    constructor(db: PrismaService);
    likeFund(dto: likeFundDto): Promise<any>;
}
