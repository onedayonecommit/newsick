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
exports.fundingMusicDto = void 0;
const class_validator_1 = require("class-validator");
class fundingMusicDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], fundingMusicDto.prototype, "funding_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], fundingMusicDto.prototype, "music_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], fundingMusicDto.prototype, "music_lyrics", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], fundingMusicDto.prototype, "music_genre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], fundingMusicDto.prototype, "music_maker", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], fundingMusicDto.prototype, "lyrics_maker", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], fundingMusicDto.prototype, "singer", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], fundingMusicDto.prototype, "album_name", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], fundingMusicDto.prototype, "title", void 0);
exports.fundingMusicDto = fundingMusicDto;
//# sourceMappingURL=funding-music.dto.js.map