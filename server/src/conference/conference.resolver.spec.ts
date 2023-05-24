import { Test, TestingModule } from '@nestjs/testing';
import { ConferenceResolver } from './conference.resolver';
import { ConferenceService } from './conference.service';

describe('ConferenceResolver', () => {
  let resolver: ConferenceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConferenceResolver, ConferenceService],
    }).compile();

    resolver = module.get<ConferenceResolver>(ConferenceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
