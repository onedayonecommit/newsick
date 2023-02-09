import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { user } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LoginService {
  constructor(private readonly db: PrismaService) {}

  async userConnect(@Body() user_wallet_address: string): Promise<user | null> {
    try {
      const result = await this.db.user.findUnique({
        where: { user_wallet_address },
        include: { creator: { where: { creator_id: user_wallet_address } } },
      });
      const resDto = { ...result, createStatus: false };
      if (result) {
        resDto.createStatus = true;
        return resDto;
      } else {
        return resDto;
      }
    } catch (error) {
      throw new HttpException(
        'login server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
