import { Test, TestingModule } from '@nestjs/testing';
import { CreateFundingService } from './create-funding.service';

describe('CreateFundingService', () => {
  let service: CreateFundingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateFundingService],
    }).compile();

    service = module.get<CreateFundingService>(CreateFundingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
