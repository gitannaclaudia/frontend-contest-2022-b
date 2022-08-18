import { Test } from '@nestjs/testing';
import { ApiDatabaseService } from './api-database.service';

describe('ApiDatabaseService', () => {
  let service: ApiDatabaseService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiDatabaseService],
    }).compile();

    service = module.get(ApiDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
