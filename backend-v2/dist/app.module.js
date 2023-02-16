"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const email_module_1 = require("./email/email.module");
const fund_module_1 = require("./fund/fund.module");
const music_module_1 = require("./music/music.module");
const env_module_1 = require("./env/env.module");
const s3_module_1 = require("./s3/s3.module");
const nft_storage_module_1 = require("./nft-storage/nft-storage.module");
const auth_module_1 = require("./auth/auth.module");
const mypage_module_1 = require("./mypage/mypage.module");
const search_module_1 = require("./search/search.module");
const simple_test_module_1 = require("./simple-test/simple-test.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            email_module_1.EmailModule,
            fund_module_1.FundModule,
            music_module_1.MusicModule,
            env_module_1.EnvModule,
            s3_module_1.S3Module,
            nft_storage_module_1.NftStorageModule,
            auth_module_1.AuthModule,
            mypage_module_1.MypageModule,
            search_module_1.SearchModule,
            simple_test_module_1.SimpleTestModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map