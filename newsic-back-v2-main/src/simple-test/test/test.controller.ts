import { Controller, Post } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post('test')
  async allUpdate() {
    return await this.testService.allUpdate();
  }

  @Post('get')
  async allGet() {
    return await this.testService.allGet();
  }
}
