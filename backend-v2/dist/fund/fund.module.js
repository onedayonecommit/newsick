"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundModule = void 0;
const common_1 = require("@nestjs/common");
const ipfs_upload_service_1 = require("../nft-storage/ipfs-upload/ipfs-upload.service");
const prisma_service_1 = require("../prisma.service");
const create_fund_controller_1 = require("./create-fund/create-fund.controller");
const create_fund_service_1 = require("./create-fund/create-fund.service");
let FundModule = class FundModule {
};
FundModule = __decorate([
    (0, common_1.Module)({
        controllers: [create_fund_controller_1.CreateFundController],
        providers: [create_fund_service_1.CreateFundService, prisma_service_1.PrismaService, ipfs_upload_service_1.IpfsUploadService],
    })
], FundModule);
exports.FundModule = FundModule;
//# sourceMappingURL=fund.module.js.map