import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { testDto } from './test.dto';

@Injectable()
export class QueryService {
  constructor(private readonly db: PrismaService) {}

  async getMany(dto: testDto) {
    console.log(dto.test_id);
    const Result = await this.db.funding.findUnique({
      where: { id: dto.test_id },
      include: { lyrics_maker: true, music_maker: true, singer: true },
    });
    return Result;
  }
}
