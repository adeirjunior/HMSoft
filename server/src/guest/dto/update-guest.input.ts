import { CreateGuestInput } from './create-guest.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateGuestInput extends PartialType(CreateGuestInput) {
  id: number;
}
