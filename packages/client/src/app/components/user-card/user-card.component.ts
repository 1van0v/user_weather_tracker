import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { User, UserWithWeather, Weather } from '@user_weather_tracker/types';
import { UsersService } from 'src/app/services/users.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent implements OnDestroy {
  @Input()
  set item({ user, weather }: UserWithWeather) {
    this.user = user;
    this.weather = weather;

    this.startTimer(user);
  }

  user?: User;
  weather?: Weather;
  inProgress = false;
  weatherLoading = false;

  private refreshTimer?: ReturnType<typeof setTimeout>;
  private weatherRefreshInterval = 5 * 60 * 1000;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private weatherService: WeatherService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnDestroy(): void {
    clearTimeout(this.refreshTimer);
  }

  saveUser(user: User): void {
    this.inProgress = true;
    this.usersService.saveUser(user).subscribe({
      next: () => this.router.navigate(['saved-users']),
      complete: () => (this.inProgress = false),
    });
  }

  private startTimer(user: User): void {
    if (this.refreshTimer) {
      return;
    }

    this.refreshTimer = setTimeout(
      () => this.updateWeather(user),
      this.weatherRefreshInterval,
    );
  }

  private updateWeather(user: User): void {
    this.weatherLoading = true;
    this.cdr.markForCheck();

    this.weatherService.fetchWeather(user).subscribe({
      next: (weather) => {
        this.weather = weather;
      },

      complete: () => {
        setTimeout(() => {
          this.weatherLoading = false;
          this.cdr.markForCheck();
        }, 500);
        this.refreshTimer = undefined;
        this.startTimer(user);
      },
    });
  }
}
