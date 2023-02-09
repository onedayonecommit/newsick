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
exports.RegistNormalMusicService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const file_upload_service_1 = require("../../s3/file-upload/file-upload.service");
let RegistNormalMusicService = class RegistNormalMusicService {
    constructor(db, s3Service) {
        this.db = db;
        this.s3Service = s3Service;
    }
    async normalMusicUpload(dto, files) {
        const { music_name, singer, music_lyrics, lyrics_maker, music_maker, music_genre, album_name, title, } = JSON.parse(files.data[0].buffer);
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
};
RegistNormalMusicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        file_upload_service_1.FileUploadService])
], RegistNormalMusicService);
exports.RegistNormalMusicService = RegistNormalMusicService;
//# sourceMappingURL=regist-normal-music.service.js.map