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
exports.ApplicationCreatorController = void 0;
const common_1 = require("@nestjs/common");
const application_creator_dto_1 = require("./application-creator.dto");
const application_creator_service_1 = require("./application-creator.service");
let ApplicationCreatorController = class ApplicationCreatorController {
    constructor(applicationService) {
        this.applicationService = applicationService;
    }
    async applyCreator(dto) {
        return await this.applicationService.applyCreator(dto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [application_creator_dto_1.applicationCreatorDto]),
    __metadata("design:returntype", Promise)
], ApplicationCreatorController.prototype, "applyCreator", null);
ApplicationCreatorController = __decorate([
    (0, common_1.Controller)('application-creator'),
    __metadata("design:paramtypes", [application_creator_service_1.ApplicationCreatorService])
], ApplicationCreatorController);
exports.ApplicationCreatorController = ApplicationCreatorController;
//# sourceMappingURL=application-creator.controller.js.map