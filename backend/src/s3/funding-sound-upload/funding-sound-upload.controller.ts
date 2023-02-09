import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FundingSoundUploadService } from './funding-sound-upload.service';

@Controller('funding-sound-upload')
export class FundingSoundUploadController {
  constructor(private readonly fundingSoundUpload: FundingSoundUploadService) {}
  @Post()
  @UseInterceptors(FileInterceptor('mp3'))
  async testmp3(@UploadedFile() mp3: Express.Multer.File) {
    console.log(mp3);
    // return await this.fundingSoundUpload
  }
}
