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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let LoginService = class LoginService {
    constructor(db) {
        this.db = db;
    }
    async userConnect(user_wallet_address) {
        try {
            const result = await this.db.user.findUnique({
                where: { user_wallet_address },
                include: { creator: { where: { creator_id: user_wallet_address } } },
            });
            const resDto = Object.assign(Object.assign({}, result), { createStatus: false });
            if (result) {
                resDto.createStatus = true;
                return resDto;
            }
            else {
                return resDto;
            }
        }
        catch (error) {
            throw new common_1.HttpException('login server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LoginService.prototype, "userConnect", null);
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map