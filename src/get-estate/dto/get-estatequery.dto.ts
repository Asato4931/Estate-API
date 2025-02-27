import { IsInt, Min, Max } from 'class-validator';

export class GetEstateQueryDto {
  @IsInt()
  @Min(2015)
  @Max(2018)
  year: number;

  @IsInt()
  @Min(8)
  @Max(14)
  prefectureCode: number;

  @IsInt()
  @Min(1)
  @Max(2)
  type: number;
}
