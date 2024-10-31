import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
  Matches,
} from 'class-validator';

enum Role {
  'Administrator',
  'Student',
}

export class CreateUsersDTO {
  @IsString()
  username!: string;

  @IsStrongPassword({ minLength: 8 })
  password!: string;

  @IsEmail({ allow_ip_domain: true })
  @Matches(/@fatec\.sp\.gov\.br$/, {
    message: 'Email must be a valid fatec.sp.gov.br address',
  })
  email!: string;

  @IsString()
  @IsEnum(Role, { message: 'Role must be one of the valid ones' })
  role!: string;

  @IsString()
  @IsOptional()
  likedPosts?: string;

  @IsString()
  @IsOptional()
  likedThreads?: string;

  @IsString()
  @IsOptional()
  avatar?: string;
}
