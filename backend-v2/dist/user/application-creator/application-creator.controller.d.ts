import { user } from '@prisma/client';
import { applicationCreatorDto } from './application-creator.dto';
import { ApplicationCreatorService } from './application-creator.service';
export declare class ApplicationCreatorController {
    private readonly applicationService;
    constructor(applicationService: ApplicationCreatorService);
    applyCreator(dto: applicationCreatorDto): Promise<user>;
}
