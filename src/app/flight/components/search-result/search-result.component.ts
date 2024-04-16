import { Component } from '@angular/core';
import { FlightInfo } from '../../interfaces/flight-info.interface';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {

  searchResults: FlightInfo[] = [
    {
      isLowerPrice:true,
      duration: '0 h 55 min',
      basePrice: 'COP 90.806,00',
      from: {
        time: '2:50 pm',
        location: 'med'
      },
      to:{
        time:'3:45 pm',
        location: 'bog'
      },
      route:{
        name:'Directo',
        detail:'#'
      }
    }
  ]

}
