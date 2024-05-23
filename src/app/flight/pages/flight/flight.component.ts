import { Component, computed, inject } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { Seat } from '../../interfaces/flight-info.interface';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css'
})
export class FlightComponent {

  private flightService = inject(FlightService);

  flight = computed (()=>this.flightService.selectedFlight());

  price = computed(()=> this.flight()!.basePrice * parseFloat(this.flight()!.priceType||'1') );

  seats : Seat[] =[];

  onSelectSeat(seat:Seat){

    if( this.seats.length > 0 && seat.state!=='available'){
      let seatTemp = this.seats.pop();
      seatTemp!.state = 'available'
      return;
    }else if(this.seats.length > 0 && seat.state==='available'){
      let seatTemp = this.seats.pop();
      seatTemp!.state = 'available';
    }else if(seat.state!=='available'){
      return;
    }
    seat.state = 'reserved';
    this.seats.push(seat);
  }

}
