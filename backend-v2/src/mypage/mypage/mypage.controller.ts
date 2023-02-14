import { Body, Controller, Post } from '@nestjs/common';
import { user } from '@prisma/client';
import { heartNftDto, myPageDto } from './mypage.dto';
import { MypageService } from './mypage.service';

@Controller('mypage')
export class MypageController {
  constructor(private readonly myPageService: MypageService) {}

  @Post('second')
  async myPage(@Body() dto: myPageDto): Promise<user> {
    console.log('hi');
    return await this.myPageService.myPage(dto.user_wallet_address);
  }

  @Post('heartList')
  async myHeartList(@Body() dto: heartNftDto) {
    return await this.myPageService.myPageList(dto);
  }
}
