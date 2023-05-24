import { CreateHousekeepingInput } from './create-housekeeping.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHousekeepingInput extends PartialType(CreateHousekeepingInput) {
  id: number;
}
