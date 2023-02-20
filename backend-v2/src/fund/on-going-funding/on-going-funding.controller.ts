import { Controller, Get, Post } from '@nestjs/common';
import { OnGoingFundingService } from './on-going-funding.service';

@Controller('on-going-funding')
export class OnGoingFundingController {
  constructor(private readonly ongoingService: OnGoingFundingService) {}

  @Post()
  async onGoing() {
    return await this.ongoingService.onGoing();
  }

  @Get('all')
  async allList() {
    return await this.ongoingService.allList();
  }
}
