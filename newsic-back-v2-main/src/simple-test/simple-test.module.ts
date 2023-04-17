import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TestController } from './test/test.controller';
import { TestService } from './test/test.service';

@Module({
  controllers: [TestController],
  providers: [TestService, PrismaService],
})
export class SimpleTestModule {}
