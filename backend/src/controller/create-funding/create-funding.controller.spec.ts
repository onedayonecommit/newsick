import { Test, TestingModule } from '@nestjs/testing';
import { CreateFundingController } from './create-funding.controller';

describe('CreateFundingController', () => {
  let controller: CreateFundingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateFundingController],
    }).compile();

    controller = module.get<CreateFundingController>(CreateFundingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
