import { Module } from '@nestjs/common';
import { GetEstateController } from './get-estate.controller';
import { GetEstateService } from './get-estate.service';
import { EstateRepository } from './repositories/estate.repository';

@Module({
  controllers: [GetEstateController],
  providers: [GetEstateService, EstateRepository],
})
export class GetEstateModule {}
