import { Test, TestingModule } from '@nestjs/testing';
import { ImagedownloadService } from './imagedownload.service';

describe('ImagedownloadService', () => {
  let service: ImagedownloadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagedownloadService],
    }).compile();

    service = module.get<ImagedownloadService>(ImagedownloadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
