import { Body, Controller, Post } from '@nestjs/common';
import {
  deleteNoticeDto,
  getNoticeDto,
  registNoticeDto,
  updateNoticeDto,
} from './fund-notice.dto';
import { FundNoticeService } from './fund-notice.service';

@Controller('fund/notice')
export class FundNoticeController {
  constructor(private readonly fundNoticeService: FundNoticeService) {}

  @Post('get')
  async getNotice(@Body() dto: getNoticeDto) {
    return await this.fundNoticeService.getNotice(dto.user_wallet_address);
  }

  @Post('regist')
  async registNotice(@Body() dto: registNoticeDto) {
    return await this.fundNoticeService.registNotice(dto);
  }

  @Post('update')
  async updateNotice(@Body() dto: updateNoticeDto) {
    return await this.fundNoticeService.updateNotice(dto);
  }

  @Post('delete')
  async deleteNotice(@Body() dto: deleteNoticeDto) {
    return await this.fundNoticeService.deleteNotice(dto);
  }
}
