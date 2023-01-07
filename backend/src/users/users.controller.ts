import { Body, Controller, Get, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(readonly userService: UsersService) {}
  @Get()
  getAll() {
    return 'this user all';
  }
  @Get('test')
  test(@Body() Dto: CreateUserDto) {
    this.userService.getAll(Dto);
  }

  @Get('/:id')
  getItem(@Param('id') user_id: string) {
    return `item number is ${user_id}`;
  }
}
