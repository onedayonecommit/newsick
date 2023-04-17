import { Injectable } from '@nestjs/common';
import { user } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { applicationCreatorDto } from './application-creator.dto';

@Injectable()
export class ApplicationCreatorService {
  constructor(private readonly db: PrismaService) {}

  /** 추 후 크리에이터 신청 함수 */
  async applyCreator(dto: applicationCreatorDto): Promise<user> {
    const { user_wallet_address, is_creator } = dto;
    const result = this.db.user.update({
      where: { user_wallet_address },
      data: {
        creator: {
          update: {
            where: { creator_id: user_wallet_address },
            data: { is_creator },
          },
        },
      },
    });
    return result;
  }
}
