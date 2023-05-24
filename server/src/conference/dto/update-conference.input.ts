import { CreateConferenceInput } from './create-conference.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateConferenceInput extends PartialType(CreateConferenceInput) {
  id: number;
}
