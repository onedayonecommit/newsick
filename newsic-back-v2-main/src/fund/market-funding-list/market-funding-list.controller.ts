import { Controller, Get, Param } from '@nestjs/common';
import { funding } from '@prisma/client';
import { MarketFundingListService } from './market-funding-list.service';

@Controller('market-funding-list')
export class MarketFundingListController {
  constructor(private readonly marketListService: MarketFundingListService) {}

  @Get('all')
  async getList(): Promise<object[]> {
    console.log('market on');
    return await this.marketListService.getList();
  }

  @Get(':id')
  async getDetailList(@Param('id') id: number) {
    console.log('디테일 보러옴', id);
    return await this.marketListService.getDetailList(id);
  }
}
