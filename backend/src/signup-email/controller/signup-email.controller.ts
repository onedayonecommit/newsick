import { Body, Controller } from '@nestjs/common';
import { SignupEmailService } from '../service/signup-email.service';

@Controller('signup/user/verify/email')
export class SignupEmailController {
  constructor(private readonly emailService: SignupEmailService) {}
  async verifyEmail(@Body() user_email: string) {
    this.emailService.sendMemberJoinVerification(user_email);
  }
}
