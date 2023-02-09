import { Body, Controller, Post } from '@nestjs/common';
import { buyTicketDto } from './buy-ticket.dto';
import { BuyTicketService } from './buy-ticket.service';

@Controller('buy-ticket')
export class BuyTicketController {
  constructor(private readonly buyTicketService: BuyTicketService) {}

  @Post()
  async buyTicket(@Body() dto: buyTicketDto) {
    return await this.buyTicketService;
  }
}
