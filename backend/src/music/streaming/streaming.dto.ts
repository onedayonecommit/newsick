import { IsNumber, IsString } from 'class-validator';

export class streamingDto {
  @IsString()
  user_wallet_address: string;
  @IsNumber()
  music_id: number;
}
