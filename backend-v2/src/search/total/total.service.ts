import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TotalService {
  constructor(private readonly db: PrismaService) {}

  async search(searchWord: string) {
    return await this.db.$transaction([
      this.db.funding.findMany({
        where: { funding_title: { contains: searchWord } },
      }),
      this.db.funding_music.findMany({
        where: { music_name: { contains: searchWord } },
      }),
      this.db.normal_music.findMany({
        where: { music_name: { contains: searchWord } },
      }),
      this.db.funding.findMany({
        where: { nft_name: { contains: searchWord } },
      }),
    ]);
  }

  async fundSearchService() {
    return await this.db.funding.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async marketSearchService() {
    return await this.db.funding.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async nMusicSearchService() {
    return await this.db.normal_music.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async fMusicSearchService() {
    return await this.db.funding_music.findMany({
      orderBy: { funding_id: 'asc' },
    });
  }
}
