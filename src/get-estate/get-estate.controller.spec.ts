import { Test, TestingModule } from '@nestjs/testing';
import { GetEstateController } from './get-estate.controller';
import { GetEstateService } from './get-estate.service';

describe('GetEstateController', () => {
  let controller: GetEstateController;
  let getEstateService: GetEstateService;

  beforeEach(async () => {
    const mockgetEstateService = {
      getEstates: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetEstateController],
      providers: [GetEstateService],
    })
      .overrideProvider(GetEstateService)
      .useValue(mockgetEstateService)
      .compile();

    controller = module.get<GetEstateController>(GetEstateController);
    getEstateService = module.get<GetEstateService>(GetEstateService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('for proper query, check if controller will fire the service, and returns the value given from service', () => {
    const query = { year: 2018, prefectureCode: 13, type: 1 };
    getEstateService.getEstates = jest.fn().mockReturnValue([356100]);
    const value = controller.findAll(query);
    expect(getEstateService.getEstates).toHaveBeenCalledWith(
      query.year,
      query.prefectureCode,
      query.type,
    );
    expect(value).toEqual([356100]);
  });
});
