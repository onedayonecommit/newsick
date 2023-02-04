import { Body, Controller, Post } from '@nestjs/common';
import { user } from '@prisma/client';
import { loginDto } from './login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async userConnect(@Body() loginDto: loginDto): Promise<user | null> {
    return await this.loginService.userConnect(loginDto.user_wallet_address);
  }
}
