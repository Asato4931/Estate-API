import { Injectable } from '@nestjs/common';
import { EstateRepository } from './repositories/estate.repository';

@Injectable()
export class GetEstateService {
  constructor(private readonly estateRepository: EstateRepository) {}
  getEstates(
    year: number,
    prefectureCode: number,
    type: number,
  ): number[] | string {
    const estates = this.estateRepository.findEstates(
      year,
      prefectureCode,
      type,
    );
    if (estates.length == 0) {
      return 'None found!';
    } else {
      return estates;
    }
  }
}
