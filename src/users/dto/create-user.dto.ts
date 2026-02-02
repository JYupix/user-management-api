import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name must be a string' })
  @MaxLength(80)
  name: string;

  @IsEmail({}, { message: 'Invalid email format' })
  @MaxLength(150)
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password must have at least 8 characters' })
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/, {
    message: 'Password must include uppercase, lowercase and a number',
  })
  password: string;
}
