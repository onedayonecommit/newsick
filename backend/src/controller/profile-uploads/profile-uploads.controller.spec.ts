import { Test, TestingModule } from '@nestjs/testing';
import { ProfileUploadsController } from './profile-uploads.controller';

describe('ProfileUploadsController', () => {
  let controller: ProfileUploadsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileUploadsController],
    }).compile();

    controller = module.get<ProfileUploadsController>(ProfileUploadsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
