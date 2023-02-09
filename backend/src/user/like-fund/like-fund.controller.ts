import { Body, Controller, Post } from '@nestjs/common';
import { likeFundDto } from './like-fund.dto';
import { LikeFundService } from './like-fund.service';

@Controller('like-fund')
export class LikeFundController {
  constructor(private readonly likeFundService: LikeFundService) {}

  @Post('add')
  async likeFund(@Body() dto: likeFundDto) {
    return await this.likeFundService.likeFund(dto);
  }
}
