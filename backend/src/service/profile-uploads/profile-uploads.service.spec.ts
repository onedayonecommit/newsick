import { Test, TestingModule } from '@nestjs/testing';
import { ProfileUploadsService } from './profile-uploads.service';

describe('ProfileUploadsService', () => {
  let service: ProfileUploadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileUploadsService],
    }).compile();

    service = module.get<ProfileUploadsService>(ProfileUploadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
