import { Injectable } from '@nestjs/common';
import { funding } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { fundSupplyDto } from './fund-supply.dto';

@Injectable()
export class FundSupplyUpdateService {
  constructor(private readonly db: PrismaService) {}

  async funding(dto: fundSupplyDto): Promise<funding> {
    const { funding_id, amount } = dto;
    return await this.db.funding.update({
      where: { id: funding_id },
      data: { funding_sales: { increment: amount } },
    });
  }

  async refund(dto: fundSupplyDto): Promise<funding> {
    const { funding_id, amount } = dto;
    return await this.db.funding.update({
      where: { id: funding_id },
      data: {
        funding_sales: { decrement: amount },
      },
    });
  }
}
