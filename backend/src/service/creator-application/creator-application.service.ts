import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CreatorApplicationService {
  constructor(private readonly prismaService: PrismaService) {}
}
