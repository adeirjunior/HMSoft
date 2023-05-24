import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PaymentService } from './payment.service';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';

@Resolver('Payment')
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @Mutation('createPayment')
  create(@Args('createPaymentInput') createPaymentInput: CreatePaymentInput) {
    return this.paymentService.create(createPaymentInput);
  }

  @Query('payment')
  findAll() {
    return this.paymentService.findAll();
  }

  @Query('payment')
  findOne(@Args('id') id: number) {
    return this.paymentService.findOne(id);
  }

  @Mutation('updatePayment')
  update(@Args('updatePaymentInput') updatePaymentInput: UpdatePaymentInput) {
    return this.paymentService.update(updatePaymentInput.id, updatePaymentInput);
  }

  @Mutation('removePayment')
  remove(@Args('id') id: number) {
    return this.paymentService.remove(id);
  }
}
