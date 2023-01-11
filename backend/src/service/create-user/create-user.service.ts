import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from '../../dto/create-user/create-user.dto';
import { SignupEmailService } from '../signup-email/signup-email.service';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly emailService: SignupEmailService,
  ) {}
  /** 유저 가입 함수 */
  async createUser(data: CreateUserDto): Promise<object> {
    await this.checkUser(data.user_email);
    await this.checkWallet(data.user_wallet_address);
    await this.checkName(data.user_name);
    this.emailService.sendSignUpAuthMail(data.user_email);
    return await this.prismaService.users.create({ data }).then(() => {
      return { signUpStatus: true, httpStatus: 200 };
    });
  }

  /** 유저 아이디 중복 검사 함수 */
  async checkUser(user_email: string) {
    const idResult = await this.prismaService.users.findUnique({
      where: { user_email },
    });
    if (idResult) {
      throw new HttpException('아이디 이미 사용중', HttpStatus.BAD_REQUEST);
    }
  }

  /** 유저 지갑주소 중복 검사 함수 */
  async checkWallet(user_wallet_address: string) {
    const walletResult = await this.prismaService.users.findUnique({
      where: { user_wallet_address },
    });
    if (walletResult) {
      throw new HttpException('지갑주소 이미 사용중', HttpStatus.BAD_REQUEST);
    }
  }

  /** 유저 닉네임 중복 검사 함수 */
  async checkName(user_name: string) {
    const nameResult = await this.prismaService.users.findUnique({
      where: { user_name },
    });
    if (nameResult) {
      throw new HttpException('닉네임 이미 사용중', HttpStatus.BAD_REQUEST);
    }
  }
}
