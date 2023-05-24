import { Module } from '@nestjs/common';
import { HousekeepingService } from './housekeeping.service';
import { HousekeepingResolver } from './housekeeping.resolver';

@Module({
  providers: [HousekeepingResolver, HousekeepingService]
})
export class HousekeepingModule {}
