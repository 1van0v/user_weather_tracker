import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartModule } from '@swimlane/ngx-charts';

import { WeatherHistoryComponent } from './weather-history.component';

@NgModule({
  declarations: [WeatherHistoryComponent],
  imports: [CommonModule, LineChartModule],
  exports: [WeatherHistoryComponent],
})
export class WeatherHistoryModule {}
