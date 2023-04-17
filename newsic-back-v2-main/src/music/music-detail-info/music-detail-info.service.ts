import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MusicDetailInfoService {
  constructor(private readonly db: PrismaService) {}
  async musicDetailInfo(nmid: number | null, fmid: number | null) {
    if (nmid && fmid) {
      throw new HttpException(
        'bad Request : nmid or fmid only one',
        HttpStatus.BAD_REQUEST,
      );
    } else if (nmid) {
      return await this.db.normal_music.findUnique({
        where: { id: nmid },
      });
    } else if (fmid) {
      return await this.db.funding_music.findUnique({
        where: { funding_id: fmid },
      });
    }
  }
}
