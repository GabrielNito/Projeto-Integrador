import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateThreadsDTO {
  @IsString()
  @IsNotEmpty()
  title!: string;
}
