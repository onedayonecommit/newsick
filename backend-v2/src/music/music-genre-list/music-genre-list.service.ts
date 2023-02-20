import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MusicGenreListService {
  constructor(private readonly db: PrismaService) {}

  async songList(genre: string) {
    return await this.db.$transaction([
      this.db.normal_music.findMany({
        where: { music_genre: genre },
        include: { normal_music_player: { orderBy: { player_count: 'desc' } } },
      }),
      this.db.funding_music.findMany({
        where: { music_genre: genre },
        include: {
          funding_music_player: { orderBy: { player_count: 'desc' } },
        },
      }),
    ]);
  }
}
