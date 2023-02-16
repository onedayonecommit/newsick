/// <reference types="multer" />
import { NFTStorage } from 'nft.storage';
import { ipfsReturnDto } from './return.dto';
export declare class IpfsUploadService {
    client: NFTStorage;
    ipfsUpload(file: Express.Multer.File): Promise<ipfsReturnDto>;
}
