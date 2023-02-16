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
exports.ApproveFundingMusicService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const file_upload_service_1 = require("../../s3/file-upload/file-upload.service");
let ApproveFundingMusicService = class ApproveFundingMusicService {
    constructor(db, s3Service) {
        this.db = db;
        this.s3Service = s3Service;
    }
    async registFundMusicList() {
        return await this.db.funding_music.findMany({
            where: { pending_status: false },
        });
    }
    async approveFundMusic(funding_id) {
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
    async rejectFundMusic(funding_id) {
        const result = await this.db.funding_music.findUnique({
            where: { funding_id },
        });
        await this.s3Service.deleteFile(result.music_path);
        await this.s3Service.deleteFile(result.music_cover_image);
        return await this.db.funding_music.delete({
            where: { funding_id },
        });
    }
};
ApproveFundingMusicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        file_upload_service_1.FileUploadService])
], ApproveFundingMusicService);
exports.ApproveFundingMusicService = ApproveFundingMusicService;
//# sourceMappingURL=approve-funding-music.service.js.map