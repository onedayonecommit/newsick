import { Module } from '@nestjs/common';
import { JoinController } from './join/join.controller';
import { JoinService } from './join/join.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { ChangeInfoController } from './change-info/change-info.controller';
import { ChangeInfoService } from './change-info/change-info.service';
import { ApplicationCreatorService } from './application-creator/application-creator.service';
import { ApplicationCreatorController } from './application-creator/application-creator.controller';
import { BuyTicketService } from './buy-ticket/buy-ticket.service';
import { BuyTicketController } from './buy-ticket/buy-ticket.controller';
import { LikeMusicFundService } from './like-music-fund/like-music-fund.service';
import { LikeMusicFundController } from './like-music-fund/like-music-fund.controller';
import { DuplicateCheckService } from './duplicate-check/duplicate-check.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [
    JoinController,
    LoginController,
    ChangeInfoController,
    ApplicationCreatorController,
    BuyTicketController,
    LikeMusicFundController,
  ],
  providers: [
    JoinService,
    LoginService,
    ChangeInfoService,
    ApplicationCreatorService,
    BuyTicketService,
    LikeMusicFundService,
    DuplicateCheckService,
    PrismaService,
  ],
})
export class UserModule {}
