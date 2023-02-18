import { IsNumber } from 'class-validator';

export class approveDto {
  @IsNumber()
  funding_id: number;
}
