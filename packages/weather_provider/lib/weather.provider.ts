import { Observable, map } from 'rxjs';

import { Coordinates, Weather } from '@user_weather_tracker/types';
import { HttpProvider } from './http.provider';

type AxiosResp = { data: Weather };

export class WeatherProvider {
  private baseUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private httpService: HttpProvider) {}

  fetchWeatherFor(coordinates: Coordinates): Observable<Weather> {
    const params = {
      ...coordinates,
      current_weather: true,
      hourly: 'temperature_2m',
    };
    return this.httpService
      .get<Weather | AxiosResp>(this.baseUrl, { params })
      .pipe(map((res) => (this.isNested(res) ? res.data : res)));
  }

  private isNested(res: Weather | AxiosResp): res is AxiosResp {
    return !!(res as AxiosResp).data;
  }
}
