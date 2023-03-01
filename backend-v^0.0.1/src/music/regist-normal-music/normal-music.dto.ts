import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class normalMusicDto {
  @IsString()
  @IsOptional()
  music_name: string;
  @IsString()
  @IsOptional()
  singer?: string;
  @IsString()
  @IsOptional()
  music_lyrics?: string;
  @IsString()
  @IsOptional()
  lyrics_maker?: string;
  @IsString()
  @IsOptional()
  music_maker: string;
  @IsString()
  @IsOptional()
  music_genre: string;
  @IsString()
  @IsOptional()
  album_name: string;
  @IsBoolean()
  @IsOptional()
  title: boolean;
  @IsString()
  @IsOptional()
  lyrics: string;

  @IsString()
  @IsOptional()
  music_path: string;

  @IsString()
  @IsOptional()
  image_path: string;
}
