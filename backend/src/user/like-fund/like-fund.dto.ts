import { IsNumber, IsString } from 'class-validator';

export class likeFundDto {
  @IsString()
  user_wallet_address: string;
  @IsNumber()
  funding_id: number;
}
