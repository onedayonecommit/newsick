import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
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

  @Post('create/metadata')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'fund_nft_image' }, { name: 'data' }]),
  )
  async createMetadata(@UploadedFiles() file): Promise<ipfsReturnDto> {
    console.log(file);
    const resDto = await JSON.parse(file.data[0].buffer);
    console.log(resDto);
    if (await this.authService.creatorCheck(resDto.producer)) {
      return await this.ipfsUploadService.ipfsUpload(
        file.fund_nft_image[0],
        resDto,
      );
    } else {
      return;
    }
  }

  @Post('create/fund')
  async createFund(@Body() fundDto: createFundMainDto) {
    console.log(fundDto.fund.funding_production_date);
    return await this.createFundService.createFund(fundDto);
  }
  // @Post('create/fund')
}
