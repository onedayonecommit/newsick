import { IsString } from 'class-validator';

export class loginDto {
  @IsString()
  user_wallet_address: string;
}
