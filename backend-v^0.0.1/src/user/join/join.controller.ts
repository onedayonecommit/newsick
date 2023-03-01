import { Body, Controller, Post } from '@nestjs/common';
import { user } from '@prisma/client';
import { joinDto } from './join.dto';
import { JoinService } from './join.service';

@Controller('user')
export class JoinController {
  constructor(private readonly joinService: JoinService) {}

  @Post('join')
  async userJoin(@Body() joinDto: joinDto): Promise<user | string> {
    console.log('가입 신청');
    return await this.joinService.userJoin(joinDto);
  }
}
