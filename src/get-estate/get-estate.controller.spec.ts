import { Test, TestingModule } from '@nestjs/testing';
import { GetEstateController } from './get-estate.controller';

describe('GetEstateController', () => {
  let controller: GetEstateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetEstateController],
    }).compile();

    controller = module.get<GetEstateController>(GetEstateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
