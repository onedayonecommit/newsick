import { Body, Controller, Post } from '@nestjs/common';
import { totalDto } from './total.dto';
import { TotalService } from './total.service';

@Controller('total')
export class TotalController {
  constructor(private readonly searchService: TotalService) {}

  @Post()
  async search(@Body() dto: totalDto) {
    return await this.searchService;
  }
}
