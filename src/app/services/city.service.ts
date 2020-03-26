import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityModel } from '../models/city.models';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getCities (): Observable<CityModel[]> {
    return this.http.get<CityModel[]>('http://localhost:3000/cities')
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError('getCities', []))
      );
  }

  getCity(id:number): Observable<any> {
    return this.http.get('http://localhost:3000/cities/' + id)
    .pipe(
      tap((bikeride: CityModel) => console.log('bikeride id')),
      catchError(this.handleError<CityModel>('getCity'))
      );
    }
    
    //pas besoin je pense
    //saveLevel (city: CityModel): Observable<CityModel> {
    //  return this.http.post<CityModel>('http://localhost:3000/cities/post', city)
    //  .pipe(
    //    tap((level: CityModel) => console.log('level ajouté')),
    //    catchError(this.handleError<CityModel>('saveCities'))
    //  );
    //}

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return (error);
    };
  }
} 

