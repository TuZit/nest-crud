import { IsString, IsNumber, IsOptional, IsBoolean, IsDate, Length } from 'class-validator';

export class CreateProductDTO {
  @IsString({ message: 'NHập tên đi d.m' })
  @Length(1, 255, { message: 'Tên từ 1-255 ký tự' })
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  @IsOptional()
  description: string;

  @IsDate()
  @IsOptional()
  created: Date;

  @IsDate()
  @IsOptional()
  updated: Date;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}
