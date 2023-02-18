import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { UploadedFile } from '@nestjs/common/decorators';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { STATUS_CODES } from 'http';
import { CreatorCheckService } from 'src/auth/creator-check/creator-check.service';
import { IpfsUploadService } from 'src/nft-storage/ipfs-upload/ipfs-upload.service';
import { ipfsReturnDto } from 'src/nft-storage/ipfs-upload/return.dto';
import { createFundMainDto, metadataDto } from './create-fund.dto';
import { CreateFundService } from './create-fund.service';

@Controller('create-fund')
export class CreateFundController {
  constructor(
    private readonly createFundService: CreateFundService,
    private readonly ipfsUploadService: IpfsUploadService,
    private readonly authService: CreatorCheckService,
  ) {}

  @Post('create/makeMetadata')
  @UseInterceptors(FileInterceptor('nft_image'))
  async createMetadata(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: metadataDto,
  ): Promise<any> {
    if (await this.authService.creatorCheck(dto.producer)) {
      console.log('IPFS 생성');
      return await this.ipfsUploadService.ipfsUpload(file, dto);
    } else {
      console.log('IPFS 생성 실패');
      return;
    }
  }

  @Post('create/fund')
  async createFund(@Body() fundDto: createFundMainDto) {
    console.log(fundDto.fund.funding_production_date);
    return await this.createFundService.createFund(fundDto);
  }
}
