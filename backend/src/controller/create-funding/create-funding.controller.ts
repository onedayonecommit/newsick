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

@Controller('create/funding')
export class CreateFundingController {
  constructor(
    private readonly createFundingService: CreateFundingService,
    private readonly fileUploadService: FileUploadsService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('cover_image'))
  async createFunding(
    @Body() fundingDto: createFundingDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    // await this.fileUploadService.fundingCoverImageUpload(
    //   file,
    //   fundingDto.funding.creator_wallet_address,
    // );
    await this.createFundingService.fundingInfoCreate(fundingDto);
  }
}
