import { IsEmail } from 'class-validator';

export class emailDto {
  @IsEmail()
  user_email: string;
}
