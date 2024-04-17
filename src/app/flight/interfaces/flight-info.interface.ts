import { LocationTime } from "./location-time.interface"
import { PriceDetail } from "./price-detail.interfaces"

export interface FlightInfo{
  id:string,
  isLowerPrice:boolean,
  duration:string,
  basePrice:string,
  from: LocationTime,
  to: LocationTime,
  route: FlightRoute
  priceDetail: PriceDetail
}

interface FlightRoute{
  name:string,
  detail:string
}




