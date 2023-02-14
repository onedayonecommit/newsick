import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OnGoingFundingService {
  constructor(private readonly db: PrismaService) {}

  async onGoing() {
    return await this.db.funding.findMany({
      where: {
        AND: [
          { funding_start_date: { lte: new Date() } },
          { funding_finish_date: { gte: new Date() } },
        ],
      },
    });
  }
}
