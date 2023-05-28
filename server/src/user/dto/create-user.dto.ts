import {
  MinLength,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsUrl,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty()
  @IsPhoneNumber()
  phone?: string;

  @ApiProperty()
  @IsUrl()
  website?: string;

  @ApiProperty()
  photo?: string;

  @ApiProperty()
  cnpj?: string;

  @ApiProperty()
  businessCreated?: Date;
}
