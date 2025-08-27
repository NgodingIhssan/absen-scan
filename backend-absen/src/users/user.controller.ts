import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.usersService.findById(id);
  }
}
