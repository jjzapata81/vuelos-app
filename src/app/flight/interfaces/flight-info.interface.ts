import { LocationTime } from "./location-time.interface"

export interface FlightInfo{
  isLowerPrice:boolean,
  duration:string,
  basePrice:string,
  from: LocationTime,
  to: LocationTime,
  route: FlightRoute
}

interface FlightRoute{
  name:string,
  detail:string
}




