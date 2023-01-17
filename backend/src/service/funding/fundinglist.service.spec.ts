import { Test, TestingModule } from '@nestjs/testing';
import { FundinglistService } from './fundinglist.service';

describe('FundinglistService', () => {
  let service: FundinglistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundinglistService],
    }).compile();

    service = module.get<FundinglistService>(FundinglistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
