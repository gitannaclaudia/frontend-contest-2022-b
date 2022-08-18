import { Module } from '@nestjs/common';
import { ApiDatabaseService } from './api-database.service';

@Module({
  providers: [ApiDatabaseService],
  exports: [ApiDatabaseService],
})
export class ApiDatabaseModule {}
