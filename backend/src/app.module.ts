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
@Module({
  imports: [
    EnvModule,
    CacheModule.register({ store: redisStore, host: 'localhost', port: 6379 }),
  ],
  controllers: [
    CreateUserController,
    SignupEmailController,
    UpdateUserController,
  ],
  providers: [
    CreateUserService,
    PrismaService,
    SignupEmailService,
    RedisService,
    UpdateUserService,
  ],
})
export class AppModule {}
