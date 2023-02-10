"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistFundingMusicService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const file_upload_service_1 = require("../../s3/file-upload/file-upload.service");
let RegistFundingMusicService = class RegistFundingMusicService {
    constructor(db, uploadService) {
        this.db = db;
        this.uploadService = uploadService;
    }
    async registFundMusic(files, dto) {
        const { funding_id, music_name, music_lyrics, music_genre, music_maker, lyrics_maker, singer, album_name, title, } = dto;
        const imgUrl = await this.uploadService.uploadFile(files.cover_image[0]);
        const mp3Url = await this.uploadService.uploadFile(files.mp3_file[0]);
        const result = await this.db.funding_music.create({
            data: {
                funding_id: funding_id,
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
};
RegistFundingMusicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        file_upload_service_1.FileUploadService])
], RegistFundingMusicService);
exports.RegistFundingMusicService = RegistFundingMusicService;
//# sourceMappingURL=regist-funding-music.service.js.map