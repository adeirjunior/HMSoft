import { Test, TestingModule } from '@nestjs/testing';
import { HotelResolver } from './hotel.resolver';
import { HotelService } from './hotel.service';

describe('HotelResolver', () => {
  let resolver: HotelResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelResolver, HotelService],
    }).compile();

    resolver = module.get<HotelResolver>(HotelResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
