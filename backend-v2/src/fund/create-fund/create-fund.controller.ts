import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { IpfsUploadService } from 'src/nft-storage/ipfs-upload/ipfs-upload.service';
import { ipfsReturnDto } from 'src/nft-storage/ipfs-upload/return.dto';
import { createFundMainDto } from './create-fund.dto';
import { CreateFundService } from './create-fund.service';

@Controller('create-fund')
export class CreateFundController {
  constructor(
    private readonly createFundService: CreateFundService,
    private readonly ipfsUploadService: IpfsUploadService,
  ) {}

  @Post('create/metadata')
  @UseInterceptors(FileInterceptor('fund_nft_image'))
  async createMetadata(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<ipfsReturnDto> {
    return await this.ipfsUploadService.ipfsUpload(file);
  }

  @Post('create/fund')
  async createFund(@Body() fundDto: createFundMainDto) {
    console.log(fundDto.fund.funding_production_date);
    // return await this.createFundService.createFund(fundDto);
  }
  // @Post('create/fund')
}
