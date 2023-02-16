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
exports.ImageUploadService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const file_upload_service_1 = require("../file-upload/file-upload.service");
let ImageUploadService = class ImageUploadService {
    constructor(db, uploadService) {
        this.db = db;
        this.uploadService = uploadService;
    }
    async profileImageUpload(file, user_wallet_address) {
        const result = await this.db.user.findUnique({
            where: { user_wallet_address },
        });
        if (result) {
            this.uploadService.deleteFile(result.user_profile_image);
            const user_profile_image = await this.uploadService.uploadFile(file);
            await this.db.user.update({
                data: { user_profile_image },
                where: { user_wallet_address },
            });
            return { status: true, httpStatus: 201 };
        }
        else {
            throw new common_1.HttpException('who are you?', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
ImageUploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        file_upload_service_1.FileUploadService])
], ImageUploadService);
exports.ImageUploadService = ImageUploadService;
//# sourceMappingURL=image-upload.service.js.map