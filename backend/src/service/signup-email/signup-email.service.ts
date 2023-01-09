import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Mail from 'nodemailer/lib/mailer';
import * as nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';
import { ConfigService } from '@nestjs/config';
import { EmailOptions } from 'src/interface/mail.interface';
import { PrismaService } from 'src/prisma.service';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class SignupEmailService {
  private transporter: Mail;
  constructor(
    private readonly configService: ConfigService,
    private readonly redisService: RedisService,
    private readonly prismaService: PrismaService,
  ) {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: this.configService.get<string>('MAIL_ID'),
        pass: this.configService.get<string>('MAIL_PASSWORD'),
      },
    });
  }

  /** 메일 인증 함수 */
  async confirmEamil(user_email: string): Promise<object> {
    try {
      await this.prismaService.users.update({
        data: { signup_status: true },
        where: { user_email },
      });
      // return { HttpStatus: HttpStatus.NO_CONTENT };
      return { signUpConfirmStatus: true };
    } catch (error) {
      throw new HttpException(
        '가입 승인 실패',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /** 인증 메일 발송 */
  async sendSignUpAuthMail(emailAddress: string) {
    /** 가입 후 인증번호 발송 구조 아래 url 세팅 및 uuid 발급 */
    const baseUrl = 'http://localhost:3000'; // TODO: config
    const signupVerifyToken = uuidv4();
    console.log(signupVerifyToken);
    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}&user_email=${emailAddress}`;

    /** 메일 옵션 구성한 곳 */
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

    /** redis에 해당 유저 이메일 및 uuid 저장 */
    await this.redisService.setRedis({
      user_email: emailAddress,
      user_uuid: signupVerifyToken,
    });

    /** 이메일 인증번호 발송 실패시 에러핸들링 */
    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      throw new HttpException(
        '인증 번호 발송 실패',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
