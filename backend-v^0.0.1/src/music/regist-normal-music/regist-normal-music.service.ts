import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FileUploadService } from 'src/s3/file-upload/file-upload.service';
import { normalMusicDto } from './normal-music.dto';

@Injectable()
export class RegistNormalMusicService {
  constructor(
    private readonly db: PrismaService,
    private readonly s3Service: FileUploadService,
  ) {}

  async normalMusicUpload(files, dto: normalMusicDto) {
    const {
      music_name,
      singer,
      music_lyrics,
      lyrics_maker,
      music_maker,
      music_genre,
      album_name,
      title,
    } = dto;
    console.log(music_name);
    const imgUrl = await this.s3Service.uploadFile(files.cover_image[0]);
    const musicUrl = await this.s3Service.uploadFile(files.mp3_file[0]);
    const result = await this.db.normal_music.create({
      data: {
        music_name,
        singer,
        music_lyrics,
        lyrics_maker,
        music_maker,
        music_genre,
        album_name,
        title,
        music_cover_image: imgUrl,
        music_path: musicUrl,
        normal_music_player: { create: [{}] },
      },
    });
    return result;
  }
  async testput(dto: normalMusicDto) {
    console.log('서비스 들어옴');
    const {
      music_name,
      singer,
      music_lyrics,
      lyrics_maker,
      music_maker,
      music_genre,
      album_name,
      title,
      image_path,
      music_path,
    } = dto;
    try {
      return await this.db.normal_music.create({
        data: {
          music_name,
          singer,
          music_lyrics,
          lyrics_maker,
          music_maker,
          music_genre,
          album_name,
          title,
          music_cover_image: image_path,
          music_path,
	  normal_music_player: { create: [{}] },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async testput2() {
    for (let i = 1; i <= 5; i++) {
      await this.db.normal_music_player.create({
        data: { music_id: i },
      });
    }
  }
}
