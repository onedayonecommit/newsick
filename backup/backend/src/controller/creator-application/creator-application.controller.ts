import { Controller, Post } from '@nestjs/common';
import { CreatorApplicationService } from 'src/service/creator-application/creator-application.service';

@Controller('creator-application')
export class CreatorApplicationController {
  constructor(
    private readonly creatorApplicationService: CreatorApplicationService,
  ) {}
}
