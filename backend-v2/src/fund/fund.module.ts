import { Module } from '@nestjs/common';
import { IpfsUploadService } from 'src/nft-storage/ipfs-upload/ipfs-upload.service';
import { PrismaService } from 'src/prisma.service';
import { CreateFundController } from './create-fund/create-fund.controller';
import { CreateFundService } from './create-fund/create-fund.service';

@Module({
  controllers: [CreateFundController],
  providers: [CreateFundService, PrismaService, IpfsUploadService],
})
export class FundModule {}
