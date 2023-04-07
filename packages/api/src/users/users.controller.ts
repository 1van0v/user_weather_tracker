import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { UsersService } from './users.service';
import { QueryUserDto } from './dto/query-user.dto';
import { User } from '@user_weather_tracker/types';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('random')
  getRandomUsers(@Query() query: QueryUserDto) {
    return this.usersService.getRandomUsers(query.count);
  }

  @Get('saved')
  getSavedUsers() {
    return this.usersService.getSavedUsers();
  }

  @Post('saved')
  saveUser(@Body() userToSave: User) {
    return this.usersService.save(userToSave);
  }
}
