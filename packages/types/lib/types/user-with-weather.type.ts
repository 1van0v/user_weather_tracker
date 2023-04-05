import { User } from './user.type';
import { Weather } from './weather.type';

export interface UserWithWeather {
  user: User;
  weather: Weather;
}
