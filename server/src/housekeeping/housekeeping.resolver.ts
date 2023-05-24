import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HousekeepingService } from './housekeeping.service';
import { CreateHousekeepingInput } from './dto/create-housekeeping.input';
import { UpdateHousekeepingInput } from './dto/update-housekeeping.input';

@Resolver('Housekeeping')
export class HousekeepingResolver {
  constructor(private readonly housekeepingService: HousekeepingService) {}

  @Mutation('createHousekeeping')
  create(@Args('createHousekeepingInput') createHousekeepingInput: CreateHousekeepingInput) {
    return this.housekeepingService.create(createHousekeepingInput);
  }

  @Query('housekeeping')
  findAll() {
    return this.housekeepingService.findAll();
  }

  @Query('housekeeping')
  findOne(@Args('id') id: number) {
    return this.housekeepingService.findOne(id);
  }

  @Mutation('updateHousekeeping')
  update(@Args('updateHousekeepingInput') updateHousekeepingInput: UpdateHousekeepingInput) {
    return this.housekeepingService.update(updateHousekeepingInput.id, updateHousekeepingInput);
  }

  @Mutation('removeHousekeeping')
  remove(@Args('id') id: number) {
    return this.housekeepingService.remove(id);
  }
}
