import { IsNumber, IsString } from 'class-validator';

export class getNoticeDto {
  @IsString()
  user_wallet_address: string;
}

export class registNoticeDto {
  @IsString()
  user_wallet_address: string;
  @IsNumber()
  funding_id: number;
  @IsString()
  title: string;
  @IsString()
  content: string;
}

export class updateNoticeDto {
  @IsString()
  user_wallet_address: string;
  @IsString()
  title: string;
  @IsString()
  content: string;
  @IsNumber()
  id: number;
}

export class deleteNoticeDto {
  @IsString()
  user_wallet_address: string;
  @IsNumber()
  id: number;
}
