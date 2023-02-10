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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeInfoController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const change_info_dto_1 = require("./change-info.dto");
const change_info_service_1 = require("./change-info.service");
let ChangeInfoController = class ChangeInfoController {
    constructor(changeService) {
        this.changeService = changeService;
    }
    async changeProfileImage(file, user_wallet_address) {
        return await this.changeService.changeProfileImage(file, user_wallet_address);
    }
    async changeUserName(dto) {
        return await this.changeService.changeUserName(dto);
    }
};
__decorate([
    (0, common_1.Post)('profile/image'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)('address')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof Express !== "undefined" && (_a = Express.Multer) !== void 0 && _a.File) === "function" ? _b : Object, String]),
    __metadata("design:returntype", Promise)
], ChangeInfoController.prototype, "changeProfileImage", null);
__decorate([
    (0, common_1.Post)('user/name'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_info_dto_1.changeDto]),
    __metadata("design:returntype", Promise)
], ChangeInfoController.prototype, "changeUserName", null);
ChangeInfoController = __decorate([
    (0, common_1.Controller)('change-info'),
    __metadata("design:paramtypes", [change_info_service_1.ChangeInfoService])
], ChangeInfoController);
exports.ChangeInfoController = ChangeInfoController;
//# sourceMappingURL=change-info.controller.js.map