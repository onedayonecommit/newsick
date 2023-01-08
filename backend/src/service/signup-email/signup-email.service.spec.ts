import { Test, TestingModule } from '@nestjs/testing';
import { SignupEmailService } from './signup-email.service';

describe('SignupEmailService', () => {
  let service: SignupEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignupEmailService],
    }).compile();

    service = module.get<SignupEmailService>(SignupEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
