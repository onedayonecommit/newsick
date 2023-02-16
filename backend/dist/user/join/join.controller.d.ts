import { user } from '@prisma/client';
import { joinDto } from './join.dto';
import { JoinService } from './join.service';
export declare class JoinController {
    private readonly joinService;
    constructor(joinService: JoinService);
    userJoin(joinDto: joinDto): Promise<user | string>;
}
