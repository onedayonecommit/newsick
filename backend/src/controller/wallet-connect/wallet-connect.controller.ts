import { Body, Controller, Post } from '@nestjs/common';
import { walletCheckDto } from 'src/dto/wallet-connect/wallet-connect-dto';
import { WalletConnectService } from 'src/service/wallet-connect/wallet-connect.service';

@Controller('wallet-connect')
export class WalletConnectController {
  constructor(private readonly walletService: WalletConnectService) {}

  @Post('check')
  async loginCheck(@Body() walletDto: walletCheckDto) {
    return await this.walletService.walletCheck(walletDto.user_wallet_address);
  }
}
