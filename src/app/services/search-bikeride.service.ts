import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorhandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class SearchBikerideService {

  apiBaseUrlBikeRidesByCity = 'http://localhost:3000/bikerides/city';
  apiBaseUrlBikeRidesByState = 'http://localhost:3000/bikerides/state';
  apiBaseUrlBikeRidesByCountry = 'http://localhost:3000/bikerides/country';
  apiBaseUrlBikeRidesByDate = 'http://localhost:3000/bikerides/date';


  constructor(private http: HttpClient, private errorHandlerService: ErrorhandlerService) { }

  public bikeRidesByCityResult: any;
  public bikeRidesByStateResult: any;
  public bikeRidesByCountryResult: any;
  public bikeRidesByDateResult: any;

  getBikeRidesByCity(cityId: number) {
    return this.http.get<any>(`${this.apiBaseUrlBikeRidesByCity}/${cityId}`).pipe(
      catchError(this.errorHandlerService.handleError)
    );
  }

  setbikeRidesByCityResult(result: any) { 
    return this.bikeRidesByCityResult = result; 
  }

  getBikeRidesByCityResult() {
    console.log(this.bikeRidesByCityResult);
    return this.bikeRidesByCityResult;
  }

  getBikeRidesBySate(stateId: number) {
    return this.http.get<any>(`${this.apiBaseUrlBikeRidesByState}/${stateId}`).pipe(
      catchError(this.errorHandlerService.handleError)
    );
  }

  setbikeRidesByStateResult(result: any) { 
    return this.bikeRidesByStateResult = result; 
  }

  getBikeRidesByStateResult() {
    console.log(this.bikeRidesByStateResult);
    return this.bikeRidesByStateResult;
  }

  getBikeRidesByCountry(countryId: number) {
    return this.http.get<any>(`${this.apiBaseUrlBikeRidesByCountry}/${countryId}`).pipe(
      catchError(this.errorHandlerService.handleError)
    );
  }

  setbikeRidesByCountryResult(result: any) { 
    return this.bikeRidesByCountryResult = result; 
  }

  getBikeRidesByCountryResult() {
    return this.bikeRidesByCountryResult;
  }

  getBikeRidesByDate(date: any) {
    return this.http.get<any>(`${this.apiBaseUrlBikeRidesByDate}/${date}`).pipe(
      catchError(this.errorHandlerService.handleError)
    );
  }

  setbikeRidesByDateResult(result: any) { 
    return this.bikeRidesByDateResult = result; 
  }

  getBikeRidesByDateResult() {
    console.log(this.bikeRidesByDateResult);
    return this.bikeRidesByDateResult;
  }

  init() {
    this.bikeRidesByCityResult = '';
    this.bikeRidesByStateResult = '';
    this.bikeRidesByCountryResult = '';
    this.bikeRidesByDateResult = '';
  }

}

