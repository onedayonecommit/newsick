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

export class metadataDto {
  @IsString()
  nft_name: string;
  @IsString()
  producer: string;
  @IsString()
  description: string;
}
// 펀딩 신청할 때 객체 안에 객체 던지는거 이렇게 작성해주세요
/**
  {
    fund:{
        id:number,
    },
    lyrics_maker:{
        lyrics_name:string,
        lyrics_info:string,
        lyrics_sns_address:string
    },
    music_maker:{
        music_name: string;
        music_sns_address: string;
        music_info: string;
    },
    singer:{
        singer_name: string;
        singer_sns_address: string;
        singer_info: string;
    }
}
 */
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
