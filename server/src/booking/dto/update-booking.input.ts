import { CreateBookingInput } from './create-booking.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateBookingInput extends PartialType(CreateBookingInput) {
  id: number;
}
