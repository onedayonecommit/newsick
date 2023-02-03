import { Module } from '@nestjs/common';
import { CreateFundController } from './create-fund/create-fund.controller';
import { CreateFundService } from './create-fund/create-fund.service';

@Module({
  controllers: [CreateFundController],
  providers: [CreateFundService],
})
export class FundModule {}
