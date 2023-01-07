import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { CreateUserController } from './create-user/controller/create-user.controller';
import { CreateUserService } from './create-user/service/create-user.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [UsersController, CreateUserController],
  providers: [UsersService, CreateUserService, PrismaService],
})
export class AppModule {}
