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
exports.ApproveFundingMusicController = void 0;
const common_1 = require("@nestjs/common");
const approve_funding_music_service_1 = require("./approve-funding-music.service");
const approve_dto_1 = require("./approve.dto");
let ApproveFundingMusicController = class ApproveFundingMusicController {
    constructor(approveService) {
        this.approveService = approveService;
    }
    async registFundMusicList() {
        return await this.approveService.registFundMusicList();
    }
    async approveFundMusic(dto) {
        return await this.approveService.approveFundMusic(dto.funding_id);
    }
    async rejectFundMusic(dto) {
        return await this.approveService.rejectFundMusic(dto.funding_id);
    }
};
__decorate([
    (0, common_1.Post)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApproveFundingMusicController.prototype, "registFundMusicList", null);
__decorate([
    (0, common_1.Post)('approve'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [approve_dto_1.approveDto]),
    __metadata("design:returntype", Promise)
], ApproveFundingMusicController.prototype, "approveFundMusic", null);
__decorate([
    (0, common_1.Post)('reject'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [approve_dto_1.approveDto]),
    __metadata("design:returntype", Promise)
], ApproveFundingMusicController.prototype, "rejectFundMusic", null);
ApproveFundingMusicController = __decorate([
    (0, common_1.Controller)('approve-funding-music'),
    __metadata("design:paramtypes", [approve_funding_music_service_1.ApproveFundingMusicService])
], ApproveFundingMusicController);
exports.ApproveFundingMusicController = ApproveFundingMusicController;
//# sourceMappingURL=approve-funding-music.controller.js.map