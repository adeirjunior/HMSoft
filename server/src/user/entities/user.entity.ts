import { Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import {
  MinLength,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsUrl,
  IsDate,
} from 'class-validator';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  @Field(() => String, { description: 'The name of your business' })
  name: string;

  @IsEmail()
  @Prop({ required: true })
  @Field(() => String, { description: 'Your business main email' })
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @Prop({ required: true })
  @Field(() => String, { description: 'Your password' })
  password: string;

  @IsPhoneNumber()
  @Prop()
  @Field(() => String, { description: 'Your business main phone' })
  phone: string;

  @IsUrl()
  @Prop()
  @Field(() => String, { description: 'Your business website' })
  website: string;

  @Prop()
  @Field(() => String, { description: 'Your logo' })
  photo: string;

  @Prop()
  @Field(() => String, { description: 'Business CNPJ' })
  cnpj: string;

  @Prop({ required: true })
  @Field(() => Date, { description: 'Your your business started' })
  businessCreated: Date;

  @Prop({ required: true, default: () => new Date() })
  @Field(() => Date, { description: 'When your account was created' })
  createdAt: Date;

  @Prop()
  @Field(() => Date, { description: 'When your account was updated' })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
