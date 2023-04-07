import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { WeatherHistoryModule } from '../weather-history/weather-history.module';

@NgModule({
  declarations: [WeatherComponent],
  imports: [CommonModule, WeatherHistoryModule],
  exports: [WeatherComponent],
})
export class WeatherModule {}
