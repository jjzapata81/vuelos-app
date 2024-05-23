import { LocationTime } from "./location-time.interface"
import { PriceDetail } from "./price-detail.interfaces"

export interface FlightInfo{
  id:number,
  isLowerPrice:boolean,
  duration:string,
  basePrice:number,
  from: LocationTime,
  to: LocationTime,
  route: FlightRoute
  priceDetail: PriceDetail;
  seats?: Seat[];
  tickets?:Ticket[];
}

interface FlightRoute{
  name:string,
  detail:string
}

export interface Seat{
  id:number;
  code:string;
  classType:string;
  state:string;
}

export interface Ticket{
  id:number;
  price:number;
  state:string;
  ticketType:string;
}

export interface FlightResponse{
  id:number;
  arriveDate:string;
  arriveTime:string;
  departureDate:string;
  departureTime:string;
  from:string;
  to:string;
  seats?:Seat[];
  tickets?:Ticket[];
}





