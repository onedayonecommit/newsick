import { Body, Controller, Post } from '@nestjs/common';
import { user } from '@prisma/client';
import { joinDto } from './join.dto';
import { JoinService } from './join.service';

@Controller('join')
export class JoinController {
  constructor(private readonly joinService: JoinService) {}

  @Post()
  async userJoin(@Body() joinDto: joinDto): Promise<user> {
    return await this.joinService.userJoin(joinDto);
  }
}
