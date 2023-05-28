import { Injectable } from '@nestjs/common';
import { CreateHousekeepingDto } from './dto/create-housekeeping.dto';
import { UpdateHousekeepingDto } from './dto/update-housekeeping.dto';

@Injectable()
export class HousekeepingService {
  create(createHousekeepingDto: CreateHousekeepingDto) {
    return 'This action adds a new housekeeping';
  }

  findAll() {
    return `This action returns all housekeeping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} housekeeping`;
  }

  update(id: number, updateHousekeepingDto: UpdateHousekeepingDto) {
    return `This action updates a #${id} housekeeping`;
  }

  remove(id: number) {
    return `This action removes a #${id} housekeeping`;
  }
}
