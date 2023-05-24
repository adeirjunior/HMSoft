import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ServiceService } from './service.service';
import { CreateServiceInput } from './dto/create-service.input';
import { UpdateServiceInput } from './dto/update-service.input';

@Resolver('Service')
export class ServiceResolver {
  constructor(private readonly serviceService: ServiceService) {}

  @Mutation('createService')
  create(@Args('createServiceInput') createServiceInput: CreateServiceInput) {
    return this.serviceService.create(createServiceInput);
  }

  @Query('service')
  findAll() {
    return this.serviceService.findAll();
  }

  @Query('service')
  findOne(@Args('id') id: number) {
    return this.serviceService.findOne(id);
  }

  @Mutation('updateService')
  update(@Args('updateServiceInput') updateServiceInput: UpdateServiceInput) {
    return this.serviceService.update(updateServiceInput.id, updateServiceInput);
  }

  @Mutation('removeService')
  remove(@Args('id') id: number) {
    return this.serviceService.remove(id);
  }
}
