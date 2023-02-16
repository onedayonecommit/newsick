import { IsString } from 'class-validator';

export class runningFundDto {
  @IsString()
  user_wallet_address: string;
}
