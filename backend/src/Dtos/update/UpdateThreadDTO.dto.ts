import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateThreadDTO {
  @IsNumber()
  @IsNotEmpty()
  id!: number;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsOptional()
  @IsNotEmpty()
  likes?: number;
}
