import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UsersRepositoryService } from './users-repository.service';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepositoryService],
})
export class UsersModule {}
