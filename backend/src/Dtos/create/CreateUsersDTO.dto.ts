import {
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
  Matches,
} from 'class-validator';

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
  @IsOptional()
  likedPosts?: string;

  @IsString()
  @IsOptional()
  likedThreads?: string;

  @IsString()
  @IsOptional()
  avatar?: string;
}
