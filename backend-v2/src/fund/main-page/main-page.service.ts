import { Injectable } from '@nestjs/common';
import { funding } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MainPageService {
  constructor(private readonly db: PrismaService) {}

  async mainRank(): Promise<funding> {
    const result = await this.db.funding.findMany();

    const arr = [];

    result.map((e) => {
      arr.push(e.funding_sales * Number(e.funding_price));
    });
    arr.sort((a, b) => {
      return b - a;
    });
    return arr[0];
  }
}
