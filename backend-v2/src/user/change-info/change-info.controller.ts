import {
  Controller,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ChangeInfoService } from './change-info.service';

@Controller('change-info')
export class ChangeInfoController {
  constructor(private readonly changeService: ChangeInfoService) {}

  @Post('profile/image')
  @UseInterceptors(FileInterceptor('user_profile_image'))
  async changeProfileImage(
    @UploadedFile() file: Express.Multer.File,
    @Query('user_wallet_address') user_wallet_address: string,
  ) {
    return await this.changeService.changeProfileImage(
      file,
      user_wallet_address,
    );
  }
}
