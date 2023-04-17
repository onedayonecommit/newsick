import { Body, Controller, Post } from '@nestjs/common';
import { fundFinishDto } from './fund-finish.dto';
import { FundFinishService } from './fund-finish.service';

@Controller('fund-finish')
export class FundFinishController {
  constructor(private readonly fundFinishService: FundFinishService) {}

  @Post()
  async fundingFinish(@Body() dto: fundFinishDto) {
    return await this.fundFinishService.fundingFinish(dto);
  }
}
