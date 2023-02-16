import { user } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { applicationCreatorDto } from './application-creator.dto';
export declare class ApplicationCreatorService {
    private readonly db;
    constructor(db: PrismaService);
    applyCreator(dto: applicationCreatorDto): Promise<user>;
}
