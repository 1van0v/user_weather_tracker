import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, forkJoin, from, map, of, switchMap, tap } from 'rxjs';

import { User, UserWithWeather } from '@user_weather_tracker/types';
import { WeatherProvider } from '@user_weather_tracker/weather_provider';
import { UsersRepositoryService } from './users-repository.service';

@Injectable()
export class UsersService {
  private randomUsersUrl = 'https://randomuser.me/api/';
  private weatherService: WeatherProvider;

  constructor(
    private httpService: HttpService,
    private usersRepository: UsersRepositoryService,
  ) {
    this.weatherService = new WeatherProvider(this.httpService as any);
  }

  save(user: User) {
    return this.usersRepository.save(user);
  }

  getSavedUsers(): Observable<UserWithWeather[]> {
    const savedUsers$ = from(this.usersRepository.getAll());

    return savedUsers$.pipe(this.weatherAdder());
  }

  getRandomUsers(count = 1): Observable<UserWithWeather[]> {
    return this.httpService
      .get<{ results: User[] }>(this.randomUsersUrl, {
        params: { results: count },
      })
      .pipe(
        map((res) => res.data?.results),
        this.weatherAdder(),
      );
  }

  private weatherAdder() {
    return switchMap((users: User[]) => this.addWeather(users));
  }

  private addWeather(users: User[]): Observable<UserWithWeather[]> {
    if (!users.length) {
      return of([]);
    }

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
