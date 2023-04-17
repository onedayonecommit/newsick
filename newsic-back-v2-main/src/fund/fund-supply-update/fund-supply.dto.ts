import { IsNumber, IsString } from 'class-validator';

export class fundSupplyDto {
  @IsNumber()
  funding_id: number;
  @IsNumber()
  amount: number;
}
