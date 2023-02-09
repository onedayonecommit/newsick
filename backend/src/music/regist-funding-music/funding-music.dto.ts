import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class fundingMusicDto {
  @IsNumber()
  funding_id: number;
  @IsString()
  music_name: string;
  @IsString()
  @IsOptional()
  music_lyrics?: string;
  @IsString()
  music_genre: string;
  @IsString()
  @IsOptional()
  music_maker?: string;
  @IsString()
  @IsOptional()
  lyrics_maker?: string;
  @IsString()
  @IsOptional()
  singer?: string;
  @IsString()
  album_name: string;
  @IsBoolean()
  title: boolean;
}

// 회원가입을 해
