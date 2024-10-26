import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostsDTO {
  @IsString()
  @IsNotEmpty()
  content!: string;

  @IsString()
  @IsNotEmpty()
  threadId!: number;
}
