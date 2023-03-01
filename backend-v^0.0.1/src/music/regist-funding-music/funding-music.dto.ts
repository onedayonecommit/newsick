import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class fundingMusicDto {
  @IsNumber()
  funding_id: number; // 토큰아이디 == 펀딩 신청 할 때 온체인에 setUri 하고 이벤트 결과값으로 받은 토큰아이디임
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
