import { Component } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { FlightInfo } from '../../interfaces/flight-info.interface';
import { SearchCriteria } from '../../interfaces/search-criteria.interface';

@Component({
  selector: 'flight-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  results:FlightInfo[] = [];

  constructor(private service: FlightService){

  }

  onSearchFlights(searchCriteria:SearchCriteria) {
    this.results = this.service.getResults(searchCriteria);

  }
}

