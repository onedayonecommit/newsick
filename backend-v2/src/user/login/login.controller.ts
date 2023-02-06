import { Body, Controller, Post } from '@nestjs/common';
import { user } from '@prisma/client';
import { loginDto } from './login.dto';
import { LoginService } from './login.service';

@Controller('user')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  async userConnect(@Body() loginDto: loginDto): Promise<user | null> {
    console.log('데이터 들어옴');
    return await this.loginService.userConnect(loginDto.user_wallet_address);
  }
}
