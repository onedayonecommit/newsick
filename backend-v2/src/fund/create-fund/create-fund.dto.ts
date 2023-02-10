import {
  IsDateString,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class createFundDto {
  @IsNumber()
  id: number;
  @IsString()
  creator_id: string;
  @IsString()
  @IsOptional()
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
  @IsString()
  discord_address: string;
  @IsString()
  funding_title: string;
  @IsString()
  nft_name: string;
}

export class createFundLyricsDto {
  @IsString()
  lyrics_name: string;
  @IsString()
  lyrics_sns_address: string;
  @IsString()
  lyrics_info: string;
}
export class createFundMusicDto {
  @IsString()
  music_name: string;
  @IsString()
  music_sns_address: string;
  @IsString()
  music_info: string;
}
export class createFundSingerDto {
  @IsString()
  singer_name: string;
  @IsString()
  singer_sns_address: string;
  @IsString()
  singer_info: string;
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
