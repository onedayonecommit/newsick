import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class QueryDataService {
  constructor(private readonly db: PrismaService) {}

  //
  async find_ingData(_tokenId: Number): Promise<funding> {
    return await this.db.funding.findMany({
      where: { id },
    });
  }
}
