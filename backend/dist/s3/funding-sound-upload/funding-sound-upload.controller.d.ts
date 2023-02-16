/// <reference types="multer" />
import { FundingSoundUploadService } from './funding-sound-upload.service';
export declare class FundingSoundUploadController {
    private readonly fundingSoundUpload;
    constructor(fundingSoundUpload: FundingSoundUploadService);
    testmp3(mp3: Express.Multer.File): Promise<void>;
}
