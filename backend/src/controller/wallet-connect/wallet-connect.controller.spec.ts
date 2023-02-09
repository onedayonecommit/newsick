import { Test, TestingModule } from '@nestjs/testing';
import { WalletConnectController } from './wallet-connect.controller';

describe('WalletConnectController', () => {
  let controller: WalletConnectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalletConnectController],
    }).compile();

    controller = module.get<WalletConnectController>(WalletConnectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
