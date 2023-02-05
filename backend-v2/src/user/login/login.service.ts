import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { user } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LoginService {
  constructor(private readonly db: PrismaService) {}

  async userConnect(@Body() user_wallet_address: string): Promise<user | null> {
    try {
      return await this.db.user.findUnique({
        where: { user_wallet_address },
      });
    } catch (error) {
      throw new HttpException(
        'login server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
