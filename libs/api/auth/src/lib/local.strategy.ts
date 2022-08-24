import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ApiAuthService } from './api-auth.service';
import { User } from '@frontend-contest/shared-api-interfaces';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: ApiAuthService) {
    super({ usernameField: 'email' });
  }

  async validate(
    email: string,
    password: string
  ): Promise<Partial<User> | null> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
