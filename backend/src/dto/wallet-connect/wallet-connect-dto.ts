import { IsString } from 'class-validator';

export class walletCheckDto {
  @IsString()
  user_wallet_address: string;
}
