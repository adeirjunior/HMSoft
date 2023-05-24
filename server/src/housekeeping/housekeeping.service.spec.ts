import { Test, TestingModule } from '@nestjs/testing';
import { HousekeepingService } from './housekeeping.service';

describe('HousekeepingService', () => {
  let service: HousekeepingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HousekeepingService],
    }).compile();

    service = module.get<HousekeepingService>(HousekeepingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
