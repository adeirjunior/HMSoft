import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ConferenceService } from './conference.service';
import { CreateConferenceInput } from './dto/create-conference.input';
import { UpdateConferenceInput } from './dto/update-conference.input';

@Resolver('Conference')
export class ConferenceResolver {
  constructor(private readonly conferenceService: ConferenceService) {}

  @Mutation('createConference')
  create(@Args('createConferenceInput') createConferenceInput: CreateConferenceInput) {
    return this.conferenceService.create(createConferenceInput);
  }

  @Query('conference')
  findAll() {
    return this.conferenceService.findAll();
  }

  @Query('conference')
  findOne(@Args('id') id: number) {
    return this.conferenceService.findOne(id);
  }

  @Mutation('updateConference')
  update(@Args('updateConferenceInput') updateConferenceInput: UpdateConferenceInput) {
    return this.conferenceService.update(updateConferenceInput.id, updateConferenceInput);
  }

  @Mutation('removeConference')
  remove(@Args('id') id: number) {
    return this.conferenceService.remove(id);
  }
}
