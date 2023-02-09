"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadService = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
const uuid_1 = require("uuid");
const path_1 = require("path");
let FileUploadService = class FileUploadService {
    constructor() {
        this.s3 = new AWS.S3({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY,
                secretAccessKey: process.env.AWS_SECRET_KEY,
            },
        });
        this.AWS_S3_BUCKET = process.env.AWS_BUCKET_NAME;
    }
    async deleteFile(result) {
        if (result !== 'default_profile_image.png') {
            try {
                this.s3
                    .deleteObject({
                    Bucket: this.AWS_S3_BUCKET,
                    Key: result,
                })
                    .promise();
            }
            catch (error) {
                throw new common_1.HttpException('파일 삭제 안됌', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async uploadFile(file) {
        console.log(file);
        const filebasename = `${(0, uuid_1.v4)()}${(0, path_1.extname)(file.originalname)}`;
        const params = {
            Bucket: this.AWS_S3_BUCKET,
            Key: String(filebasename),
            Body: file.buffer,
        };
        try {
            await this.s3.upload(params).promise();
            return filebasename;
        }
        catch (e) {
            console.log(e);
            throw new Error('Failed to upload file.');
        }
    }
};
FileUploadService = __decorate([
    (0, common_1.Injectable)()
], FileUploadService);
exports.FileUploadService = FileUploadService;
//# sourceMappingURL=file-upload.service.js.map