import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  user_email: string;

  @IsString()
  user_name: string;

  @IsString()
  @IsNotEmpty()
  user_wallet_address: string;

  @IsBoolean()
  is_creator: boolean;

  @IsBoolean()
  ticket: boolean;
}
