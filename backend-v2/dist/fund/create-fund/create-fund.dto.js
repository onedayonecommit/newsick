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
exports.createFundMainDto = exports.createFundSingerDto = exports.createFundMusicDto = exports.createFundLyricsDto = exports.createFundDto = void 0;
const class_validator_1 = require("class-validator");
class createFundDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], createFundDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createFundDto.prototype, "creator_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createFundDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createFundDto.prototype, "funding_info", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], createFundDto.prototype, "funding_start_date", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], createFundDto.prototype, "funding_finish_date", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], createFundDto.prototype, "funding_production_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createFundDto.prototype, "funding_nft_image", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createFundDto.prototype, "funding_metadata", void 0);
exports.createFundDto = createFundDto;
class createFundLyricsDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createFundLyricsDto.prototype, "lyrics_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createFundLyricsDto.prototype, "lyrics_info", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], createFundLyricsDto.prototype, "lyrics_sex", void 0);
exports.createFundLyricsDto = createFundLyricsDto;
class createFundMusicDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createFundMusicDto.prototype, "music_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createFundMusicDto.prototype, "music_info", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], createFundMusicDto.prototype, "music_sex", void 0);
exports.createFundMusicDto = createFundMusicDto;
class createFundSingerDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createFundSingerDto.prototype, "singer_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createFundSingerDto.prototype, "singer_info", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], createFundSingerDto.prototype, "singer_sex", void 0);
exports.createFundSingerDto = createFundSingerDto;
class createFundMainDto {
}
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", createFundDto)
], createFundMainDto.prototype, "fund", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", createFundLyricsDto)
], createFundMainDto.prototype, "lyrics_maker", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", createFundMusicDto)
], createFundMainDto.prototype, "music_maker", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", createFundSingerDto)
], createFundMainDto.prototype, "singer", void 0);
exports.createFundMainDto = createFundMainDto;
//# sourceMappingURL=create-fund.dto.js.map