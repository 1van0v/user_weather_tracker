import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User, UserWithWeather, Weather } from '@user_weather_tracker/types';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input()
  set item({ user, weather }: UserWithWeather) {
    this.user = user;
    this.weather = weather;
  }

  user?: User;
  weather?: Weather;
}
