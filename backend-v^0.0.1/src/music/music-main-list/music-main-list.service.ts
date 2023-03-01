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
	  
	const returnDto = [];
    const normal = await this.db.normal_music.findMany({
      where: {
        AND: [
          { created_at: { gte: new Date(new Date().getTime() - 86400000) } },
        ],
      },
    });
    const funding = await this.db.funding_music.findMany({
      where: {
	pending_status: true,
        AND: [
          { created_at: { gte: new Date(new Date().getTime() - 86400000) }, },
        ],
      },
    });

    for (let i = 0; i < normal.length; i++) {
      returnDto.push(normal[i]);
    }
    for (let i = 0; i < funding.length; i++) {
      returnDto.push(funding[i]);
    }
    return returnDto;
  }
}
