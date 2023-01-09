import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('profile/uploads')
export class ProfileUploadsController {
  @Post()
  @UseInterceptors(FileInterceptor('file')) // docs에서는 쓰라는데 왜 써야되는지 찾는중
  uploadFile(@UploadedFile() file: Express.Multer.File) {}
}
