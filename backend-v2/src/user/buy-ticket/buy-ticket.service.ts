import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { buyTicketDto } from './buy-ticket.dto';

@Injectable()
export class BuyTicketService {
  constructor(private readonly db: PrismaService) {}

  /** 스트리밍 티켓 구매 함수 */
  async buyTicket(dto: buyTicketDto) {
    const { user_wallet_address, ticket_type, expired } = dto;
    return await this.db.user.update({
      where: { user_wallet_address: user_wallet_address },
      data: {
        ticket: {
          update: {
            where: { id: user_wallet_address },
            data: { ticket_type, expired },
          },
        },
      },
    });
  }
}
