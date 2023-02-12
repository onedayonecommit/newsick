import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { user } from '@prisma/client';
import { bool } from 'aws-sdk/clients/signer';
import { EmailSendService } from 'src/email/email-send/email-send.service';
import { PrismaService } from 'src/prisma.service';
import { DuplicateCheckService } from '../duplicate-check/duplicate-check.service';
import { joinDto } from './join.dto';

@Injectable()
export class JoinService {
  constructor(
    private readonly db: PrismaService,
    private readonly duplicateService: DuplicateCheckService,
    private readonly mailService: EmailSendService,
  ) {}

  /** 회원가입 함수 첫번째 파라미터 == joinDto */
  async userJoin(joinDto: joinDto): Promise<user | string> {
    const { user_email, user_name, user_wallet_address, is_creator } = joinDto;
    try {
      const mailCheck = await this.duplicateService.userEmailCheck(user_email);
      const nameCheck = await this.duplicateService.userNameCheck(user_name);
      const walletCheck = await this.duplicateService.userWalletCheck(
        user_wallet_address,
      );
      if (!mailCheck) return '이메일';
      if (!nameCheck) return '닉네임';
      if (!walletCheck) return '지갑 주소';
      const result = await this.db.user.create({
        data: {
          user_email,
          user_name,
          user_wallet_address,
          creator: {
            create: [{ is_creator: is_creator }],
          },
          ticket: {
            create: [{ ticket_type: 0 }],
          },
        },
      });
      const resDto = { ...result, createStatus: true };
      if (result) {
        this.mailService.signUpMail(user_email);
        console.log(resDto);
        return resDto;
      }
    } catch (error) {
      throw new HttpException(
        'signUp server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
