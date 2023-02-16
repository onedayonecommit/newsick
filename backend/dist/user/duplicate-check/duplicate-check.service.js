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
exports.DuplicateCheckService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let DuplicateCheckService = class DuplicateCheckService {
    constructor(db) {
        this.db = db;
    }
    async userEmailCheck(user_email) {
        try {
            const result = await this.db.user.findUnique({
                where: { user_email },
            });
            if (result)
                return false;
            else
                return true;
        }
        catch (error) {
            throw new common_1.HttpException('duplicate check service error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async userNameCheck(user_name) {
        try {
            const result = await this.db.user.findUnique({
                where: { user_name },
            });
            if (result)
                return false;
            else
                return true;
        }
        catch (error) {
            throw new common_1.HttpException('duplicate check service error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async userWalletCheck(user_wallet_address) {
        try {
            const result = await this.db.user.findUnique({
                where: { user_wallet_address },
            });
            if (result)
                return false;
            else
                return true;
        }
        catch (error) {
            throw new common_1.HttpException('duplicate check service error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
DuplicateCheckService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DuplicateCheckService);
exports.DuplicateCheckService = DuplicateCheckService;
//# sourceMappingURL=duplicate-check.service.js.map