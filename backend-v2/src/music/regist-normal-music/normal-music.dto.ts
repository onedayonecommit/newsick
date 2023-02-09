import { IsOptional } from 'class-validator';

export class normalMusicDto {
  //   @IsString()
  music_name: string;
  //   @IsString()
  @IsOptional()
  singer?: string;
  //   @IsString()
  @IsOptional()
  music_lyrics?: string;
  //   @IsString()
  @IsOptional()
  lyrics_maker?: string;
  //   @IsString()
  music_maker: string;
  //   @IsString()
  music_genre: string;
  //   @IsString()
  album_name: string;
  //   @IsBoolean()
  title: boolean;
}
