import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import {
  MinLength,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsUrl,
} from 'class-validator';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @IsEmail()
  @Prop({ required: true })
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @Prop({ required: true })
  password: string;

  @IsPhoneNumber()
  @Prop()
  phone: string;

  @IsUrl()
  @Prop()
  website: string;

  @Prop()
  photo: string;

  @Prop()
  cnpj: string;

  @Prop({ required: true })
  businessCreatedAt: Date;

  @Prop({ required: true, default: () => new Date() })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
