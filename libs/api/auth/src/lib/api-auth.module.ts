import { Module } from '@nestjs/common';
import { ApiAuthService } from './api-auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { ApiAuthController } from './api-auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { ApiDatabaseModule } from '@frontend-contest/api/database';

@Module({
  controllers: [ApiAuthController],
  providers: [ApiAuthService, LocalStrategy, JwtStrategy],
  exports: [ApiAuthService],
  imports: [
    ApiDatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
})
export class ApiAuthModule {}
