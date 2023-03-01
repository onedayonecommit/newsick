/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { user } from '@prisma/client';
import { changeDto } from './change-info.dto';
import { ChangeInfoService } from './change-info.service';

@Controller('change-info')
export class ChangeInfoController {
  constructor(private readonly changeService: ChangeInfoService) {}

  @Post('profile/image')
  @UseInterceptors(FileInterceptor('image'))
  async changeProfileImage(
    @UploadedFile() file: Express.Multer.File,
    @Body('address') user_wallet_address: string,
  ) {
    return await this.changeService.changeProfileImage(
      file,
      user_wallet_address,
    );
  }

  @Post('user/name')
  async changeUserName(@Body() dto: changeDto): Promise<user> {
    return await this.changeService.changeUserName(dto);
  }
}
