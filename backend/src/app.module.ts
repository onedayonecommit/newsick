import { CacheModule, Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PrismaService } from './prisma.service';
import { EnvModule } from './env/env.module';
import * as redisStore from 'cache-manager-ioredis';
import { SignupEmailController } from './controller/signup-email/signup-email.controller';
import { CreateUserController } from './controller/create-user/create-user.controller';
import { CreateUserService } from './service/create-user/create-user.service';
import { RedisService } from './service/redis/redis.service';
import { SignupEmailService } from './service/signup-email/signup-email.service';
@Module({
  imports: [
    EnvModule,
    CacheModule.register({ store: redisStore, host: 'localhost', port: 6379 }),
  ],
  controllers: [UsersController, CreateUserController, SignupEmailController],
  providers: [
    UsersService,
    CreateUserService,
    PrismaService,
    SignupEmailService,
    RedisService,
  ],
})
export class AppModule {}
