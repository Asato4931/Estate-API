import { Injectable } from '@nestjs/common';
import { Estate } from '../entities/estate.entity';
import * as Data from '../../assets/estate_transactions.json';

@Injectable()
export class EstateRepository {
  private readonly estateData: Estate[] = (Data as any[]).map((item) => ({
    year: item.year,
    prefectureCode: item.prefectureCode,
    type: item.type,
    value: item.data.result.years[0].value,
  }));

  findEstates(year: number, prefectureCode: number, type: number): number[] {
    const Estates: number[] = [];
    for (const estate of this.estateData) {
      if (
        estate.year === year &&
        estate.prefectureCode === prefectureCode &&
        estate.type === type
      ) {
        Estates.push(estate.value);
      }
    }

    return Estates;
  }
}
