import {
  MinLength,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsUrl,
} from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Blog Title' })
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Field()
  @IsPhoneNumber()
  phone?: string;

  @Field()
  @IsUrl()
  website?: string;

  @Field()
  photo?: string;

  @Field()
  cnpj?: string;

  @Field()
  businessCreated?: Date;
}
