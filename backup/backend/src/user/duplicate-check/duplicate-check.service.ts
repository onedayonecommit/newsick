import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DuplicateCheckService {
  constructor(private readonly db: PrismaService) {}

  /** 이메일 중복검사 함수 */
  async userEmailCheck(user_email: string) {
    try {
      const result = await this.db.user.findUnique({
        where: { user_email },
      });
      if (result) return false;
      else return true;
    } catch (error) {
      throw new HttpException(
        'duplicate check service error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /** 닉네임 중복 검사 함수 */
  async userNameCheck(user_name: string) {
    try {
      const result = await this.db.user.findUnique({
        where: { user_name },
      });
      if (result) return false;
      else return true;
      // throw new HttpException(
      //   'already in use this name',
      //   HttpStatus.BAD_REQUEST,
      // );
    } catch (error) {
      throw new HttpException(
        'duplicate check service error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /** 지갑주소 중복 확인 */
  async userWalletCheck(user_wallet_address: string) {
    try {
      const result = await this.db.user.findUnique({
        where: { user_wallet_address },
      });
      if (result) return false;
      // throw new HttpException(
      //   'already in use this wallet_address',
      //   HttpStatus.OK,
      // );
      else return true;
    } catch (error) {
      throw new HttpException(
        'duplicate check service error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
