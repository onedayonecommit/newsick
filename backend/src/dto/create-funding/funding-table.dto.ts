import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class fundingTableDto {
  @IsString()
  @IsNotEmpty()
  creator_wallet_address: string;

  @IsString()
  category?: string;
  @IsString()
  music_maker_info_url?: string;
  @IsString()
  lyrics_maker_info_url?: string;
  @IsString()
  singer_info_url?: string;
  @IsNumber()
  music_feel?: number;
  @IsString()
  funding_info?: string;
  @IsDate()
  start_date: Date;
  @IsDate()
  sale_date: Date;
}
