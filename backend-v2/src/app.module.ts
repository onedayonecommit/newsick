import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { EmailModule } from './email/email.module';
import { FundModule } from './fund/fund.module';
import { MusicModule } from './music/music.module';

@Module({
  imports: [UserModule, EmailModule, FundModule, MusicModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
