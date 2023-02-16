"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Module = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const image_upload_controller_1 = require("./image-upload/image-upload.controller");
const image_upload_service_1 = require("./image-upload/image-upload.service");
const file_upload_service_1 = require("./file-upload/file-upload.service");
const normal_sound_upload_service_1 = require("./normal-sound-upload/normal-sound-upload.service");
const normal_sound_upload_controller_1 = require("./normal-sound-upload/normal-sound-upload.controller");
const funding_sound_upload_controller_1 = require("./funding-sound-upload/funding-sound-upload.controller");
const funding_sound_upload_service_1 = require("./funding-sound-upload/funding-sound-upload.service");
let S3Module = class S3Module {
};
S3Module = __decorate([
    (0, common_1.Module)({
        controllers: [
            image_upload_controller_1.ImageUploadController,
            normal_sound_upload_controller_1.NormalSoundUploadController,
            funding_sound_upload_controller_1.FundingSoundUploadController,
        ],
        providers: [
            prisma_service_1.PrismaService,
            image_upload_service_1.ImageUploadService,
            normal_sound_upload_service_1.NormalSoundUploadService,
            funding_sound_upload_service_1.FundingSoundUploadService,
            file_upload_service_1.FileUploadService,
        ],
    })
], S3Module);
exports.S3Module = S3Module;
//# sourceMappingURL=s3.module.js.map