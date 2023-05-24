import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MaintenanceService } from './maintenance.service';
import { CreateMaintenanceInput } from './dto/create-maintenance.input';
import { UpdateMaintenanceInput } from './dto/update-maintenance.input';

@Resolver('Maintenance')
export class MaintenanceResolver {
  constructor(private readonly maintenanceService: MaintenanceService) {}

  @Mutation('createMaintenance')
  create(@Args('createMaintenanceInput') createMaintenanceInput: CreateMaintenanceInput) {
    return this.maintenanceService.create(createMaintenanceInput);
  }

  @Query('maintenance')
  findAll() {
    return this.maintenanceService.findAll();
  }

  @Query('maintenance')
  findOne(@Args('id') id: number) {
    return this.maintenanceService.findOne(id);
  }

  @Mutation('updateMaintenance')
  update(@Args('updateMaintenanceInput') updateMaintenanceInput: UpdateMaintenanceInput) {
    return this.maintenanceService.update(updateMaintenanceInput.id, updateMaintenanceInput);
  }

  @Mutation('removeMaintenance')
  remove(@Args('id') id: number) {
    return this.maintenanceService.remove(id);
  }
}
