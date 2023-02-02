import { CacheModule, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { EnvModule } from './env/env.module';
import * as redisStore from 'cache-manager-ioredis';
import { SignupEmailController } from './controller/signup-email/signup-email.controller';
import { CreateUserController } from './controller/create-user/create-user.controller';
import { CreateUserService } from './service/create-user/create-user.service';
import { RedisService } from './service/redis/redis.service';
import { SignupEmailService } from './service/signup-email/signup-email.service';
import { UpdateUserController } from './controller/update-user/update-user.controller';
import { UpdateUserService } from './service/update-user/update-user.service';
import { FileUploadsService } from './service/file-uploads/file-uploads.service';
import { ProfileUploadsController } from './controller/profile-uploads/profile-uploads.controller';
import { ImagedownloadController } from './controller/funding/imagedownload.controller';
import { ImagedownloadService } from './service/funding/imagedownload.service';
import { CreateFundingService } from './service/create-funding/create-funding.service';
import { CreateFundingController } from './controller/create-funding/create-funding.controller';
import { QueryService } from './service/funding/query.service';
import { QueryController } from './controller/funding/query.controller';
import { FundinglistController } from './controller/funding/fundinglist.controller';
import { FundinglistService } from './service/funding/fundinglist.service';
import { CreatorApplicationService } from './service/creator-application/creator-application.service';
import { CreatorApplicationController } from './controller/creator-application/creator-application.controller';
import { WalletConnectController } from './controller/wallet-connect/wallet-connect.controller';
import { WalletConnectService } from './service/wallet-connect/wallet-connect.service';
@Module({
  imports: [
    EnvModule,
    CacheModule.register({ store: redisStore, host: 'localhost', port: 6379 }),
  ],
  controllers: [
    CreateUserController,
    SignupEmailController,
    UpdateUserController,
    ProfileUploadsController,
    ImagedownloadController,
    CreateFundingController,
    QueryController,
    FundinglistController,
    CreatorApplicationController,
    WalletConnectController,
  ],
  providers: [
    CreateUserService,
    PrismaService,
    SignupEmailService,
    RedisService,
    UpdateUserService,
    FileUploadsService,
    ImagedownloadService,
    CreateFundingService,
    QueryService,
    FundinglistService,
    CreatorApplicationService,
    WalletConnectService,
  ],
})
export class AppModule {}
