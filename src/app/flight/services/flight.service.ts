import { Injectable } from '@angular/core';
import { FlightInfo, FlightResponse } from '../interfaces/flight-info.interface';
import { priceDetail, searchFlightResults } from '../../utils/mock-repository/flight.repository';
import { SearchCriteria } from '../interfaces/search-criteria.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private FLIGHT_RESULTS = 'flight-results';

  constructor(private http:HttpClient) { }

  getResults(searchCriteria:SearchCriteria):Observable<FlightInfo[]>{
    const { from, to } = searchCriteria;
    const params = {from, to};
    const url = `${environment.baseUrl}/flights/find`
    return this.http.get<FlightResponse[]>(url, {params} ).pipe(
      map(data=>data.map(this.mapper)),
      catchError(error=> throwError(()=>new Error(error.error.message)))
    );



    /*let results: FlightInfo[] = this.getAllResults();
    console.log('En el servicio', searchCriteria)
    return of(results.filter( flight=> flight.from.location === searchCriteria.from && flight.to.location === searchCriteria.to));*/
  }

  private mapper(response:FlightResponse):FlightInfo{
    return {
      id:response.id,
      isLowerPrice:true,
      duration:'5 h',
      basePrice: 90806.00,
      from: { location: response.from, time: response.departureTime},
      to: { location: response.to, time: response.arriveTime},
      route: {
        name:'Directo',
        detail:'#'
      },
      priceDetail: priceDetail,
      seats: response.seats,
      tickets:response.tickets
    }
  }

  private getAllResults(): FlightInfo[]{
    let results: FlightInfo[] = this.getFromLocalStorage();
    if(results.length===0){
      results = this.getFromDB();
      let stringResult = JSON.stringify(results);
      localStorage.setItem(this.FLIGHT_RESULTS, stringResult);
    }
    return results;
  }

  private getFromLocalStorage(){
    let results: FlightInfo[] = [];
    //let stringResults = localStorage.getItem(this.FLIGHT_RESULTS);
    let stringResults;
    if(stringResults){
      results = JSON.parse(stringResults);
      console.log('From localStorage');
    }
    return results;
  }

  private getFromDB(){
    console.log('From database');
    return searchFlightResults;
  }
}
