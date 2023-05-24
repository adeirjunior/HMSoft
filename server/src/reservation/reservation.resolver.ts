import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReservationService } from './reservation.service';
import { CreateReservationInput } from './dto/create-reservation.input';
import { UpdateReservationInput } from './dto/update-reservation.input';

@Resolver('Reservation')
export class ReservationResolver {
  constructor(private readonly reservationService: ReservationService) {}

  @Mutation('createReservation')
  create(@Args('createReservationInput') createReservationInput: CreateReservationInput) {
    return this.reservationService.create(createReservationInput);
  }

  @Query('reservation')
  findAll() {
    return this.reservationService.findAll();
  }

  @Query('reservation')
  findOne(@Args('id') id: number) {
    return this.reservationService.findOne(id);
  }

  @Mutation('updateReservation')
  update(@Args('updateReservationInput') updateReservationInput: UpdateReservationInput) {
    return this.reservationService.update(updateReservationInput.id, updateReservationInput);
  }

  @Mutation('removeReservation')
  remove(@Args('id') id: number) {
    return this.reservationService.remove(id);
  }
}
