import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class QueryUserDto {
  @Transform(({ value }) => (value ? +value : 1))
  @IsNumber()
  @IsOptional()
  count: number;
}
