import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FileUploadService } from 'src/s3/file-upload/file-upload.service';
import { fundingMusicDto } from './funding-music.dto';

@Injectable()
export class RegistFundingMusicService {
  constructor(
    private readonly db: PrismaService,
    private readonly uploadService: FileUploadService,
  ) {}

  async registFundMusic(files, dto: fundingMusicDto) {
    const {
      funding_id,
      music_name,
      music_lyrics,
      music_genre,
      music_maker,
      lyrics_maker,
      singer,
      album_name,
      title,
    } = dto;
    const imgUrl = await this.uploadService.uploadFile(files.cover_image[0]);
    const mp3Url = await this.uploadService.uploadFile(files.mp3_file[0]);
    const result = await this.db.funding_music.update({
      where: { funding_id: funding_id },
      data: {
        music_name: music_name,
        music_lyrics: music_lyrics,
        music_genre: music_genre,
        music_maker: music_maker,
        lyrics_maker: lyrics_maker,
        singer: singer,
        music_cover_image: imgUrl,
        album_name: album_name,
        title: title,
        music_path: mp3Url,
      },
    });
    return result;
  }
}
