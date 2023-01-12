import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createFundingDto } from 'src/dto/create-funding/create-funding.dto';
import { CreateFundingService } from 'src/service/create-funding/create-funding.service';
import { FileUploadsService } from 'src/service/file-uploads/file-uploads.service';

@Controller('create/funding/list')
export class CreateFundingController {
  constructor(
    private readonly createFundingService: CreateFundingService,
    private readonly fileUploadService: FileUploadsService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('cover_image'))
  async createFunding(
    @UploadedFile() file: Express.Multer.File,
    @Body() funding_body: createFundingDto,
  ) {
    await this.fileUploadService.uploadFile(file);
  }
}
