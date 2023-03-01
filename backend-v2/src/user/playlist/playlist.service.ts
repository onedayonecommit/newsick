import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { playlistDto } from './playlist.dto';

@Injectable()
export class PlaylistService {
  constructor(private readonly db: PrismaService) {}

  async playListAdd(dto: playlistDto) {
    const { user_wallet_address, funding_music_id, normal_music_id } = dto;
    if (funding_music_id != null && normal_music_id == null) {
      const findResult = await this.db.playlist.findFirst({
        where: {
          user_id: user_wallet_address,
          funding_music_id: funding_music_id,
        },
      });
      if (findResult) {
        console.log('있으니까 삭제한다');
        return await this.db.playlist.deleteMany({
          where: {
            user_id: user_wallet_address,
            funding_music_id: funding_music_id,
          },
        });
      } else {
        console.log('없으니까 추가');
        return await this.db.playlist.create({
          data: {
            user_id: user_wallet_address,
            funding_music_id: funding_music_id,
          },
        });
      }
    } else if (funding_music_id == null && normal_music_id != null) {
      const findResult = await this.db.playlist.findFirst({
        where: { user_id: user_wallet_address, normal_music_id },
      });
      if (findResult) {
        console.log('있으니까 삭제');
        return await this.db.playlist.deleteMany({
          where: { user_id: user_wallet_address, normal_music_id },
        });
      } else {
        console.log('없으니까 추가');
        return await this.db.playlist.create({
          data: {
            user_id: user_wallet_address,
            normal_music_id,
          },
        });
      }
    }
  }

  async myPlayList(user_wallet_address: string) {
    const result = await this.db.playlist.findMany({
      where: { user_id: user_wallet_address },
    });
    const returnDto = [];
    result.map(async (e) => {
      if (e.funding_music_id == null && e.normal_music_id != null) {
        const result2 = await this.db.normal_music.findUnique({
          where: { id: e.normal_music_id },
          select: {
            music_cover_image: true,
            id: true,
            title: true,
            music_lyrics: true,
            singer: true,
          },
        });
        returnDto.push(result2);
      } else if (e.funding_music_id != null && e.normal_music_id == null) {
        const result2 = await this.db.funding_music.findUnique({
          where: { funding_id: e.funding_music_id },
          select: {
            music_cover_image: true,
            funding_id: true,
            title: true,
            music_lyrics: true,
            singer: true,
          },
        });
        returnDto.push(result2);
      }
    });
    return returnDto;
  }
}
