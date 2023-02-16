import { Injectable } from '@nestjs/common';
import { funding, user } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { heartMusicDto, heartNftDto, playlistInfoDto } from './mypage.dto';

@Injectable()
export class MypageService {
  constructor(private readonly db: PrismaService) {}

  async myPage(user_wallet_address: string): Promise<user> {
    const heartFundingIdArray = [];
    const heartMusicArray = [];
    const playlistArray = [];
    const result = await this.db.user.findUnique({
      where: { user_wallet_address },
      include: {
        heart_funding: { where: { user_id: user_wallet_address } },
        heart_music: { where: { user_id: user_wallet_address } },
        playlist: { where: { user_id: user_wallet_address } },
      },
    });
    result.heart_funding.map((e) => {
      heartFundingIdArray.push(e.funding_id);
    });
    result.heart_music.map((e) => {
      if (e.funding_music_id != null && e.normal_music_id == null) {
        heartMusicArray.push({
          funding_music_id: e.funding_music_id,
          normal_music_id: null,
        });
      } else if (e.funding_music_id == null && e.normal_music_id != null) {
        heartMusicArray.push({
          normal_music_id: e.normal_music_id,
          funding_music_id: null,
        });
      }
    });
    result.playlist.map((e) => {
      if (e.funding_music_id != null && e.normal_music_id == null) {
        playlistArray.push({
          funding_music_id: e.funding_music_id,
          normal_music_id: null,
        });
      } else if (e.funding_music_id == null && e.normal_music_id != null) {
        playlistArray.push({
          normal_music_id: e.normal_music_id,
          funding_music_id: null,
        });
      }
    });
    const fundingInfoResult = await this.fundingInfo(heartFundingIdArray);
    const heartMusicInfoResult = await this.heartMusicInfo(heartMusicArray);
    const playlistInfoResult = await this.playlistInfo(playlistArray);
    const returnDto = {
      ...result,
      heart_funding: fundingInfoResult,
      heart_music: heartMusicInfoResult,
      playlist: playlistInfoResult,
    };
    return returnDto;
  }

  /** 좋아요 펀딩 상세 정보 */
  async fundingInfo(id: number[]): Promise<funding[]> {
    const resultDto = [];
    for (let i = 0; i < id.length; i++) {
      const result = await this.db.funding.findUnique({
        where: { id: id[i] },
      });
      resultDto.push(result);
    }
    return resultDto;
  }

  /** 좋아요 뮤직 상세정보 */
  async heartMusicInfo(id: heartMusicDto[]): Promise<object> {
    const resultDto = [];
    for (let i = 0; i < id.length; i++) {
      if (id[i].funding_music_id != null && id[i].normal_music_id == null) {
        const fundingResult = await this.db.funding_music.findUnique({
          where: { funding_id: id[i].funding_music_id },
        });
        resultDto.push(fundingResult);
      } else if (
        id[i].funding_music_id == null &&
        id[i].normal_music_id != null
      ) {
        const normalResult = await this.db.normal_music.findUnique({
          where: { id: id[i].normal_music_id },
        });
        resultDto.push(normalResult);
      }
    }
    return resultDto;
  }

  /** 플레이리스트 상세정보 */
  async playlistInfo(id: playlistInfoDto[]) {
    const resultDto = [];
    for (let i = 0; i < id.length; i++) {
      if (id[i].funding_music_id != null && id[i].normal_music_id == null) {
        const fundingResult = await this.db.funding_music.findUnique({
          where: { funding_id: id[i].funding_music_id },
        });
        resultDto.push(fundingResult);
      } else if (
        id[i].funding_music_id == null &&
        id[i].normal_music_id != null
      ) {
        const normalResult = await this.db.normal_music.findUnique({
          where: { id: id[i].normal_music_id },
        });
        resultDto.push(normalResult);
      }
    }
    return resultDto;
  }

  async myPageList(dto: heartNftDto) {
    const nftResult = await this.db.heart_nft.findMany({
      where: { user_id: dto.user_wallet_address },
    });
    const fundingResult = await this.db.heart_funding.findMany({
      where: { user_id: dto.user_wallet_address },
    });
    const heartNftList = Promise.all(
      nftResult.map(async (e) => {
        const result = await this.db.funding.findUnique({
          where: { id: e.funding_id },
        });
        return { heartNftList: result };
      }),
    );
    const heartFundingList = Promise.all(
      fundingResult.map(async (e) => {
        const result = await this.db.funding.findUnique({
          where: { id: e.funding_id },
        });
        return { heartFundingList: result };
      }),
    );
    return {
      nftList: await heartNftList,
      fundingList: await heartFundingList,
    };
  }
}
