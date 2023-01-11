import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { emailVerifyResponseDto } from 'src/dto/swagger/response/swagger-email-verify-response.dto/email-verify-rsponse.dto';
import { RedisService } from 'src/service/redis/redis.service';
import { SignupEmailService } from 'src/service/signup-email/signup-email.service';

@Controller('users')
export class SignupEmailController {
  constructor(
    private readonly emailService: SignupEmailService,
    private readonly redisService: RedisService,
  ) {}
  @Post('email-verify')
  @ApiOperation({
    description:
      '회원 가입 진행 후 인증링크 메일 발송 Api / 메일 인증 안할 시 사이트 전반적인 기능 이용 불가',
    summary: 'email-verify api',
  })
  @ApiCreatedResponse({
    type: emailVerifyResponseDto,
  })
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
