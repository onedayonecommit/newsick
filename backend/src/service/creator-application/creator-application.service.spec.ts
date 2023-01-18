import { Test, TestingModule } from '@nestjs/testing';
import { CreatorApplicationService } from './creator-application.service';

describe('CreatorApplicationService', () => {
  let service: CreatorApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatorApplicationService],
    }).compile();

    service = module.get<CreatorApplicationService>(CreatorApplicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
