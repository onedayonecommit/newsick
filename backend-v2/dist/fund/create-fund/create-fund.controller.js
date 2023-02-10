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
exports.CreateFundController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const ipfs_upload_service_1 = require("../../nft-storage/ipfs-upload/ipfs-upload.service");
const create_fund_dto_1 = require("./create-fund.dto");
const create_fund_service_1 = require("./create-fund.service");
let CreateFundController = class CreateFundController {
    constructor(createFundService, ipfsUploadService) {
        this.createFundService = createFundService;
        this.ipfsUploadService = ipfsUploadService;
    }
    async createMetadata(file) {
        return await this.ipfsUploadService.ipfsUpload(file);
    }
    async createFund(fundDto) {
        console.log(fundDto.fund.funding_production_date);
    }
};
__decorate([
    (0, common_1.Post)('create/metadata'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('fund_nft_image')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof Express !== "undefined" && (_a = Express.Multer) !== void 0 && _a.File) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], CreateFundController.prototype, "createMetadata", null);
__decorate([
    (0, common_1.Post)('create/fund'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fund_dto_1.createFundMainDto]),
    __metadata("design:returntype", Promise)
], CreateFundController.prototype, "createFund", null);
CreateFundController = __decorate([
    (0, common_1.Controller)('create-fund'),
    __metadata("design:paramtypes", [create_fund_service_1.CreateFundService,
        ipfs_upload_service_1.IpfsUploadService])
], CreateFundController);
exports.CreateFundController = CreateFundController;
//# sourceMappingURL=create-fund.controller.js.map