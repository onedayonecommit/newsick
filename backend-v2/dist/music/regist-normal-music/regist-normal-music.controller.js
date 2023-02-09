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
exports.RegistNormalMusicController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const normal_music_dto_1 = require("./normal-music.dto");
const regist_normal_music_service_1 = require("./regist-normal-music.service");
let RegistNormalMusicController = class RegistNormalMusicController {
    constructor(registNormalMusic) {
        this.registNormalMusic = registNormalMusic;
    }
    async approveNormalMusic(dto, files) {
        console.log(JSON.parse(files.data[0].buffer));
        return await this.registNormalMusic.normalMusicUpload(dto, files);
    }
};
__decorate([
    (0, common_1.Post)('approve'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'cover_image', maxCount: 1 },
        { name: 'mp3_file', maxCount: 1 },
        { name: 'data' },
    ])),
    __param(0, (0, common_1.Body)('data')),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [normal_music_dto_1.normalMusicDto, Object]),
    __metadata("design:returntype", Promise)
], RegistNormalMusicController.prototype, "approveNormalMusic", null);
RegistNormalMusicController = __decorate([
    (0, common_1.Controller)('regist-normal-music'),
    __metadata("design:paramtypes", [regist_normal_music_service_1.RegistNormalMusicService])
], RegistNormalMusicController);
exports.RegistNormalMusicController = RegistNormalMusicController;
//# sourceMappingURL=regist-normal-music.controller.js.map