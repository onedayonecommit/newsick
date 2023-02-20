import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MusicMainListService {
  constructor(private readonly db: PrismaService) {}

  async allList() {
    const result = await this.db.normal_music_player.findMany({
      orderBy: { player_count: 'desc' },
    });
    const resDto = [];
    if (result.length >= 30) {
      for (let i = 0; i < 30; i++) {
        const result2 = await this.db.normal_music.findUnique({
          where: { id: result[i].music_id },
        });
        resDto.push(result2);
      }
    } else {
      for (let i = 0; i < result.length; i++) {
        const result2 = await this.db.normal_music.findUnique({
          where: { id: result[i].music_id },
        });
        resDto.push(result2);
      }
    }
    return resDto;
  }

  async fundingList() {
    const result = await this.db.funding_music_player.findMany({
      orderBy: { player_count: 'desc' },
    });
    const resDto = [];
    if (result.length < 30) {
      for (let i = 0; i < result.length; i++) {
        const result2 = await this.db.funding_music.findUnique({
          where: { funding_id: result[i].music_id },
        });
        resDto.push(result2);
      }
    } else {
      for (let i = 0; i < 30; i++) {
        const result2 = await this.db.funding_music.findUnique({
          where: { funding_id: result[i].music_id },
        });
        resDto.push(result2);
      }
    }
    return resDto;
  }

  async newMusicList() {
    return await this.db.$transaction([
      this.db.normal_music.findMany({
        where: {
          AND: [
            { created_at: { lte: new Date(new Date().getTime() - 86400000) } },
          ],
        },
      }),
      this.db.funding_music.findMany({
        where: {
          AND: [
            { created_at: { lte: new Date(new Date().getTime() - 86400000) } },
          ],
        },
      }),
    ]);
  }
}
