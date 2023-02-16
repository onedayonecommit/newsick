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
exports.FundingSoundUploadController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const funding_sound_upload_service_1 = require("./funding-sound-upload.service");
let FundingSoundUploadController = class FundingSoundUploadController {
    constructor(fundingSoundUpload) {
        this.fundingSoundUpload = fundingSoundUpload;
    }
    async testmp3(mp3) {
        console.log(mp3);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('mp3')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FundingSoundUploadController.prototype, "testmp3", null);
FundingSoundUploadController = __decorate([
    (0, common_1.Controller)('funding-sound-upload'),
    __metadata("design:paramtypes", [funding_sound_upload_service_1.FundingSoundUploadService])
], FundingSoundUploadController);
exports.FundingSoundUploadController = FundingSoundUploadController;
//# sourceMappingURL=funding-sound-upload.controller.js.map