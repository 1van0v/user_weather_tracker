import { Inject, Injectable } from '@nestjs/common';
import { User } from '@user_weather_tracker/types';
import { Collection, Db } from 'mongodb';
import { databaseDiToken } from 'src/database/database-di-token';

@Injectable()
export class UsersRepositoryService {
  constructor(
    @Inject(databaseDiToken)
    private db: Db,
  ) {}

  getAll() {
    return this.collection.find().toArray();
  }

  save(user: User) {
    return this.collection.insertOne(user);
  }

  private get collection(): Collection<User> {
    return this.db.collection<User>('saved_users');
  }
}
