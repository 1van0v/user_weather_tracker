import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, Weather } from '@user_weather_tracker/types';
import { WeatherProvider } from '@user_weather_tracker/weather_provider';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherProvider: WeatherProvider;

  constructor(private http: HttpClient) {
    this.weatherProvider = new WeatherProvider(this.http);
  }

  fetchWeather(user: User): Observable<Weather> {
    return this.weatherProvider.fetchWeatherFor(user.location.coordinates);
  }
}
