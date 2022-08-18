import { Module } from '@nestjs/common';

import { ApiAuthModule } from '@frontend-contest/api/auth';
import { ApiDatabaseModule } from '@frontend-contest/api/database';
import { ApiUsersModule } from '@frontend-contest/api/users';

@Module({
  imports: [ApiAuthModule, ApiDatabaseModule, ApiUsersModule],
})
export class AppModule {}
