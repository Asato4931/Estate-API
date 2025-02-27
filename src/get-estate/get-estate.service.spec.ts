import { Test, TestingModule } from '@nestjs/testing';
import { GetEstateService } from './get-estate.service';
import { EstateRepository } from './repositories/estate.repository';

describe('GetEstateService', () => {
  let service: GetEstateService;
  let estateRepository: EstateRepository;

  beforeEach(async () => {
    const mockestateRepository = {
      findEstates: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetEstateService],
    })
      .overrideProvider(GetEstateService)
      .useValue(mockestateRepository)
      .compile();

    service = module.get<GetEstateService>(GetEstateService);
    estateRepository = module.get<EstateRepository>(EstateRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('if matching keys, return the value of the estate', () => {
    estateRepository.findEstates = jest.fn().mockReturnValue([356100]);
    const result = service.getEstates(2018, 13, 1);
    expect(result).toEqual([356100]);
  });
  it('if there are no estates that match the keys', () => {
    estateRepository.findEstates = jest.fn().mockReturnValue([]);
    const result = service.getEstates(2024, 16, 2);
    expect(result).toMatch('None Found!');
  });
});
