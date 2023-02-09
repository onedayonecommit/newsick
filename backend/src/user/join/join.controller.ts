import { Body, Controller, Post } from '@nestjs/common';
import { user } from '@prisma/client';
import { joinDto, RemoveDto } from './join.dto';
import { JoinService } from './join.service';

@Controller('user')
export class JoinController {
  constructor(private readonly joinService: JoinService) {}

  @Post('join')
  async userJoin(@Body() joinDto: joinDto): Promise<user> {
    return await this.joinService.userJoin(joinDto);
  }

  // @Post('remove')
  // async userRemove(userAdd: RemoveDto) {
  //   await this.joinService.userRemove(userAdd);
  // }
}
