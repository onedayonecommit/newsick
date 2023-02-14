import { MailerService } from '@nestjs-modules/mailer';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class EmailSendService {
  constructor(private readonly mail: MailerService) {}

  async signUpMail(user_email: string): Promise<boolean> {
    try {
      await this.mail.sendMail({
        to: user_email,
        subject: 'Hello',
        template: '../templates/signup',
        context: { user_email },
      });
      return true;
    } catch (error) {
      throw new HttpException(
        'mail server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
