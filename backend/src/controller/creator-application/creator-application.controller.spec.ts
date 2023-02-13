import { Test, TestingModule } from '@nestjs/testing';
import { CreatorApplicationController } from './creator-application.controller';

describe('CreatorApplicationController', () => {
  let controller: CreatorApplicationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatorApplicationController],
    }).compile();

    controller = module.get<CreatorApplicationController>(
      CreatorApplicationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
