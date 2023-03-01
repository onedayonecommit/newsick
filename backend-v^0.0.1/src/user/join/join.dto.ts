import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class joinDto {
  @IsEmail()
  user_email: string;
  @IsString()
  @IsNotEmpty()
  user_wallet_address: string;
  @IsString()
  user_name: string;
  @IsBoolean()
  is_creator: boolean;
}
