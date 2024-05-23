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

  seats=[
    {id:1,code:'1A', status:'available'},{id:1,code:'1B', status:'available'},{id:1,code:'1C', status:'available'},{id:1,code:'1D', status:'available'},{id:5,code:'1E', status:'available'},
    {id:1,code:'2A', status:'available'},{id:1,code:'2B', status:'available'},{id:1,code:'2C', status:'available'},{id:1,code:'2D', status:'available'},{id:10,code:'2E', status:'available'},
    {id:1,code:'3A', status:'available'},{id:1,code:'3B', status:'available'},{id:1,code:'3C', status:'available'},{id:1,code:'3D', status:'available'},{id:15,code:'3E', status:'available'},
    {id:1,code:'4A', status:'available'},{id:1,code:'4B', status:'available'},{id:1,code:'4C', status:'available'},{id:1,code:'4D', status:'available'},{id:20,code:'4E', status:'available'},
    {id:1,code:'5A', status:'available'},{id:1,code:'5B', status:'available'},{id:1,code:'5C', status:'available'},{id:1,code:'5D', status:'available'},{id:25,code:'5E', status:'available'},
    {id:1,code:'6A', status:'available'},{id:1,code:'6B', status:'available'},{id:1,code:'6C', status:'available'},{id:1,code:'6D', status:'available'},{id:30,code:'6E', status:'available'},
    {id:1,code:'7A', status:'available'},{id:1,code:'7B', status:'available'},{id:1,code:'7C', status:'available'},{id:1,code:'7D', status:'available'},{id:1,code:'7E', status:'available'},
    {id:1,code:'8A', status:'available'},{id:1,code:'8B', status:'available'},{id:1,code:'8C', status:'available'},{id:1,code:'8D', status:'available'},{id:1,code:'8E', status:'available'},
    {id:1,code:'9A', status:'available'},{id:1,code:'9B', status:'available'},{id:1,code:'9C', status:'available'},{id:1,code:'9D', status:'available'},{id:1,code:'9E', status:'available'},
  ]

  constructor(private service: FlightService){

  }

  onSearchFlights(searchCriteria:SearchCriteria) {
    this.service.getResults(searchCriteria).subscribe({
      next:(data)=> this.results=data,
      error:(message)=>{
        alert(message);
      }
    });
  }

  onSelectSeat(seat:any){
    if(seat.status!=='available'){
      return;
    }
    console.log(seat);
    seat.status = 'reserved';
  }
}

