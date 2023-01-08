import { Injectable } from '@nestjs/common';
import Mail from 'nodemailer/lib/mailer';
import * as nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';
import { ConfigService } from '@nestjs/config';
import { EmailOptions } from 'src/interface/mail.interface';

@Injectable()
export class SignupEmailService {
  private transporter: Mail;
  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: this.configService.get<string>('MAIL_ID'),
        pass: this.configService.get<string>('MAIL_PASSWORD'),
      },
    });
  }
  async sendMemberJoinVerification(emailAddress: string) {
    // 이 링크를 통해 우리 서비스로 이메일 인증 요청이 들어옴
    const baseUrl = 'http://localhost:3000'; // TODO: config
    const signupVerifyToken = uuidv4();
    console.log(signupVerifyToken);
    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;

    // 메일 본문 구성 form 태그를 이용해 POST 요청 실시
    const mailOptions: EmailOptions = {
      to: emailAddress,
      subject: '가입 인증 메일',
      html: `
        가입확인 버튼를 누르시면 가입 인증이 완료됩니다.<br/>
        <form action="${url}" method="POST">
          <button>가입확인</button>
        </form>
      `,
    };

    // transporter 객체를 이용해 메일 전송
    return await this.transporter.sendMail(mailOptions);
  }
}
