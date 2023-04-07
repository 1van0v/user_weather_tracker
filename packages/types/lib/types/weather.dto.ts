import { CurrentWeatherDto } from './current-weather.dto';
import { WeatherHistory } from './weather-history.type';

export interface WeatherDto {
  current_weather: CurrentWeatherDto;
  hourly: WeatherHistory;
}
