import { PartialType } from '@nestjs/mapped-types';
import { CreateHousekeepingDto } from './create-housekeeping.dto';

export class UpdateHousekeepingDto extends PartialType(CreateHousekeepingDto) {}
