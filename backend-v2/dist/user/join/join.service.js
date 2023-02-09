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
exports.JoinService = void 0;
const common_1 = require("@nestjs/common");
const email_send_service_1 = require("../../email/email-send/email-send.service");
const prisma_service_1 = require("../../prisma.service");
const duplicate_check_service_1 = require("../duplicate-check/duplicate-check.service");
let JoinService = class JoinService {
    constructor(db, duplicateService, mailService) {
        this.db = db;
        this.duplicateService = duplicateService;
        this.mailService = mailService;
    }
    async userJoin(joinDto) {
        const { user_email, user_name, user_wallet_address, is_creator } = joinDto;
        try {
            const mailCheck = await this.duplicateService.userEmailCheck(user_email);
            const nameCheck = await this.duplicateService.userNameCheck(user_name);
            const walletCheck = await this.duplicateService.userWalletCheck(user_wallet_address);
            if (!mailCheck)
                return 'already in use this mail';
            if (!nameCheck)
                return 'already in use this name';
            if (!walletCheck)
                return 'already in use this wallet';
            const result = await this.db.user.create({
                data: {
                    user_email,
                    user_name,
                    user_wallet_address,
                    creator: {
                        create: [{ is_creator: is_creator }],
                    },
                    ticket: {
                        create: [{ ticket_type: 0 }],
                    },
                },
            });
            const resDto = Object.assign(Object.assign({}, result), { createStatus: true });
            if (result) {
                this.mailService.signUpMail(user_email);
                return resDto;
            }
        }
        catch (error) {
            throw new common_1.HttpException('signUp server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
JoinService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        duplicate_check_service_1.DuplicateCheckService,
        email_send_service_1.EmailSendService])
], JoinService);
exports.JoinService = JoinService;
//# sourceMappingURL=join.service.js.map