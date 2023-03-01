import { Module } from '@nestjs/common';
import { IpfsUploadService } from './ipfs-upload/ipfs-upload.service';

@Module({
  providers: [IpfsUploadService],
})
export class NftStorageModule {}
