import { Controller, Post } from '@nestjs/common';
import { OnGoingFundingService } from './on-going-funding.service';

@Controller('on-going-funding')
export class OnGoingFundingController {
  constructor(private readonly ongoingService: OnGoingFundingService) {}

  @Post()
  async onGoing() {
    return await this.ongoingService.onGoing();
  }
}
