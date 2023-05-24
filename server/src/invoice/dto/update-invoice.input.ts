import { CreateInvoiceInput } from './create-invoice.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateInvoiceInput extends PartialType(CreateInvoiceInput) {
  id: number;
}
