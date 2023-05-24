import { CreateRoomInput } from './create-room.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateRoomInput extends PartialType(CreateRoomInput) {
  id: number;
}
