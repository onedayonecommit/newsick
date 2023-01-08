import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user/create-user.dto';
import { CreateUserService } from 'src/service/create-user/create-user.service';

@Controller('signup/user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}
  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.createUser(createUserDto);
  }
}
