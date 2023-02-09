import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { EmailModule } from './email/email.module';
import { FundModule } from './fund/fund.module';
import { MusicModule } from './music/music.module';
import { EnvModule } from './env/env.module';
import { S3Module } from './s3/s3.module';
import { NftStorageModule } from './nft-storage/nft-storage.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    UserModule,
    EmailModule,
    FundModule,
    MusicModule,
    EnvModule,
    S3Module,
    NftStorageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
