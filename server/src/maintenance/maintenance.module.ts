import { Module } from '@nestjs/common';
import { MaintenanceService } from './maintenance.service';
import { MaintenanceResolver } from './maintenance.resolver';

@Module({
  providers: [MaintenanceResolver, MaintenanceService]
})
export class MaintenanceModule {}
