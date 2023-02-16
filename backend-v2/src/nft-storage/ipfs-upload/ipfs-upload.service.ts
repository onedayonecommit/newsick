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
    const fileUrl = 'https://nftstorage.link/ipfs/' + fileCid + '/';

    const obj = {
      name: dto.nft_name,
      description: dto.description,
      image: fileUrl,
      url: 'n2wsic.com',
      properties: {
        producer: dto.producer,
      },
    };
    // {
    //   "name": "My Awesome ERC-1155 Token",
    //   "description": "This is an example ERC-1155 token with metadata",
    //   "image": "https://example.com/token-image.png",
    //   "url": "https://example.com/token-details",
    //   "properties": {
    //     "foo": "bar",
    //     "baz": 42
    //   }
    // }

    const metadata = new Blob([JSON.stringify(obj)], {
      type: 'application/json',
    });
    const metadataCid = await this.client.storeBlob(metadata);
    const metadataUrl = 'https://nftstorage.link/ipfs/' + metadataCid + '/';
    return { fileUrl, metadataUrl };
  }
}
