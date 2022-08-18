import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '@frontend-contest/api/auth';
import { ApiUsersService } from '@frontend-contest/api/users';

@Controller('users')
export class ApiUsersController {
  constructor(private service: ApiUsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async profile(@Request() req: any) {
    return this.service.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createUser(
    @Body() user: { name: string; email: string; password: string }
  ) {
    if (!user.name) {
      throw new HttpException(
        'user.name is required!',
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }
    if (!user.email) {
      throw new HttpException(
        'user.email is required!',
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }
    if (!user.password) {
      throw new HttpException(
        'user.password is required!',
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }
    return this.service.create(user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() user: { name?: string; email?: string; password?: string }
  ) {
    return this.service.update({ ...user, id: +id });
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(204)
  @Delete(':id')
  async deleteUser(@Request() req: any, @Param('id') id: string) {
    if (req.user.userId === +id) {
      throw new HttpException(
        "You can't remove your own user!",
        HttpStatus.FORBIDDEN
      );
    }
    await this.service.delete(+id);
  }
}
