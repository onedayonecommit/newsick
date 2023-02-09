import { Injectable } from '@nestjs/common';
import { NFTStorage, Blob } from 'nft.storage';
import { ipfsReturnDto } from './return.dto';
@Injectable()
export class IpfsUploadService {
  client = new NFTStorage({
    token: process.env.NFT_STORAGE_TOKEN,
  });
  async ipfsUpload(file: Express.Multer.File): Promise<ipfsReturnDto> {
    const fileCid = await this.client.storeBlob(new Blob([file.buffer]));
    const fileUrl = 'https://' + fileCid + '.ipfs.nftstorage.link';

    const obj = {
      name: 'The Sample Text',
      information: 'This is a sample text file.',
      creator: 'Michelle Branagah',
      file_url: fileUrl,
    };

    const metadata = new Blob([JSON.stringify(obj)], {
      type: 'application/json',
    });
    const metadataCid = await this.client.storeBlob(metadata);
    const metadataUrl = 'https://' + metadataCid + '.ipfs.nftstorage.link';
    return { fileUrl, metadataUrl };
  }
}
