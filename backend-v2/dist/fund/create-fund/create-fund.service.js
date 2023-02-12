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
exports.CreateFundService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let CreateFundService = class CreateFundService {
    constructor(db) {
        this.db = db;
    }
    async createFund(dto) {
        const { id, creator_id, category, funding_info, funding_start_date, funding_finish_date, funding_production_date, funding_nft_image, funding_metadata, discord_address, funding_title, nft_name, } = dto.fund;
        const { lyrics_name, lyrics_sns_address, lyrics_info } = dto.lyrics_maker;
        const { music_name, music_sns_address, music_info } = dto.music_maker;
        const { singer_name, singer_sns_address, singer_info } = dto.singer;
        return await this.db.funding.create({
            data: {
                id,
                creator_id,
                category,
                funding_info,
                funding_start_date,
                funding_finish_date,
                funding_production_date,
                funding_nft_image,
                funding_metadata,
                discord_address,
                funding_title,
                nft_name,
                lyrics_maker: {
                    create: [{ lyrics_info, lyrics_name, lyrics_sns_address }],
                },
                music_maker: {
                    create: [{ music_info, music_name, music_sns_address }],
                },
                singer: { create: [{ singer_info, singer_name, singer_sns_address }] },
            },
        });
    }
};
CreateFundService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CreateFundService);
exports.CreateFundService = CreateFundService;
//# sourceMappingURL=create-fund.service.js.map