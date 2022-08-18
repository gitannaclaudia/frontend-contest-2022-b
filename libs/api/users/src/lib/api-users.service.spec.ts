import { Test } from '@nestjs/testing';
import { ApiUsersService } from './api-users.service';

describe('ApiUsersService', () => {
  let service: ApiUsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiUsersService],
    }).compile();

    service = module.get(ApiUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
