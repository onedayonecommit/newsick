import { Body, Controller, Post } from '@nestjs/common';
import { funding } from '@prisma/client';
import { FundSupplyUpdateService } from './fund-supply-update.service';
import { fundSupplyDto } from './fund-supply.dto';

@Controller('fund-supply-update')
export class FundSupplyUpdateController {
  constructor(private readonly fundSupplyService: FundSupplyUpdateService) {}

  @Post('add')
  async funding(@Body() dto: fundSupplyDto): Promise<funding> {
    return await this.fundSupplyService.funding(dto);
  }

  @Post('refund')
  async refund(@Body() dto: fundSupplyDto): Promise<funding> {
    return await this.fundSupplyService.refund(dto);
  }
}
