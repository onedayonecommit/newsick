import { bool } from 'aws-sdk/clients/signer';
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class joinDto {
  @IsEmail()
  user_email: string;
  @IsString()
  @IsNotEmpty()
  user_wallet_address: string;
  @IsString()
  user_name: string;
  @IsBoolean()
  is_creator: bool;
}

export class RemoveDto {
  @IsString()
  _address: string;
  // @IsString()
  // user_name: string;
}
