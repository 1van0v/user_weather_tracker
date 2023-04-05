import { Controller, Get, Query } from '@nestjs/common';

import { UsersService } from './users.service';
import { QueryUserDto } from './dto/query-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('random')
  getRandomUsers(@Query() query: QueryUserDto) {
    return this.usersService.getRandomUsers(query.count);
  }
}
