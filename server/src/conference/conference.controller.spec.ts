import { Test, TestingModule } from '@nestjs/testing';
import { ConferenceController } from './conference.controller';
import { ConferenceService } from './conference.service';

describe('ConferenceController', () => {
  let controller: ConferenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConferenceController],
      providers: [ConferenceService],
    }).compile();

    controller = module.get<ConferenceController>(ConferenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
