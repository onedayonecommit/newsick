import { IsNumber, IsOptional, IsString } from 'class-validator';

export class playlistDto {
  @IsString()
  user_wallet_address: string;
  @IsNumber()
  @IsOptional()
  funding_music_id?: number;
  @IsNumber()
  @IsOptional()
  normal_music_id?: number;
}
