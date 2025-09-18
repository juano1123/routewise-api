import { Test, TestingModule } from '@nestjs/testing';
import { TripService } from './trip.service';

describe('UserService', () => {
  let tripService: TripService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripService],
    }).compile();

    tripService = module.get<TripService>(TripService);
  });

  it('should be defined', () => {
    expect(tripService).toBeDefined();
  });
});
