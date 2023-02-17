import { Module } from '@nestjs/common';
import { CreatorCheckService } from 'src/auth/creator-check/creator-check.service';
import { IpfsUploadService } from 'src/nft-storage/ipfs-upload/ipfs-upload.service';
import { PrismaService } from 'src/prisma.service';
import { CreateFundController } from './create-fund/create-fund.controller';
import { CreateFundService } from './create-fund/create-fund.service';
import { OnGoingFundingController } from './on-going-funding/on-going-funding.controller';
import { OnGoingFundingService } from './on-going-funding/on-going-funding.service';
import { FundSupplyUpdateController } from './fund-supply-update/fund-supply-update.controller';
import { FundSupplyUpdateService } from './fund-supply-update/fund-supply-update.service';
import { RunningFundController } from '../mypage/running-fund/running-fund.controller';
import { RunningFundService } from '../mypage/running-fund/running-fund.service';
import { FundNoticeController } from './fund-notice/fund-notice.controller';
import { FundNoticeService } from './fund-notice/fund-notice.service';
import { HotFundController } from './hot-fund/hot-fund.controller';
import { HotFundService } from './hot-fund/hot-fund.service';
// import { QueryDataController } from './query-data/query-data.controller';
// import { QueryDataService } from './query-data/query-data.service';

@Module({
  controllers: [
    CreateFundController,
    OnGoingFundingController,
    FundSupplyUpdateController,
    RunningFundController,
    FundNoticeController,
    HotFundController,
    // QueryDataController,
  ],
  providers: [
    CreateFundService,
    PrismaService,
    IpfsUploadService,
    CreatorCheckService,
    OnGoingFundingService,
    FundSupplyUpdateService,
    RunningFundService,
    FundNoticeService,
    HotFundService,
    // QueryDataService,
  ],
})
export class FundModule {}
