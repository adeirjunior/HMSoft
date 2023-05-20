import { CreateHotelInput } from './create-hotel.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHotelInput extends PartialType(CreateHotelInput) {
  id: number;
}
