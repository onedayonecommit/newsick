import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class HotFundService {
  constructor(private readonly db: PrismaService) {}

  async hotFundList() {
    const result = await this.db.funding.findMany({
      orderBy: { funding_sales: 'desc' },
    });
    return result[0];
  }

  async fundingList() {
    return await this.db.funding.findMany({
      orderBy: { funding_heart: 'desc' },
    });
  }
}
