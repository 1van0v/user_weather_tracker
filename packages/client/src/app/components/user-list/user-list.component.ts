import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserWithWeather } from '@user_weather_tracker/types';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Input()
  users: UserWithWeather[] | null = null;
}
