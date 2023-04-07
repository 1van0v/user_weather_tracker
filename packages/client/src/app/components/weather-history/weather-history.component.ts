import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherHistory } from '@user_weather_tracker/types';

interface ChartData {
  name: string;
  series: Array<{ name: string; value: number }>;
}

@Component({
  selector: 'app-weather-history',
  templateUrl: './weather-history.component.html',
  styleUrls: ['./weather-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherHistoryComponent {
  @Input()
  set history(history: WeatherHistory) {
    this.chartData = [this.historyToChart(history)];
  }

  chartData: ChartData[] = [];

  formatHours = (name: string): string => {
    const date = new Date(name);
    return date.getHours().toString().padStart(2, '0');
  };

  private historyToChart(history: WeatherHistory): ChartData {
    const series = history.time.map((x, index) => ({
      name: x,
      value: history.temperature_2m[index] || 0,
    }));

    return { name: 'Hourly Weather', series };
  }
}
