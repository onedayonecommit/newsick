import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { user } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { DuplicateCheckService } from '../duplicate-check/duplicate-check.service';
import { joinDto } from './join.dto';

@Injectable()
export class JoinService {
  constructor(
    private readonly db: PrismaService,
    private readonly duplicateService: DuplicateCheckService,
  ) {}

  /** 회원가입 함수 첫번째 파라미터 == joinDto */
  async userJoin(joinDto: joinDto): Promise<user> {
    const { user_email, user_name, user_wallet_address, is_creator } = joinDto;
    try {
      await this.duplicateService.userEmailCheck(user_email);
      await this.duplicateService.userNameCheck(user_name);
      await this.duplicateService.userWalletCheck(user_wallet_address);
      return await this.db.user.create({
        data: {
          user_email: user_email,
          user_name: user_name,
          user_wallet_address: user_wallet_address,
          creator: {
            create: [{ is_creator: is_creator }],
          },
        },
      });
    } catch (error) {
      throw new HttpException(
        'signUp server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
