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
exports.EmailSendService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let EmailSendService = class EmailSendService {
    constructor(mail) {
        this.mail = mail;
    }
    async signUpMail(user_email) {
        try {
            await this.mail.sendMail({
                to: user_email,
                subject: 'Hello',
                template: '../templates/signup',
                context: { user_email },
            });
            return true;
        }
        catch (error) {
            throw new common_1.HttpException('mail server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
EmailSendService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], EmailSendService);
exports.EmailSendService = EmailSendService;
//# sourceMappingURL=email-send.service.js.map