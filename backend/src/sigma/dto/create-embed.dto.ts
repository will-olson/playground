import { IsString, IsOptional, IsObject, IsEmail } from 'class-validator';

export class CreateEmbedDto {
  @IsString()
  workbookPath: string;

  @IsEmail()
  userEmail: string;

  @IsOptional()
  @IsObject()
  options?: any;
}

export class TestEmbedDto {
  @IsString()
  workbookPath: string;

  @IsEmail()
  userEmail: string;

  @IsOptional()
  @IsObject()
  jwtOptions?: any;
}
