import { IsNumber, IsOptional, IsString, ValidateIf } from 'class-validator';

export class likeMusicDto {
  @IsString()
  user_wallet_address: string;
  @IsNumber()
  @IsOptional()
  normal_music_id?: number;
  @IsNumber()
  @IsOptional()
  funding_music_id?: number;
}
