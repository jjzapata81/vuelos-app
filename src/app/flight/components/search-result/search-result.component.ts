import { Component } from '@angular/core';
import { FlightInfo } from '../../interfaces/flight-info.interface';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {

  selected:string = '';
  searchResults: FlightInfo[] = [];

  constructor(private service:FlightService){

    this.searchResults = service.getResults();

  }

  onPriceOptions(option: string):void{
    console.log(option);
    this.selected = option;
  }

}
