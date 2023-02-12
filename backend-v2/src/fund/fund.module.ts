import { Module } from '@nestjs/common';
import { CreatorCheckService } from 'src/auth/creator-check/creator-check.service';
import { IpfsUploadService } from 'src/nft-storage/ipfs-upload/ipfs-upload.service';
import { PrismaService } from 'src/prisma.service';
import { CreateFundController } from './create-fund/create-fund.controller';
import { CreateFundService } from './create-fund/create-fund.service';

@Module({
  controllers: [CreateFundController],
  providers: [
    CreateFundService,
    PrismaService,
    IpfsUploadService,
    CreatorCheckService,
  ],
})
export class FundModule {}
