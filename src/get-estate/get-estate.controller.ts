import {
  Controller,
  Query,
  Get,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GetEstateService } from './get-estate.service';
import { GetEstateQueryDto } from './dto/get-estatequery.dto';
import {} from 'express';

@Controller('api/v1/townPlanning/estateTransaction/bar')
export class GetEstateController {
  constructor(private getEstateService: GetEstateService) {}
  @Get()
  @UsePipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  )
  findAll(@Query() query: GetEstateQueryDto): number[] | string {
    const { year, prefectureCode, type } = query;
    return this.getEstateService.getEstates(year, prefectureCode, type);
  }
}
