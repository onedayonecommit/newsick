import { Test, TestingModule } from '@nestjs/testing';
import { SignupEmailController } from './signup-email.controller';

describe('SignupEmailController', () => {
  let controller: SignupEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignupEmailController],
    }).compile();

    controller = module.get<SignupEmailController>(SignupEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
