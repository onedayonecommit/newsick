import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateUserDto } from '../create-user/create-user.dto';

export class updateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'Requirements',
    example: 'f12',
  })
  user_wallet_address: string;

  @ApiProperty({
    description: 'user want to change info anything',
    example: 'test123456@naver.com',
  })
  user_email?: string;
}
