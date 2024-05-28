import { Component, computed, inject } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { Seat } from '../../interfaces/flight-info.interface';
import { PurchaseRequest } from '../../interfaces/purchase-request.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../../login/services/auth.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css'
})
export class FlightComponent {

  private flightService = inject(FlightService);
  private authService = inject(AuthService);
  public router = inject (Router);

  flight = computed (()=>this.flightService.selectedFlight());

  seatsflight = computed (()=>this.flightService.selectedFlight()?.seats?.sort((a,b)=>a.id-b.id));

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

  onPurchase(option:string){
    if(this.seats.length===0){
      alert('Debe seleccionar un asiento');
      return;
    }
    const request: PurchaseRequest={
      option,
      flightCode: this.flight()?.code||'',
      price: this.price(),
      ticketType: 'basic',
      email: this.authService.currentUser()?.user.email||'',
      seatCode: this.seats[0].code
    }
    this.flightService.purchase(request).subscribe({
      next:()=>{
        alert('Compra exitosa!');
        this.router.navigateByUrl('/');
      },
      error:message=>alert(message)
    })

  }

}
