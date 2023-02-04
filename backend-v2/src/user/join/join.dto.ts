import { bool } from 'aws-sdk/clients/signer';
import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class joinDto {
  @IsEmail()
  user_email: string;
  @IsString()
  user_wallet_address: string;
  @IsString()
  user_name: string;
  @IsBoolean()
  is_creator: bool;
}
