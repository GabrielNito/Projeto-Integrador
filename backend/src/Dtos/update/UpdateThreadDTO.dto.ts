import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateThreadDTO {
  @IsNumber()
  @IsNotEmpty()
  id!: number;

  @IsString()
  @IsNotEmpty()
  title!: string;
}
