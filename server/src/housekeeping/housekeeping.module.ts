import { Module } from '@nestjs/common';
import { HousekeepingService } from './housekeeping.service';
import { HousekeepingController } from './housekeeping.controller';

@Module({
  controllers: [HousekeepingController],
  providers: [HousekeepingService]
})
export class HousekeepingModule {}
