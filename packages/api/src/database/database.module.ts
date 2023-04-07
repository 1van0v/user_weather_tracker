import { Module } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';
import { databaseDiToken } from './database-di-token';

@Module({
  providers: [
    {
      provide: databaseDiToken,
      useFactory: async (): Promise<Db> => {
        const connectionString = process.env.DB_CONNECTION_STRING;

        if (!connectionString) {
          throw new Error('Database connection string is not defined');
        }

        try {
          const client = await MongoClient.connect(connectionString);

          return client.db('user_weather_tracker_db');
        } catch (e) {
          throw e;
        }
      },
    },
  ],
  exports: [databaseDiToken],
})
export class DatabaseModule {}
