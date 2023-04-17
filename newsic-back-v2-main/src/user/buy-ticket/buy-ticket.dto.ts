import { IsDateString, IsNumber, IsString } from 'class-validator';

export class buyTicketDto {
  @IsString()
  user_wallet_address: string;
}
