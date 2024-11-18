import {
  IsString,
  IsOptional,
  IsStrongPassword,
  IsEnum,
  IsNumber,
  IsInt,
} from 'class-validator';

enum Role {
  'Administrator',
  'Student',
}

export class UpdateUserDTO {
  @IsNumber()
  id!: number;

  @IsOptional()
  @IsStrongPassword()
  password?: string;

  @IsOptional()
  @IsEnum(Role)
  role?: string;

  @IsOptional()
  @IsString()
  likedPosts?: string;

  @IsOptional()
  @IsString()
  likedThreads?: string;

  @IsOptional()
  @IsString()
  avatar?: string;
}
