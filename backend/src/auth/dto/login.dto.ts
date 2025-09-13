import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'Email address',
    example: 'john@example.com',
  })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  email: string;

  @ApiProperty({
    description: 'Password',
    example: 'password123',
  })
  @IsString()
  @MinLength(1, { message: 'Password is required' })
  password: string;
}

