import { Injectable } from '@nestjs/common';
import { CreateConferenceInput } from './dto/create-conference.input';
import { UpdateConferenceInput } from './dto/update-conference.input';

@Injectable()
export class ConferenceService {
  create(createConferenceInput: CreateConferenceInput) {
    return 'This action adds a new conference';
  }

  findAll() {
    return `This action returns all conference`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conference`;
  }

  update(id: number, updateConferenceInput: UpdateConferenceInput) {
    return `This action updates a #${id} conference`;
  }

  remove(id: number) {
    return `This action removes a #${id} conference`;
  }
}
