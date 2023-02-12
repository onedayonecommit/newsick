import { likeFundDto } from './like-fund.dto';
import { LikeFundService } from './like-fund.service';
export declare class LikeFundController {
    private readonly likeFundService;
    constructor(likeFundService: LikeFundService);
    likeFund(dto: likeFundDto): Promise<import(".prisma/client").Prisma.BatchPayload | import(".prisma/client").heart_funding>;
}
