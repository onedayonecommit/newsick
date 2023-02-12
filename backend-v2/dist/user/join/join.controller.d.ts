import { user } from '@prisma/client';
import { JoinService } from './join.service';
export declare class JoinController {
    private readonly joinService;
    constructor(joinService: JoinService);
    userJoin(joinDto: any): Promise<user | string>;
}
