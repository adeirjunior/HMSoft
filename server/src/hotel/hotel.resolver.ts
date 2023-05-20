import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HotelService } from './hotel.service';
import { CreateHotelInput } from './dto/create-hotel.input';
import { UpdateHotelInput } from './dto/update-hotel.input';

@Resolver('Hotel')
export class HotelResolver {
  constructor(private readonly hotelService: HotelService) {}

  @Mutation('createHotel')
  create(@Args('createHotelInput') createHotelInput: CreateHotelInput) {
    return this.hotelService.create(createHotelInput);
  }

  @Query('hotel')
  findAll() {
    return this.hotelService.findAll();
  }

  @Query('hotel')
  findOne(@Args('id') id: number) {
    return this.hotelService.findOne(id);
  }

  @Mutation('updateHotel')
  update(@Args('updateHotelInput') updateHotelInput: UpdateHotelInput) {
    return this.hotelService.update(updateHotelInput.id, updateHotelInput);
  }

  @Mutation('removeHotel')
  remove(@Args('id') id: number) {
    return this.hotelService.remove(id);
  }
}
