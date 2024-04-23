import { Component, Input } from '@angular/core';
import { LocationTime } from '../../interfaces/location-time.interface';

@Component({
  selector: 'location-time',
  template: `
    <div class="location-time">
      <div class="flight-time">{{info.time }}</div>
      <div class="flight-location">{{ info.location | uppercase | slice:0:3}}</div>
    </div>
  `,
  styleUrl: './location-time.component.css'
})
export class LocationTimeComponent {

  @Input()
  info: LocationTime = { time: '', location: '' };

}
