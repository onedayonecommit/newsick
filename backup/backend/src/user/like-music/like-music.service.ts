import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { likeMusicDto } from './like-music.dto';

@Injectable()
export class LikeMusicService {
  constructor(private readonly db: PrismaService) {}

  async likeMusic(dto: likeMusicDto) {
    const { user_wallet_address, normal_music_id, funding_music_id } = dto;
    if (normal_music_id != undefined && funding_music_id == undefined) {
      return await this.normalMusicAdd(user_wallet_address, normal_music_id);
    }
    if (normal_music_id == undefined && funding_music_id != undefined) {
      return await this.fundingMusicAdd(user_wallet_address, funding_music_id);
    }
  }

  async normalMusicAdd(user_id: string, normal_music_id: number) {
    const result = await this.db.heart_music.findFirst({
      where: { user_id, normal_music_id },
    });
    if (result) {
      console.log('노말뮤직 있어서 삭제한다');
      console.log(result);
      const result2 = await this.db.heart_music.deleteMany({
        where: { user_id, normal_music_id },
      });
      return result2;
    } else {
      console.log('노말 뮤직 없어서 추가함');
      console.log(result);
      const result3 = await this.db.heart_music.create({
        data: {
          user_id,
          normal_music_id,
        },
      });
      console.log(result3);
      return result3;
    }
  }

  async fundingMusicAdd(user_id: string, funding_music_id: number) {
    const result = await this.db.heart_music.findFirst({
      where: { user_id, funding_music_id },
    });
    if (result) {
      console.log('펀딩뮤직 있어서 삭제한다');
      console.log(result);
      const result2 = await this.db.heart_music.deleteMany({
        where: { user_id, funding_music_id },
      });
      return result2;
    } else {
      console.log('펀딩뮤직 없어서 추가함');
      console.log(result);
      const result3 = await this.db.heart_music.create({
        data: {
          user_id,
          funding_music_id,
        },
      });
      console.log(result3);
      return result3;
    }
  }
}
