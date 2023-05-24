import { Injectable } from '@nestjs/common';
import { CreateHousekeepingInput } from './dto/create-housekeeping.input';
import { UpdateHousekeepingInput } from './dto/update-housekeeping.input';

@Injectable()
export class HousekeepingService {
  create(createHousekeepingInput: CreateHousekeepingInput) {
    return 'This action adds a new housekeeping';
  }

  findAll() {
    return `This action returns all housekeeping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} housekeeping`;
  }

  update(id: number, updateHousekeepingInput: UpdateHousekeepingInput) {
    return `This action updates a #${id} housekeeping`;
  }

  remove(id: number) {
    return `This action removes a #${id} housekeeping`;
  }
}
