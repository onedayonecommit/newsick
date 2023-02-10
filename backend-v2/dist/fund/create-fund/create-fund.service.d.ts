import { funding } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { createFundMainDto } from './create-fund.dto';
export declare class CreateFundService {
    private readonly db;
    constructor(db: PrismaService);
    createFund(dto: createFundMainDto): Promise<funding>;
}
