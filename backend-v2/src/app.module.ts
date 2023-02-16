import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { EmailModule } from './email/email.module';
import { FundModule } from './fund/fund.module';
import { MusicModule } from './music/music.module';
import { EnvModule } from './env/env.module';
import { S3Module } from './s3/s3.module';
import { NftStorageModule } from './nft-storage/nft-storage.module';
import { AuthModule } from './auth/auth.module';
import { MypageModule } from './mypage/mypage.module';
import { AppController } from './app.controller';
// import { AppController } from './app.controller';
import { SearchModule } from './search/search.module';
import { SimpleTestModule } from './simple-test/simple-test.module';

@Module({
  imports: [
    UserModule,
    EmailModule,
    FundModule,
    MusicModule,
    EnvModule,
    S3Module,
    NftStorageModule,
    AuthModule,
    MypageModule,
    SearchModule,
    SimpleTestModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
