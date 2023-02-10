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
exports.LikeFundService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let LikeFundService = class LikeFundService {
    constructor(db) {
        this.db = db;
    }
    async likeFund(dto) {
        const { user_wallet_address, funding_id } = dto;
        try {
            const result = await this.db.heart_funding.findFirst({
                where: { funding_id: funding_id, user_id: user_wallet_address },
            });
            console.log(result);
            if (result) {
                console.log('이미 눌러놔서 삭제할거임');
                const result2 = await this.db.heart_funding.deleteMany({
                    where: {
                        funding_id: funding_id,
                        user_id: user_wallet_address,
                    },
                });
                console.log(result2);
                return result2;
            }
            else {
                console.log('없어서 추가함');
                const result3 = await this.db.heart_funding.create({
                    data: { funding_id, user_id: user_wallet_address },
                });
                console.log(result3);
                return result3;
            }
        }
        catch (error) { }
    }
};
LikeFundService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LikeFundService);
exports.LikeFundService = LikeFundService;
//# sourceMappingURL=like-fund.service.js.map