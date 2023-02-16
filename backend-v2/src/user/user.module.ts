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
import { DuplicateCheckService } from './duplicate-check/duplicate-check.service';
import { PrismaService } from 'src/prisma.service';
import { ImageUploadService } from 'src/s3/image-upload/image-upload.service';
import { FileUploadService } from 'src/s3/file-upload/file-upload.service';
import { EmailSendService } from 'src/email/email-send/email-send.service';
import { LikeMusicController } from './like-music/like-music.controller';
import { LikeMusicService } from './like-music/like-music.service';
import { LikeFundService } from './like-fund/like-fund.service';
import { LikeFundController } from './like-fund/like-fund.controller';
import { PlaylistController } from './playlist/playlist.controller';
import { PlaylistService } from './playlist/playlist.service';
import { LikeNftController } from './like-nft/like-nft.controller';
import { LikeNftService } from './like-nft/like-nft.service';

@Module({
  controllers: [
    JoinController,
    LoginController,
    ChangeInfoController,
    ApplicationCreatorController,
    BuyTicketController,
    LikeMusicController,
    LikeFundController,
    PlaylistController,
    LikeNftController,
  ],
  providers: [
    JoinService,
    LoginService,
    ChangeInfoService,
    ApplicationCreatorService,
    BuyTicketService,
    DuplicateCheckService,
    PrismaService,
    ImageUploadService,
    FileUploadService,
    EmailSendService,
    LikeMusicService,
    LikeFundService,
    PlaylistService,
    LikeNftService,
  ],
})
export class UserModule {}
