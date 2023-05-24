import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GuestService } from './guest.service';
import { CreateGuestInput } from './dto/create-guest.input';
import { UpdateGuestInput } from './dto/update-guest.input';

@Resolver('Guest')
export class GuestResolver {
  constructor(private readonly guestService: GuestService) {}

  @Mutation('createGuest')
  create(@Args('createGuestInput') createGuestInput: CreateGuestInput) {
    return this.guestService.create(createGuestInput);
  }

  @Query('guest')
  findAll() {
    return this.guestService.findAll();
  }

  @Query('guest')
  findOne(@Args('id') id: number) {
    return this.guestService.findOne(id);
  }

  @Mutation('updateGuest')
  update(@Args('updateGuestInput') updateGuestInput: UpdateGuestInput) {
    return this.guestService.update(updateGuestInput.id, updateGuestInput);
  }

  @Mutation('removeGuest')
  remove(@Args('id') id: number) {
    return this.guestService.remove(id);
  }
}
