import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiAuthService } from './api-auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class ApiAuthController {
  constructor(private apiAuthService: ApiAuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    return await this.apiAuthService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Request() req: any) {
    return req.user;
  }
}
