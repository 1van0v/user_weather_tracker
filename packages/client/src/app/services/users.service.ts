import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserWithWeather } from '@user_weather_tracker/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = '/users/';
  constructor(private readonly http: HttpClient) {}

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'saved', user);
  }

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
