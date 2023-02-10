"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicModule = void 0;
const common_1 = require("@nestjs/common");
const streaming_controller_1 = require("./streaming/streaming.controller");
const streaming_service_1 = require("./streaming/streaming.service");
const regist_normal_music_controller_1 = require("./regist-normal-music/regist-normal-music.controller");
const regist_normal_music_service_1 = require("./regist-normal-music/regist-normal-music.service");
const regist_funding_music_service_1 = require("./regist-funding-music/regist-funding-music.service");
const regist_funding_music_controller_1 = require("./regist-funding-music/regist-funding-music.controller");
const prisma_service_1 = require("../prisma.service");
const file_upload_service_1 = require("../s3/file-upload/file-upload.service");
const approve_funding_music_service_1 = require("./approve-funding-music/approve-funding-music.service");
const approve_funding_music_controller_1 = require("./approve-funding-music/approve-funding-music.controller");
const streaming_auth_service_1 = require("../auth/streaming-auth/streaming-auth.service");
let MusicModule = class MusicModule {
};
MusicModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            streaming_controller_1.StreamingController,
            regist_normal_music_controller_1.RegistNormalMusicController,
            regist_funding_music_controller_1.RegistFundingMusicController,
            approve_funding_music_controller_1.ApproveFundingMusicController,
        ],
        providers: [
            streaming_service_1.StreamingService,
            regist_normal_music_service_1.RegistNormalMusicService,
            regist_funding_music_service_1.RegistFundingMusicService,
            prisma_service_1.PrismaService,
            file_upload_service_1.FileUploadService,
            approve_funding_music_service_1.ApproveFundingMusicService,
            streaming_auth_service_1.StreamingAuthService,
        ],
    })
], MusicModule);
exports.MusicModule = MusicModule;
//# sourceMappingURL=music.module.js.map