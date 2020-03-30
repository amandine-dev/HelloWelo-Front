import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorhandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CscService {

  apiBaseUrlCountries = 'http://localhost:3000/countries';
  apiBaseUrlStates = 'http://localhost:3000/states/country';
  apiBaseUrlCities = 'http://localhost:3000/cities/state';

  constructor(private http: HttpClient, private errorHandlerService: ErrorhandlerService) { }

  getCountries() {
    return this.http.get<any>(`${this.apiBaseUrlCountries}`).pipe(
      catchError(this.errorHandlerService.handleError)
    );
  }

  getStates(countryId: number) {
    return this.http.get<any>(`${this.apiBaseUrlStates}/${countryId}`).pipe(
      catchError(this.errorHandlerService.handleError)
    );
  }

  getCities(stateId: number) {
    return this.http.get<any>(`${this.apiBaseUrlCities}/${stateId}`).pipe(
      catchError(this.errorHandlerService.handleError)
    );
  }

}