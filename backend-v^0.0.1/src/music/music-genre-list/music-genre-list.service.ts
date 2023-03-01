import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MusicGenreListService {
  constructor(private readonly db: PrismaService) {}

  async songList(genre: string) {
    const returnDto = [];
    const normal = await this.db.normal_music.findMany({
      where: { music_genre: genre },
      include: { normal_music_player: { orderBy: { player_count: 'desc' } } },
    });
    const funding = await this.db.funding_music.findMany({
      where: { music_genre: genre },
      include: { funding_music_player: { orderBy: { player_count: 'desc' } } },
    });
    for (let i = 0; i < normal.length; i++) {
      returnDto.push(normal[i]);
    }
    for (let i = 0; i < funding.length; i++) {
      returnDto.push(funding[i]);
    }
    returnDto.sort((a, b) => {
      const aPlayerCount =
        a.normal_music_player?.nm_player_count ||
        a.funding_music_player?.fm_player_count ||
        0;
      const bPlayerCount =
        b.normal_music_player?.nm_player_count ||
        b.funding_music_player?.fm_player_count ||
        0;
      return bPlayerCount - aPlayerCount;
    });
    return returnDto;
  }
}
