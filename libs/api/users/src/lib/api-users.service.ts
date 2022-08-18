import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@frontend-contest/shared-api-interfaces';
import { ApiDatabaseService } from '@frontend-contest/api/database';

@Injectable()
export class ApiUsersService {
  constructor(private dbService: ApiDatabaseService) {}

  async findOne(email: string): Promise<User | undefined> {
    return this.dbService.db?.get('users').find({ email }).value();
  }

  async findAll(): Promise<User[] | undefined> {
    const users = this.dbService.db?.get('users').value();
    return users
      ? users.map((user) => {
          delete user.password;
          return user;
        })
      : [];
  }

  async create(user: {
    name: string;
    email: string;
    password: string;
  }): Promise<User | undefined> {
    const users = this.dbService.db?.get('users').value();
    const lastId = users
      ? users.map(({ id }) => id).sort((a, b) => a - b)[users.length - 1]
      : 0;
    const newUser = {
      ...user,
      id: lastId + 1,
    };
    this.dbService.db
      ?.get('users')
      .push(
        this.dbService.db?._.pick(newUser, ['id', 'name', 'email', 'password'])
      )
      .write();
    return this.dbService.db?.get('users').find({ id: newUser.id }).value();
  }

  async update(user: {
    id: number;
    name?: string;
    email?: string;
    password?: string;
  }): Promise<User | undefined> {
    const currentUser = this.dbService.db
      ?.get('users')
      .find({ id: user.id })
      .value();
    if (!currentUser) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    this.dbService.db
      ?.get('users')
      .find({ id: user.id })
      .assign(this.dbService.db?._.pick(user, ['name', 'email', 'password']))
      .write();

    const updatedUser = this.dbService.db
      ?.get('users')
      .find({ id: user.id })
      .value();

    if (!updatedUser) {
      throw new HttpException(
        'User update failed',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
    const { id, name, email } = updatedUser;
    return { id, name, email };
  }

  async delete(id: number) {
    return this.dbService.db?.get('users').remove({ id }).write();
  }
}
