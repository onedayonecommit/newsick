import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { EmailModule } from './email/email.module';
import { FundModule } from './fund/fund.module';
import { MusicModule } from './music/music.module';
import { EnvModule } from './env/env.module';

@Module({
  imports: [UserModule, EmailModule, FundModule, MusicModule, EnvModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
