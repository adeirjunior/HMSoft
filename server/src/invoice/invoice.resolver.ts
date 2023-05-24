import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceInput } from './dto/create-invoice.input';
import { UpdateInvoiceInput } from './dto/update-invoice.input';

@Resolver('Invoice')
export class InvoiceResolver {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Mutation('createInvoice')
  create(@Args('createInvoiceInput') createInvoiceInput: CreateInvoiceInput) {
    return this.invoiceService.create(createInvoiceInput);
  }

  @Query('invoice')
  findAll() {
    return this.invoiceService.findAll();
  }

  @Query('invoice')
  findOne(@Args('id') id: number) {
    return this.invoiceService.findOne(id);
  }

  @Mutation('updateInvoice')
  update(@Args('updateInvoiceInput') updateInvoiceInput: UpdateInvoiceInput) {
    return this.invoiceService.update(updateInvoiceInput.id, updateInvoiceInput);
  }

  @Mutation('removeInvoice')
  remove(@Args('id') id: number) {
    return this.invoiceService.remove(id);
  }
}
