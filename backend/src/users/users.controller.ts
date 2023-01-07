import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAll() {
    return 'this user all';
  }

  @Get('/:id')
  getItem(@Param('id') user_id: string) {
    return `item number is ${user_id}`;
  }
}
