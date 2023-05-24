import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StaffService } from './staff.service';
import { CreateStaffInput } from './dto/create-staff.input';
import { UpdateStaffInput } from './dto/update-staff.input';

@Resolver('Staff')
export class StaffResolver {
  constructor(private readonly staffService: StaffService) {}

  @Mutation('createStaff')
  create(@Args('createStaffInput') createStaffInput: CreateStaffInput) {
    return this.staffService.create(createStaffInput);
  }

  @Query('staff')
  findAll() {
    return this.staffService.findAll();
  }

  @Query('staff')
  findOne(@Args('id') id: number) {
    return this.staffService.findOne(id);
  }

  @Mutation('updateStaff')
  update(@Args('updateStaffInput') updateStaffInput: UpdateStaffInput) {
    return this.staffService.update(updateStaffInput.id, updateStaffInput);
  }

  @Mutation('removeStaff')
  remove(@Args('id') id: number) {
    return this.staffService.remove(id);
  }
}
