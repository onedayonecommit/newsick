import { IsDateString, IsNumber, IsString } from 'class-validator';

export class buyTicketDto {
  @IsString()
  user_wallet_address: string;
  @IsNumber()
  ticket_type: number;
  @IsDateString()
  expired: Date;
}
