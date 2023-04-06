import { Observable, map } from 'rxjs';

import { Coordinates, Weather, WeatherDto } from '@user_weather_tracker/types';
import { HttpProvider } from './http.provider';
import { weatherCodesMap } from './weathercodes.map';

type AxiosResp = { data: WeatherDto };

export class WeatherProvider {
  private baseUrl = 'https://api.open-meteo.com/v1/forecast';
  private codeMapper: Record<number, string> = weatherCodesMap;

  constructor(private httpService: HttpProvider) {}

  fetchWeatherFor(coordinates: Coordinates): Observable<Weather> {
    const params = {
      ...coordinates,
      current_weather: true,
      hourly: 'temperature_2m',
    };
    return this.httpService
      .get<WeatherDto | AxiosResp>(this.baseUrl, { params })
      .pipe(
        map((res) => (this.isNested(res) ? res.data : res)),
        map((dto) => this.dtoToWeather(dto)),
      );
  }

  private isNested(res: WeatherDto | AxiosResp): res is AxiosResp {
    return !!(res as AxiosResp).data;
  }

  private dtoToWeather(dto: WeatherDto): Weather {
    const { current_weather, ...rest } = dto;
    const code = current_weather.weathercode;

    const description = this.codeMapper[code];
    const picture = this.getImageFor(code);

    return { ...rest, current: { ...current_weather, description, picture } };
  }

  private getImageFor(code: number): string {
    return `https://worldweather.wmo.int/images/${code}.png`;
  }
}
