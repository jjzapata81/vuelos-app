import { Injectable } from '@angular/core';
import { FlightInfo } from '../interfaces/flight-info.interface';
import { searchFlightResults } from '../../utils/mock-repository/flight.repository';
import { SearchCriteria } from '../interfaces/search-criteria.interface';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private FLIGHT_RESULTS = 'flight-results';

  constructor() { }

  getResults(searchCriteria:SearchCriteria){
    let results: FlightInfo[] = this.getAllResults();
    console.log('En el servicio', searchCriteria)
    return results.filter( flight=> flight.from.location === searchCriteria.from && flight.to.location === searchCriteria.to);
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
