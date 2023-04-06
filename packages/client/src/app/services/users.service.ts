import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserWithWeather } from '@user_weather_tracker/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = '/users/';
  constructor(private readonly http: HttpClient) {}

  getSavedUsers(): Observable<UserWithWeather[]> {
    return this.getUsers('saved');
  }

  getRandomUsers(): Observable<UserWithWeather[]> {
    return this.getUsers('random', 12);
  }

  private getUsers(
    type: 'random' | 'saved',
    count?: number,
  ): Observable<UserWithWeather[]> {
    const config = count ? { params: { count } } : {};

    return this.http.get<UserWithWeather[]>(this.baseUrl + type, config);
  }
}
