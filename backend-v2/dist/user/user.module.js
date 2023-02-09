"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const join_controller_1 = require("./join/join.controller");
const join_service_1 = require("./join/join.service");
const login_controller_1 = require("./login/login.controller");
const login_service_1 = require("./login/login.service");
const change_info_controller_1 = require("./change-info/change-info.controller");
const change_info_service_1 = require("./change-info/change-info.service");
const application_creator_service_1 = require("./application-creator/application-creator.service");
const application_creator_controller_1 = require("./application-creator/application-creator.controller");
const buy_ticket_service_1 = require("./buy-ticket/buy-ticket.service");
const buy_ticket_controller_1 = require("./buy-ticket/buy-ticket.controller");
const duplicate_check_service_1 = require("./duplicate-check/duplicate-check.service");
const prisma_service_1 = require("../prisma.service");
const image_upload_service_1 = require("../s3/image-upload/image-upload.service");
const file_upload_service_1 = require("../s3/file-upload/file-upload.service");
const email_send_service_1 = require("../email/email-send/email-send.service");
const like_music_controller_1 = require("./like-music/like-music.controller");
const like_music_service_1 = require("./like-music/like-music.service");
const like_fund_service_1 = require("./like-fund/like-fund.service");
const like_fund_controller_1 = require("./like-fund/like-fund.controller");
const playlist_controller_1 = require("./playlist/playlist.controller");
const playlist_service_1 = require("./playlist/playlist.service");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            join_controller_1.JoinController,
            login_controller_1.LoginController,
            change_info_controller_1.ChangeInfoController,
            application_creator_controller_1.ApplicationCreatorController,
            buy_ticket_controller_1.BuyTicketController,
            like_music_controller_1.LikeMusicController,
            like_fund_controller_1.LikeFundController,
            playlist_controller_1.PlaylistController,
        ],
        providers: [
            join_service_1.JoinService,
            login_service_1.LoginService,
            change_info_service_1.ChangeInfoService,
            application_creator_service_1.ApplicationCreatorService,
            buy_ticket_service_1.BuyTicketService,
            duplicate_check_service_1.DuplicateCheckService,
            prisma_service_1.PrismaService,
            image_upload_service_1.ImageUploadService,
            file_upload_service_1.FileUploadService,
            email_send_service_1.EmailSendService,
            like_music_service_1.LikeMusicService,
            like_fund_service_1.LikeFundService,
            playlist_service_1.PlaylistService,
        ],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map