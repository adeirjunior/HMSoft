import { Test, TestingModule } from '@nestjs/testing';
import { HousekeepingResolver } from './housekeeping.resolver';
import { HousekeepingService } from './housekeeping.service';

describe('HousekeepingResolver', () => {
  let resolver: HousekeepingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HousekeepingResolver, HousekeepingService],
    }).compile();

    resolver = module.get<HousekeepingResolver>(HousekeepingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
