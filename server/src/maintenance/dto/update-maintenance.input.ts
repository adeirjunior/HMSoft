import { CreateMaintenanceInput } from './create-maintenance.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMaintenanceInput extends PartialType(CreateMaintenanceInput) {
  id: number;
}
