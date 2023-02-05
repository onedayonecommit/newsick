import {
  IsDate,
  IsDateString,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

export class createFundDto {
  @IsNumber()
  id: number;
  @IsString()
  creator_id: string;
  @IsString()
  category?: string;
  @IsString()
  funding_info: string;
  @IsDateString()
  funding_start_date: Date;
  @IsDateString()
  funding_finish_date: Date;
  @IsDateString()
  funding_production_date: Date;
  @IsString()
  funding_nft_image: string;
  @IsString()
  funding_metadata: string;
}

export class createFundLyricsDto {
  @IsString()
  lyrics_name: string;
  @IsString()
  lyrics_info: string;
  @IsNumber()
  lyrics_sex: number;
}
export class createFundMusicDto {
  @IsString()
  music_name: string;
  @IsString()
  music_info: string;
  @IsNumber()
  music_sex: number;
}
export class createFundSingerDto {
  @IsString()
  singer_name: string;
  @IsString()
  singer_info: string;
  @IsNumber()
  singer_sex: number;
}

export class createFundMainDto {
  @IsObject()
  fund: createFundDto;
  @IsObject()
  lyrics_maker: createFundLyricsDto;
  @IsObject()
  music_maker: createFundMusicDto;
  @IsObject()
  singer: createFundSingerDto;
}
