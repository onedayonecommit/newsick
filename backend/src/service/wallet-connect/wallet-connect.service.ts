import { Injectable } from '@nestjs/common';
import { users } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class WalletConnectService {
  constructor(private readonly prismaService: PrismaService) {}

  async walletCheck(user_wallet_address: string): Promise<users> {
    const result = await this.prismaService.users.findUnique({
      where: { user_wallet_address },
    });
    return result;
  }
}
