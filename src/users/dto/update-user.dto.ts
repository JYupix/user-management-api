import {
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
  Matches,
  IsEnum,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({
    description: 'User full name',
    example: 'Jane Doe',
    minLength: 3,
    maxLength: 80,
  })
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  @MinLength(3, { message: 'Name must have at least 3 characters' })
  @MaxLength(80, { message: 'Name cannot exceed 80 characters' })
  name?: string;

  @ApiPropertyOptional({
    description: 'User email address',
    example: 'jane.doe@example.com',
    maxLength: 150,
  })
  @IsOptional()
  @IsEmail({}, { message: 'Invalid email format' })
  @MaxLength(150, { message: 'Email cannot exceed 150 characters' })
  email?: string;

  @ApiPropertyOptional({
    description:
      'User password (must include uppercase, lowercase, and number)',
    example: 'NewPassword123',
    minLength: 8,
    maxLength: 64,
  })
  @IsOptional()
  @IsString()
  @MinLength(8, { message: 'Password must have at least 8 characters' })
  @MaxLength(64)
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/, {
    message: 'Password must include uppercase, lowercase and a number',
  })
  password?: string;

  @ApiPropertyOptional({
    description: 'User role',
    enum: ['USER', 'ADMIN'],
    example: 'USER',
  })
  @IsOptional()
  @IsEnum(['USER', 'ADMIN'], { message: 'Role must be USER or ADMIN' })
  role?: 'USER' | 'ADMIN';
}
