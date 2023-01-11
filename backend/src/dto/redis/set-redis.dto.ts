import { IsString } from 'class-validator';

export class setRedisDto {
  @IsString()
  user_email: string;

  @IsString()
  user_uuid: string;
}
