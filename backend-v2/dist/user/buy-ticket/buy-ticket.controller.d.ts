import { buyTicketDto } from './buy-ticket.dto';
import { BuyTicketService } from './buy-ticket.service';
export declare class BuyTicketController {
    private readonly buyTicketService;
    constructor(buyTicketService: BuyTicketService);
    buyTicket(dto: buyTicketDto): Promise<BuyTicketService>;
}
