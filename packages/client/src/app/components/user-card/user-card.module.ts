import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { UserCardComponent } from './user-card.component';
import { WeatherModule } from '../weather/weather.module';
import { MapModule } from '../map/map.module';

@NgModule({
  declarations: [UserCardComponent],
  exports: [UserCardComponent],
  imports: [CommonModule, MatCardModule, WeatherModule, MapModule],
})
export class UserCardModule {}
