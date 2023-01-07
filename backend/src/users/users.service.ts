import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  getAll(Dto: CreateUserDto) {
    return Dto;
  }
}
