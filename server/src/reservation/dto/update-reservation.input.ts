import { CreateReservationInput } from './create-reservation.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateReservationInput extends PartialType(CreateReservationInput) {
  id: number;
}
