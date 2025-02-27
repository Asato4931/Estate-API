import { Module } from '@nestjs/common';
import { GetEstateController } from './get-estate.controller';
import { GetEstateService } from './get-estate.service';

@Module({
  controllers: [GetEstateController],
  providers: [GetEstateService]
})
export class GetEstateModule {}
