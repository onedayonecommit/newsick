import { Injectable } from '@nestjs/common';
import { CreatorCheckService } from 'src/auth/creator-check/creator-check.service';
import { PrismaService } from 'src/prisma.service';
import {
  deleteNoticeDto,
  registNoticeDto,
  updateNoticeDto,
} from './fund-notice.dto';

@Injectable()
export class FundNoticeService {
  constructor(
    private readonly db: PrismaService,
    private readonly authService: CreatorCheckService,
  ) {}

  async getNotice(creator_id: string) {
    return await this.db.funding_notice.findMany({
      where: { creator_id },
    });
  }

  async registNotice(dto: registNoticeDto) {
    const { user_wallet_address, funding_id, title, content } = dto;
    if (await this.authService.creatorCheck(user_wallet_address)) {
      return await this.db.funding_notice.create({
        data: { creator_id: user_wallet_address, funding_id, title, content },
      });
    } else return 'you no creator';
  }

  async updateNotice(dto: updateNoticeDto) {
    const { user_wallet_address, title, content, id } = dto;
    if (await this.authService.noticeOwnerCheck(user_wallet_address, id)) {
      return await this.db.funding_notice.update({
        where: { id: id },
        data: { title, content },
      });
    } else 'who are you?';
  }

  async deleteNotice(dto: deleteNoticeDto) {
    const { user_wallet_address, id } = dto;
    if (await this.authService.noticeOwnerCheck(user_wallet_address, id)) {
      return await this.db.funding_notice.delete({
        where: { id },
      });
    } else 'who are you?';
  }
}
