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
exports.BuyTicketController = void 0;
const common_1 = require("@nestjs/common");
const buy_ticket_dto_1 = require("./buy-ticket.dto");
const buy_ticket_service_1 = require("./buy-ticket.service");
let BuyTicketController = class BuyTicketController {
    constructor(buyTicketService) {
        this.buyTicketService = buyTicketService;
    }
    async buyTicket(dto) {
        return await this.buyTicketService;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [buy_ticket_dto_1.buyTicketDto]),
    __metadata("design:returntype", Promise)
], BuyTicketController.prototype, "buyTicket", null);
BuyTicketController = __decorate([
    (0, common_1.Controller)('buy-ticket'),
    __metadata("design:paramtypes", [buy_ticket_service_1.BuyTicketService])
], BuyTicketController);
exports.BuyTicketController = BuyTicketController;
//# sourceMappingURL=buy-ticket.controller.js.map