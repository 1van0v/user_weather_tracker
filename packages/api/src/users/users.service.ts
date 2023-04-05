import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, forkJoin, map, switchMap } from 'rxjs';

import { User, UserWithWeather } from '@user_weather_tracker/types';
import { WeatherProvider } from '@user_weather_tracker/weather_provider';

@Injectable()
export class UsersService {
  private randomUsersUrl = 'https://randomuser.me/api/';
  private weatherService: WeatherProvider;

  constructor(private httpService: HttpService) {
    this.weatherService = new WeatherProvider(this.httpService);
  }

  getRandomUsers(count = 1): Observable<UserWithWeather[]> {
    return this.httpService
      .get<{ results: User[] }>(this.randomUsersUrl, {
        params: { results: count },
      })
      .pipe(
        map((res) => res.data?.results),
        switchMap((users) => this.addWeather(users)),
      );
  }

  private addWeather(users: User[]): Observable<UserWithWeather[]> {
    const weatherRequests: Array<Observable<UserWithWeather>> = users.map((i) =>
      this.fetchWeather(i),
    );
    return forkJoin(weatherRequests);
  }

  private fetchWeather(user: User): Observable<UserWithWeather> {
    return this.weatherService
      .fetchWeatherFor(user.location.coordinates)
      .pipe(map((weather) => ({ user, weather })));
  }
}
