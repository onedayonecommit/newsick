import { Module } from '@nestjs/common';
import { CreatorCheckService } from 'src/auth/creator-check/creator-check.service';
import { IpfsUploadService } from 'src/nft-storage/ipfs-upload/ipfs-upload.service';
import { PrismaService } from 'src/prisma.service';
import { CreateFundController } from './create-fund/create-fund.controller';
import { CreateFundService } from './create-fund/create-fund.service';
import { OnGoingFundingController } from './on-going-funding/on-going-funding.controller';
import { OnGoingFundingService } from './on-going-funding/on-going-funding.service';

@Module({
  controllers: [CreateFundController, OnGoingFundingController],
  providers: [
    CreateFundService,
    PrismaService,
    IpfsUploadService,
    CreatorCheckService,
    OnGoingFundingService,
  ],
})
export class FundModule {}
