import { Body, Controller, Post } from '@nestjs/common';
import { QueryService } from 'src/service/funding/query.service';
import { testDto } from 'src/service/funding/test.dto';

@Controller('funding/information')
export class QueryController {
  constructor(private readonly queryService: QueryService) {}
  @Post()
  async query(@Body() dto: testDto): Promise<any> {
    console.log(dto);
    return await this.queryService.getMany(dto);
  }
}