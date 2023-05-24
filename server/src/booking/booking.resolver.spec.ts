import { Test, TestingModule } from '@nestjs/testing';
import { BookingResolver } from './booking.resolver';
import { BookingService } from './booking.service';

describe('BookingResolver', () => {
  let resolver: BookingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingResolver, BookingService],
    }).compile();

    resolver = module.get<BookingResolver>(BookingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
