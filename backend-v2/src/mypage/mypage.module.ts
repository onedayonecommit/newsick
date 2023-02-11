import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MypageController } from './mypage/mypage.controller';
import { MypageService } from './mypage/mypage.service';

@Module({
  controllers: [MypageController],
  providers: [MypageService, PrismaService],
})
export class MypageModule {}
