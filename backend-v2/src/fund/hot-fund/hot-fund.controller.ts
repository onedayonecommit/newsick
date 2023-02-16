import { Controller, Post } from '@nestjs/common';
import { HotFundService } from './hot-fund.service';

@Controller('hot-fund')
export class HotFundController {
  constructor(private readonly hotFundService: HotFundService) {}

  @Post('top1')
  async hotFund() {
    return await this.hotFundService.hotFundList();
  }

  @Post('all/list')
  async fundingList() {
    return await this.hotFundService.fundingList();
  }
}
