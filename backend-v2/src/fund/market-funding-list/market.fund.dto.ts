import { IsNumber } from 'class-validator';

export class marketFundDto {
  @IsNumber()
  id: number;
}
