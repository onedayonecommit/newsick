import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CreateFundingService {
  constructor(private readonly prismaService: PrismaService) {}

  async hi() {}
}
