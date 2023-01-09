import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProfileUploadsService } from 'src/service/profile-uploads/profile-uploads.service';

@Controller('profile/uploads')
export class ProfileUploadsController {
  constructor(private readonly profileUploadService: ProfileUploadsService) {}

  @Post('hi')
  hi(): string {
    return 'hi';
  }
  @Post()
  @UseInterceptors(FileInterceptor('profile_test')) // docs에서는 쓰라는데 왜 써야되는지 찾는중
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.profileUploadService.uploadFile(file);
  }
}
