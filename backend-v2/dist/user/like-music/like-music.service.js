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
exports.LikeMusicService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let LikeMusicService = class LikeMusicService {
    constructor(db) {
        this.db = db;
    }
    async likeMusic(dto) {
        const { user_wallet_address, normal_music_id, funding_music_id } = dto;
        if (normal_music_id != undefined && funding_music_id == undefined) {
            return await this.normalMusicAdd(user_wallet_address, normal_music_id);
        }
        if (normal_music_id == undefined && funding_music_id != undefined) {
            return await this.fundingMusicAdd(user_wallet_address, funding_music_id);
        }
    }
    async normalMusicAdd(user_id, normal_music_id) {
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
        }
        else {
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
    async fundingMusicAdd(user_id, funding_music_id) {
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
        }
        else {
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
};
LikeMusicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LikeMusicService);
exports.LikeMusicService = LikeMusicService;
//# sourceMappingURL=like-music.service.js.map