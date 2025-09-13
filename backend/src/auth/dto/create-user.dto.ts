import { IsEmail, IsString, MinLength, MaxLength, Matches, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Username (3-20 characters, alphanumeric, underscores, hyphens)',
    example: 'johndoe',
    minLength: 3,
    maxLength: 20,
  })
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9_-]+$/, {
    message: 'Username must contain only letters, numbers, underscores, and hyphens',
  })
  username: string;

  @ApiProperty({
    description: 'Email address',
    example: 'john@example.com',
  })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  email: string;

  @ApiProperty({
    description: 'Password (minimum 8 characters, must contain letter and number)',
    example: 'password123',
    minLength: 8,
  })
  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]/, {
    message: 'Password must contain at least one letter and one number',
  })
  password: string;

  @ApiProperty({
    description: 'Full name',
    example: 'John Doe',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  full_name?: string;
}

