import { Body, Controller, Post } from '@nestjs/common';
import { QueryDataService } from './query-data.service';

@Controller('query-data')
export class QueryDataController {
  constructor(private readonly queryDataService: QueryDataService) {}

  @Post('ing')
  async ingquery(_tokenId: Number[]) {
    let _arr = [];
    for (let i = 0; i < _tokenId.length; i++) {
      const _temp = await this.queryDataService.find_ingData(_tokenId[i]);
      _arr.push(_temp);
    }
    return _arr;
  }
}
