import { IsOptional, IsString, MaxLength, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    description: 'Full name',
    example: 'John Doe',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  full_name?: string;

  @ApiProperty({
    description: 'Bio or description',
    example: 'Data analyst passionate about visualization',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  bio?: string;

  @ApiProperty({
    description: 'Job title',
    example: 'Senior Data Analyst',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  title?: string;

  @ApiProperty({
    description: 'Organization',
    example: 'Tech Corp',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  organization?: string;

  @ApiProperty({
    description: 'Location',
    example: 'San Francisco, CA',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  location?: string;

  @ApiProperty({
    description: 'Social media links',
    example: {
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      website: 'https://johndoe.com',
    },
    required: false,
  })
  @IsOptional()
  @IsObject()
  social_links?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
    github?: string;
  };

  @ApiProperty({
    description: 'Profile image URL',
    example: 'https://example.com/profile.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  profile_image_url?: string;
}
