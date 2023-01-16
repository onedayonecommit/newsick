import { Test, TestingModule } from '@nestjs/testing';
import { FundinglistController } from './fundinglist.controller';

describe('FundinglistController', () => {
  let controller: FundinglistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FundinglistController],
    }).compile();

    controller = module.get<FundinglistController>(FundinglistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
