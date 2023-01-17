import { IsNumber, IsString } from 'class-validator';

export class fundingOfficialsDto {
  @IsString()
  name?: string;
  @IsString()
  sex?: string;
  @IsNumber()
  age?: number;
  @IsString()
  about_me?: string;
  @IsNumber()
  funding_id: number;
}
