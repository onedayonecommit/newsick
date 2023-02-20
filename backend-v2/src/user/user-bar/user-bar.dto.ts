import { IsString } from 'class-validator';

export class userBarDto {
  @IsString()
  user_wallet_address: string;
}
