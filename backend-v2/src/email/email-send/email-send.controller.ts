import { Body, Controller, Post } from '@nestjs/common';
import { EmailSendService } from './email-send.service';
import { emailDto } from './email.dto';

@Controller('email-send')
export class EmailSendController {
  constructor(private readonly mail: EmailSendService) {}
  @Post()
  async signUpMail(@Body() dto: emailDto): Promise<boolean> {
    return await this.mail.signUpMail(dto.user_email);
  }
}
