import { Component, Input, inject } from '@angular/core';
import { PriceDetail } from '../../interfaces/price-detail.interfaces';
import { FlightInfo } from '../../interfaces/flight-info.interface';
import { FlightService } from '../../services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'price-options',
  templateUrl: './price-options.component.html',
  styleUrl: './price-options.component.css'
})
export class PriceOptionsComponent {

  private flightService = inject(FlightService);
  private router = inject(Router);

  @Input()
  flightInfo: FlightInfo = {
    id: 0,
    code:'',
    isLowerPrice: false,
    duration: '',
    basePrice: 0,
    from: {
      location: '',
      time: ''
    },
    to: {
      location: '',
      time: ''
    },
    route: {
      name: '',
      detail: ''
    },
    priceDetail: {
      plainType: '',
      priceOptions: []
    }
  }


  selectedOption(option:string){
    console.log({fromOptions:option});
    console.log(this.flightInfo);
    this.flightService.selectedFlight.set({
      ...this.flightInfo,
      priceType:option
    })

    this.router.navigateByUrl('/flight');

  }
}
