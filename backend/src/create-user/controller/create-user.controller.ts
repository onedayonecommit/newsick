import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { CreateUserService } from '../service/create-user.service';

@Controller('create-user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}
  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.createUser(createUserDto);
  }
}
