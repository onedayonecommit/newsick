import { IsString } from 'class-validator';

export class totalDto {
  @IsString()
  searchWord: string;
}
