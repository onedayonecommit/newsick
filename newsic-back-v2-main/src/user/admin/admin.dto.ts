import { IsString } from 'class-validator';

export class adminDto {
  @IsString()
  admin_id: string;
  @IsString()
  admin_pw: string;
}
