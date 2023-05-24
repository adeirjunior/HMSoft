import { CreateFeedbackInput } from './create-feedback.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateFeedbackInput extends PartialType(CreateFeedbackInput) {
  id: number;
}
