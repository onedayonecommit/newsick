import { PrismaService } from 'src/prisma.service';
import { buyTicketDto } from './buy-ticket.dto';
export declare class BuyTicketService {
    private readonly db;
    constructor(db: PrismaService);
    buyTicket(dto: buyTicketDto): Promise<any>;
}
