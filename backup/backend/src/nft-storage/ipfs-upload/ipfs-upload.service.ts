import { Injectable } from '@nestjs/common';
import { NFTStorage, Blob } from 'nft.storage';
import { metadataDto } from 'src/fund/create-fund/create-fund.dto';
import { ipfsReturnDto } from './return.dto';
@Injectable()
export class IpfsUploadService {
  client = new NFTStorage({
    token: process.env.NFT_STORAGE_TOKEN,
  });
  async ipfsUpload(
    file: Express.Multer.File,
    dto: metadataDto,
  ): Promise<ipfsReturnDto> {
    const fileCid = await this.client.storeBlob(new Blob([file.buffer]));
    const fileUrl = 'https://' + fileCid + '.ipfs.nftstorage.link';

    const obj = {
      name: dto.nft_name,
      image: fileUrl,
      url: 'newsic.com',
      metadata: {
        producer: dto.producer,
        description: dto.description,
      },
    };

    const metadata = new Blob([JSON.stringify(obj)], {
      type: 'application/json',
    });
    const metadataCid = await this.client.storeBlob(metadata);
    const metadataUrl = 'https://' + metadataCid + '.ipfs.nftstorage.link';
    return { fileUrl, metadataUrl };
  }
}
