import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { CreateUserController } from './create-user/controller/create-user.controller';
import { CreateUserService } from './create-user/service/create-user.service';
import { PrismaService } from './prisma.service';
import { SignupEmailController } from './signup-email/controller/signup-email.controller';
import { EnvModule } from './env/env.module';
import { SignupEmailService } from './signup-email/service/signup-email.service';

@Module({
  imports: [EnvModule],
  controllers: [UsersController, CreateUserController, SignupEmailController],
  providers: [
    UsersService,
    CreateUserService,
    PrismaService,
    SignupEmailService,
  ],
})
export class AppModule {}
