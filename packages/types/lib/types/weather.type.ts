import { CurrentWeather } from './current-weather.type';
import { WeatherHistory } from './weather-history.type';
export interface Weather {
  current: CurrentWeather;
  hourly: WeatherHistory;
}
