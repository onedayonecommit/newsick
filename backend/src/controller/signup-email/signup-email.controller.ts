import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { RedisService } from 'src/service/redis/redis.service';
import { SignupEmailService } from 'src/service/signup-email/signup-email.service';

@Controller('users')
export class SignupEmailController {
  constructor(
    private readonly emailService: SignupEmailService,
    private readonly redisService: RedisService,
  ) {}
  @Post('email-verify')
  async verifyEmail(
    @Query('signupVerifyToken') tokenvalue: string,
    @Query('user_email') user_email: string,
  ) {
    const result = await this.redisService.getRedis(user_email);
    if (result == tokenvalue) {
      return await this.emailService.confirmEamil(user_email);
    } else {
      throw new HttpException('잘못 요청함', HttpStatus.BAD_REQUEST);
    }
  }
}
