import { Injectable } from '@nestjs/common';
import { User } from '@frontend-contest/shared-api-interfaces';
import { JwtService } from '@nestjs/jwt';
import { ApiDatabaseService } from '@frontend-contest/api/database';

@Injectable()
export class ApiAuthService {
  constructor(
    private dbService: ApiDatabaseService,
    private jwtService: JwtService
  ) {}

  async findUser(email: string): Promise<User | undefined> {
    return this.dbService.db?.get('users').find({ email }).value();
  }

  async login(user: Partial<User>) {
    const payload = {
      username: user.name,
      sub: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(
    email: string,
    password: string
  ): Promise<Partial<User> | null> {
    const user = await this.findUser(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
