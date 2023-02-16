/// <reference types="multer" />
import { IpfsUploadService } from 'src/nft-storage/ipfs-upload/ipfs-upload.service';
import { ipfsReturnDto } from 'src/nft-storage/ipfs-upload/return.dto';
import { createFundMainDto } from './create-fund.dto';
import { CreateFundService } from './create-fund.service';
export declare class CreateFundController {
    private readonly createFundService;
    private readonly ipfsUploadService;
    constructor(createFundService: CreateFundService, ipfsUploadService: IpfsUploadService);
    createMetadata(file: Express.Multer.File): Promise<ipfsReturnDto>;
    createFund(fundDto: createFundMainDto): Promise<void>;
}
