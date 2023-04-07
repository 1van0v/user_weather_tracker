import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserWithWeather } from '@user_weather_tracker/types';
import { UsersService } from '../../services/users.service';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-saved-users',
  templateUrl: './saved-users.component.html',
  styleUrls: ['./saved-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SavedUsersComponent {
  users$: Observable<UserWithWeather[]>;

  constructor(private usersService: UsersService) {
    this.users$ = this.usersService.getSavedUsers().pipe(shareReplay(1));
  }
}
