import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { buyTicketDto } from './buy-ticket.dto';

@Injectable()
export class BuyTicketService {
  constructor(private readonly db: PrismaService) {}

  /** 스트리밍 티켓 구매 함수 */
  async buyTicket(dto: buyTicketDto) {
    const newExpired = new Date(new Date().getTime() + 2592000000);
    const { user_wallet_address, ticket_type } = dto;
    const { expired, status } = await this.nowCheck(user_wallet_address);
    let returnDto = {};
    if (status) {
      const result = await this.db.ticket.update({
        where: { id: user_wallet_address },
        data: {
          ticket_type,
          expired: new Date(expired.getTime() + 2592000000),
        },
      });
      returnDto = { ...result, status: true };
      return returnDto;
    } else {
      const result = await this.db.ticket.update({
        where: { id: user_wallet_address },
        data: {
          ticket_type,
          expired: newExpired,
        },
      });
      returnDto = { ...result, status: true };
      return returnDto;
    }
  }

  /** 현재시간 기준으로 만료일 체크 */
  async nowCheck(user_wallet_address: string) {
    const result = await this.db.ticket.findUnique({
      where: { id: user_wallet_address },
    });
    const returnDto = { ...result, status: true };
    if (result.expired.getTime() > new Date().getTime()) return returnDto;
    else {
      returnDto.status = false;
      return returnDto;
    }
  }
}
