import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { users } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class CreateUserService {
  constructor(private readonly prismaService: PrismaService) {}
  async createUser(data: CreateUserDto) {
    await this.checkUser(data.user_email);
    await this.checkWallet(data.user_wallet_address);
    return this.prismaService.users.create({ data });
  }

  async checkUser(user_email: string) {
    const idResult = this.prismaService.users.findUnique({
      where: { user_email },
    });
    if (idResult) {
      throw new HttpException('아이디 이미 사용중', HttpStatus.BAD_REQUEST);
    }
  }

  async checkWallet(user_wallet_address: string) {
    const walletResult = this.prismaService.users.findUnique({
      where: { user_wallet_address },
    });
    if (walletResult) {
      throw new HttpException('이미 사용중', HttpStatus.BAD_REQUEST);
    }
  }
}
