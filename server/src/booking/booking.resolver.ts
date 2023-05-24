import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BookingService } from './booking.service';
import { CreateBookingInput } from './dto/create-booking.input';
import { UpdateBookingInput } from './dto/update-booking.input';

@Resolver('Booking')
export class BookingResolver {
  constructor(private readonly bookingService: BookingService) {}

  @Mutation('createBooking')
  create(@Args('createBookingInput') createBookingInput: CreateBookingInput) {
    return this.bookingService.create(createBookingInput);
  }

  @Query('booking')
  findAll() {
    return this.bookingService.findAll();
  }

  @Query('booking')
  findOne(@Args('id') id: number) {
    return this.bookingService.findOne(id);
  }

  @Mutation('updateBooking')
  update(@Args('updateBookingInput') updateBookingInput: UpdateBookingInput) {
    return this.bookingService.update(updateBookingInput.id, updateBookingInput);
  }

  @Mutation('removeBooking')
  remove(@Args('id') id: number) {
    return this.bookingService.remove(id);
  }
}
