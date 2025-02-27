import { Test, TestingModule } from '@nestjs/testing';
import { GetEstateService } from './get-estate.service';

describe('GetEstateService', () => {
  let service: GetEstateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetEstateService],
    }).compile();

    service = module.get<GetEstateService>(GetEstateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
