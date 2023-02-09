import { Injectable } from '@nestjs/common';
import { funding_music, funding_music_player } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { FileUploadService } from 'src/s3/file-upload/file-upload.service';

@Injectable()
export class ApproveFundingMusicService {
  constructor(
    private readonly db: PrismaService,
    private readonly s3Service: FileUploadService,
  ) {}

  /** 승인 대기 음원 목록 */
  async registFundMusicList(): Promise<funding_music[]> {
    return await this.db.funding_music.findMany({
      where: { pending_status: false },
    });
  }

  /** 승인 함수 */
  async approveFundMusic(
    funding_id: number,
  ): Promise<[funding_music, funding_music_player]> {
    return await this.db.$transaction([
      this.db.funding_music.update({
        where: { funding_id: funding_id },
        data: { pending_status: true },
      }),
      this.db.funding_music_player.create({
        data: { music_id: funding_id },
      }),
    ]);
  }

  async rejectFundMusic(funding_id: number): Promise<funding_music> {
    const result = await this.db.funding_music.findUnique({
      where: { funding_id },
    });
    await this.s3Service.deleteFile(result.music_path);
    await this.s3Service.deleteFile(result.music_cover_image);
    return await this.db.funding_music.delete({
      where: { funding_id },
    });
  }
}
