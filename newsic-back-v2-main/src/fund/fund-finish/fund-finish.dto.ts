import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class fundFinishDto {
  @IsNumber()
  funding_id: number;
  @IsString()
  user_wallet_address: string;
  @IsBoolean()
  boon_status: boolean;
}
