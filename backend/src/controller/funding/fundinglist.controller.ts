import { Controller, Post, Query } from '@nestjs/common';
import { funding } from '@prisma/client';
import { FundinglistService } from 'src/service/funding/fundinglist.service';

@Controller('fundinglist')
export class FundinglistController {
  constructor(private readonly fundingService: FundinglistService) {}

  @Post()
  async getFundingList(): Promise<funding[]> {
    return await this.fundingService.getFundingList();
  }

  @Post('item')
  async getFundingItem(
    @Query('fundingid') funding_id: number,
  ): Promise<funding> {
    return await this.fundingService.getFundingItem(funding_id);
  }
}