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
exports.ChangeInfoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const image_upload_service_1 = require("../../s3/image-upload/image-upload.service");
let ChangeInfoService = class ChangeInfoService {
    constructor(db, imageUploadService) {
        this.db = db;
        this.imageUploadService = imageUploadService;
    }
    async changeProfileImage(file, user_wallet_address) {
        try {
            return await this.imageUploadService.profileImageUpload(file, user_wallet_address);
        }
        catch (error) {
            throw new common_1.HttpException('profile image upload server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async changeUserName(dto) {
        const { user_wallet_address, user_name } = dto;
        try {
            return await this.db.user.update({
                where: { user_wallet_address },
                data: {
                    user_name,
                },
            });
        }
        catch (error) {
            throw new common_1.HttpException('change name Service Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
ChangeInfoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        image_upload_service_1.ImageUploadService])
], ChangeInfoService);
exports.ChangeInfoService = ChangeInfoService;
//# sourceMappingURL=change-info.service.js.map