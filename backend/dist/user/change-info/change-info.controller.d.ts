/// <reference types="multer" />
import { user } from '@prisma/client';
import { changeDto } from './change-info.dto';
import { ChangeInfoService } from './change-info.service';
export declare class ChangeInfoController {
    private readonly changeService;
    constructor(changeService: ChangeInfoService);
    changeProfileImage(file: Express.Multer.File, user_wallet_address: string): Promise<{
        status: boolean;
        httpStatus: number;
    }>;
    changeUserName(dto: changeDto): Promise<user>;
}
