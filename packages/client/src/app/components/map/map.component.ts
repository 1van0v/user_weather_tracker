import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Coordinates } from '@user_weather_tracker/types';
import { LatLng, MapOptions, latLng, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
  @Input()
  set position(coordinates: Coordinates) {
    const latitude = +coordinates.latitude;
    const longitude = +coordinates.longitude;
    const center = latLng([latitude, longitude]);

    this.options = {
      zoom: 3,
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '...',
        }),
        marker(latLng([latitude, longitude])),
      ],
      center,
    };
    // this.options = {
    //   layers: [
    //     tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //       attribution: '&copy; OpenStreetMap contributors'
    //     })
    //   ],
    //   zoom: 7,
    //   center: latLng([ 46.879966, -121.726909 ])
    // }
  }

  options?: MapOptions;
}
