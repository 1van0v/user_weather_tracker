import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Weather, WeatherHistory } from '@user_weather_tracker/types';
import { CurrentWeather } from '@user_weather_tracker/types';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
  @Input()
  set weather(weather: Weather) {
    this.currentWeather = weather.current;
    this.weatherHistory = weather.hourly;

    this.max = Math.max(...weather.hourly.temperature_2m);
    this.min = Math.min(...weather.hourly.temperature_2m);
  }

  currentWeather?: CurrentWeather;
  weatherHistory?: WeatherHistory;
  min = 0;
  max = 0;
}
