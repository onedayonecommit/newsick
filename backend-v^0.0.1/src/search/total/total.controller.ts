import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { totalDto } from './total.dto';
import { TotalService } from './total.service';

@Controller('total')
export class TotalController {
  constructor(private readonly searchService: TotalService) {}

  @Get('')
  async search(@Query('word') word: string) {
    return await this.searchService.search(word);
  }
}

