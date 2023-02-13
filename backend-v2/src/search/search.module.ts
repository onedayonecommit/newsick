import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TotalController } from './total/total.controller';
import { TotalService } from './total/total.service';

@Module({
  controllers: [TotalController],
  providers: [TotalService, PrismaService],
})
export class SearchModule {}
