import { IsNumber, IsOptional, IsString } from 'class-validator';

export class myPageDto {
  @IsString()
  user_wallet_address: string;
}

export class heartMusicDto {
  @IsNumber()
  @IsOptional()
  funding_music_id: number;
  @IsNumber()
  @IsOptional()
  normal_music_id: number;
}

export class playlistInfoDto {
  @IsNumber()
  @IsOptional()
  funding_music_id: number;
  @IsNumber()
  @IsOptional()
  normal_music_id: number;
}

export class heartNftDto {
  @IsString()
  user_wallet_address: string;
}
