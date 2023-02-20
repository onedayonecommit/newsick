import { Body, Controller, Post } from '@nestjs/common';
import { totalDto } from './total.dto';
import { TotalService } from './total.service';

@Controller('total')
export class TotalController {
  constructor(private readonly searchService: TotalService) {}

  @Post('search')
  async search(@Body() dto: totalDto) {
    return await this.searchService.search(dto.searchWord);
  }

  @Post('fund')
  async fundingList() {
    return await this.searchService.fundSearchService();
  }

  @Post('market')
  async marketList() {
    return await this.searchService.marketSearchService();
  }

  @Post('nMusic')
  async nomalMusicList() {
    return await this.searchService.nMusicSearchService();
  }

  @Post('fMusic')
  async fundMusicList() {
    return await this.searchService.fMusicSearchService();
  }
}
