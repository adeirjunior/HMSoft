import { Field } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsUrl,
  MinLength,
  IsNumber,
  Min,
  Max,
} from 'class-validator';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Category } from 'src/category/entities/category.entity';
import { Room } from 'src/room/entities/room.entity';

export type HotelDocument = HydratedDocument<Hotel>;
@Schema()
export class Hotel {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  @Field(() => String, { description: 'The name of your hotel' })
  name: string;

  @IsEmail()
  @Prop({ required: true })
  @Field(() => String, { description: 'Your hotel email' })
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @Prop()
  @Field(() => String, { description: 'Your hotel password' })
  password: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  @Prop()
  @Field(() => Number, { description: 'Your hotel rating' })
  stars: number;

  @IsPhoneNumber()
  @Prop()
  @Field(() => String, { description: 'Your hotel phone' })
  phone: string;

  @IsUrl()
  @Prop()
  @Field(() => String, { description: 'This hotel webpage' })
  website: string;

  @Field(() => Room)
  rooms: Room[];

  @Field(() => Category)
  categories: Category[];

  @Prop({ required: true })
  @Field(() => Date, { description: 'When this hotel was created' })
  hotelCreatedAt: Date;

  @Prop({ required: true, default: () => new Date() })
  @Field(() => Date, { description: 'When your account was created' })
  createdAt: Date;

  @Prop()
  @Field(() => Date, { description: 'When your account was updated' })
  updatedAt: Date;
}
