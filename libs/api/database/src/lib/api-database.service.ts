import { Injectable } from '@nestjs/common';
import * as lowdb from 'lowdb';
import { LowdbAsync } from 'lowdb';
import * as path from 'path';
import * as FileAsync from 'lowdb/adapters/FileAsync';
import { User } from '@frontend-contest/shared-api-interfaces';

export type Data = {
  users: User[];
};

@Injectable()
export class ApiDatabaseService {
  db: LowdbAsync<Data> | undefined;

  async onApplicationBootstrap() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const adapter = new FileAsync<Data>(
      path.join(__dirname, 'database', 'db.json')
    );
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.db = await lowdb(adapter);
    await this.db
      ?.defaults({
        users: [],
      })
      .write();
  }
}
