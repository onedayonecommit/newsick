/* eslint-disable prettier/prettier */
import { Request } from 'express';
import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

// 컨트롤러는 client의 요청에 대한 라우팅을 처리한다.
@Controller()
export class AppController {
  // provider인 Appsercive에 처리요청을 보낸다.
  constructor(private readonly appService: AppService) {}
  // 서비스에서 받은 결과를 client로 보냄
  @Get()
  main(): string {
    return this.appService.main();
  }

}
