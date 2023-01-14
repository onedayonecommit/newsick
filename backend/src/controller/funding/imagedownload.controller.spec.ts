import { Test, TestingModule } from '@nestjs/testing';
import { ImagedownloadController } from './imagedownload.controller';

describe('ImagedownloadController', () => {
  let controller: ImagedownloadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagedownloadController],
    }).compile();

    controller = module.get<ImagedownloadController>(ImagedownloadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
