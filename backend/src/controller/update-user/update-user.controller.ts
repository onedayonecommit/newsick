import { Body, Controller, Get, Patch, Query } from '@nestjs/common';
import { updateUserDto } from 'src/dto/update-user/update-user.dto';
import { UpdateUserService } from 'src/service/update-user/update-user.service';

@Controller('update/user')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) {}

  @Patch('info')
  async userInfoUpdate(@Body() updateUserDto: updateUserDto): Promise<object> {
    return await this.updateUserService.userInfoUpdate(updateUserDto);
  }
}
