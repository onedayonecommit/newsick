import { IsNumber } from 'class-validator';

export class testDto {
  @IsNumber()
  test_id: number;
}
