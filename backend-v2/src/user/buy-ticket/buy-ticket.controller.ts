import { Body, Controller, Post } from '@nestjs/common';
import { buyTicketDto } from './buy-ticket.dto';
import { BuyTicketService } from './buy-ticket.service';

@Controller('buy-ticket')
export class BuyTicketController {
  constructor(private readonly buyTicketService: BuyTicketService) {}
  @Post()
  async buyTicket(@Body() dto: buyTicketDto) {
    console.log('티켓 구매요청');
    return await this.buyTicketService.buyTicket(dto);
  }
}
