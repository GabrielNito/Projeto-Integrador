import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdatePostsDTO {
  @IsString()
  @IsNotEmpty()
  content!: string;

  @IsInt()
  @IsNotEmpty()
  id!: number;
}
