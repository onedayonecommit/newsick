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
exports.PlaylistService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let PlaylistService = class PlaylistService {
    constructor(db) {
        this.db = db;
    }
    async playListAdd(dto) {
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
            }
            else {
                console.log('없으니까 추가');
                return await this.db.playlist.create({
                    data: {
                        user_id: user_wallet_address,
                        funding_music_id: funding_music_id,
                    },
                });
            }
        }
        else if (funding_music_id == null && normal_music_id != null) {
            const findResult = await this.db.playlist.findFirst({
                where: { user_id: user_wallet_address, normal_music_id },
            });
            if (findResult) {
                console.log('있으니까 삭제');
                return await this.db.playlist.deleteMany({
                    where: { user_id: user_wallet_address, normal_music_id },
                });
            }
            else {
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
};
PlaylistService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PlaylistService);
exports.PlaylistService = PlaylistService;
//# sourceMappingURL=playlist.service.js.map