import { Module } from '@nestjs/common';
import { ApiUsersService } from './api-users.service';
import { ApiDatabaseModule } from '@frontend-contest/api/database';
import { ApiUsersController } from './api-users.controller';
import { ApiAuthModule } from '@frontend-contest/api/auth';

@Module({
  imports: [ApiDatabaseModule, ApiAuthModule],
  providers: [ApiUsersService],
  exports: [ApiUsersService],
  controllers: [ApiUsersController],
})
export class ApiUsersModule {}
