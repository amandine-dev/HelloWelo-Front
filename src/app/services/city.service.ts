import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityModel } from '../models/city.models';
import { ErrorhandlerService } from './error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  apiBaseURL = 'http://localhost:3000/cities';

  constructor(private http: HttpClient, private errorHandlerService: ErrorhandlerService) { }

  getCities (): Observable<CityModel[]> {
    return this.http.get<CityModel[]>(this.apiBaseURL)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.errorHandlerService.handleError('getCities', []))
      );
  }

  getCity(id: number): Observable<any> {
    return this.http.get(`${this.apiBaseURL}/${id}`)
    .pipe(
      tap((bikeride: CityModel) => console.log('bikeride id')),
      catchError(this.errorHandlerService.handleError<CityModel>('getCity'))
      );
    }
    
} 

