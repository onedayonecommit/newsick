import { Body, Controller, Post } from '@nestjs/common';
import { user } from '@prisma/client';
import { myPageDto } from './mypage.dto';
import { MypageService } from './mypage.service';

@Controller('mypage')
export class MypageController {
  constructor(private readonly myPageService: MypageService) {}

  @Post()
  async myPage(@Body() dto: myPageDto): Promise<user> {
    return await this.myPageService.myPage(dto.user_wallet_address);
  }
}
