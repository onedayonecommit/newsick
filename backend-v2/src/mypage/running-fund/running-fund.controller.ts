import { Body, Controller, Post } from '@nestjs/common';
import { funding } from '@prisma/client';
import { runningFundDto } from './running-fund.dto';
import { RunningFundService } from './running-fund.service';

@Controller('mypage')
export class RunningFundController {
  constructor(private readonly runningService: RunningFundService) {}

  @Post('creator/running-fund')
  async myFundList(@Body() dto: runningFundDto): Promise<funding[]> {
    console.log('data', dto);
    return await this.runningService.myFundList(dto.user_wallet_address);
  }
}
