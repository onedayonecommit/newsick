"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpfsUploadService = void 0;
const common_1 = require("@nestjs/common");
const nft_storage_1 = require("nft.storage");
let IpfsUploadService = class IpfsUploadService {
    constructor() {
        this.client = new nft_storage_1.NFTStorage({
            token: process.env.NFT_STORAGE_TOKEN,
        });
    }
    async ipfsUpload(file) {
        const fileCid = await this.client.storeBlob(new nft_storage_1.Blob([file.buffer]));
        const fileUrl = 'https://' + fileCid + '.ipfs.nftstorage.link';
        const obj = {
            name: 'The Sample Text',
            information: 'This is a sample text file.',
            creator: 'Michelle Branagah',
            file_url: fileUrl,
        };
        const metadata = new nft_storage_1.Blob([JSON.stringify(obj)], {
            type: 'application/json',
        });
        const metadataCid = await this.client.storeBlob(metadata);
        const metadataUrl = 'https://' + metadataCid + '.ipfs.nftstorage.link';
        return { fileUrl, metadataUrl };
    }
};
IpfsUploadService = __decorate([
    (0, common_1.Injectable)()
], IpfsUploadService);
exports.IpfsUploadService = IpfsUploadService;
//# sourceMappingURL=ipfs-upload.service.js.map