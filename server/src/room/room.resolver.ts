import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RoomService } from './room.service';
import { CreateRoomInput } from './dto/create-room.input';
import { UpdateRoomInput } from './dto/update-room.input';

@Resolver('Room')
export class RoomResolver {
  constructor(private readonly roomService: RoomService) {}

  @Mutation('createRoom')
  create(@Args('createRoomInput') createRoomInput: CreateRoomInput) {
    return this.roomService.create(createRoomInput);
  }

  @Query('room')
  findAll() {
    return this.roomService.findAll();
  }

  @Query('room')
  findOne(@Args('id') id: number) {
    return this.roomService.findOne(id);
  }

  @Mutation('updateRoom')
  update(@Args('updateRoomInput') updateRoomInput: UpdateRoomInput) {
    return this.roomService.update(updateRoomInput.id, updateRoomInput);
  }

  @Mutation('removeRoom')
  remove(@Args('id') id: number) {
    return this.roomService.remove(id);
  }
}
