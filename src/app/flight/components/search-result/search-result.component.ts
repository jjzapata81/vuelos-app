import { Component, Input } from '@angular/core';
import { FlightInfo } from '../../interfaces/flight-info.interface';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {

  selected:number = 0;

  @Input()
  searchResults: FlightInfo[] = [];

  onPriceOptions(option: number):void{
    this.selected = option;
  }

}

