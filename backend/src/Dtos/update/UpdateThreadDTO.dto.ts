import { IsNumber, IsString } from 'class-validator';

export class UpdateThreadDTO {
  @IsNumber()
  id!: number;

  @IsNumber()
  userId!: number;

  @IsString()
  title!: string;
}
