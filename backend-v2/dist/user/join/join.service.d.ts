import { user } from '@prisma/client';
import { EmailSendService } from 'src/email/email-send/email-send.service';
import { PrismaService } from 'src/prisma.service';
import { DuplicateCheckService } from '../duplicate-check/duplicate-check.service';
import { joinDto } from './join.dto';
export declare class JoinService {
    private readonly db;
    private readonly duplicateService;
    private readonly mailService;
    constructor(db: PrismaService, duplicateService: DuplicateCheckService, mailService: EmailSendService);
    userJoin(joinDto: joinDto): Promise<user | string>;
}
