import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserWithWeather } from '@user_weather_tracker/types';
import { Observable, shareReplay } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-random-users',
  templateUrl: './random-users.component.html',
  styleUrls: ['./random-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomUsersComponent {
  users$: Observable<UserWithWeather[]>;

  constructor(private usersService: UsersService) {
    this.users$ = this.usersService.getRandomUsers().pipe(shareReplay(1));
  }
}
