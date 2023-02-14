import { Body, Controller, Post } from '@nestjs/common';
import { user } from '@prisma/client';
import { applicationCreatorDto } from './application-creator.dto';
import { ApplicationCreatorService } from './application-creator.service';

@Controller('application-creator') //
export class ApplicationCreatorController {
  constructor(private readonly applicationService: ApplicationCreatorService) {}

  @Post()
  async applyCreator(@Body() dto: applicationCreatorDto): Promise<user> {
    return await this.applicationService.applyCreator(dto);
  }
}
