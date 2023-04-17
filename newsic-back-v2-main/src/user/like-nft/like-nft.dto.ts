import { IsNumber, IsString } from 'class-validator';

export class likeNftDto {
  @IsString()
  user_wallet_address: string;
  @IsNumber()
  funding_id: number;
}
