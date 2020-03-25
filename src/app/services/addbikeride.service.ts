import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError as observableThrowError  } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { BikerideModel } from '../models/bikeride.models';

@Injectable({
  providedIn: 'root'
})
export class AddbikerideService {

  constructor(private http: HttpClient) { }
  //CRUD De l'Addbikeride

  getBikerides(): Observable<any> {
    return this.http.get('http://localhost:3000/bikerides')
    .pipe(
      tap(data=> {
        console.log(data)
      }),
      catchError(this.handleError('getBikerides', []))
    );
  }

  saveBikerides(bikeride: BikerideModel): Observable<BikerideModel> {
    return this.http.post<BikerideModel>('http://localhost:3000/bikerides', bikeride)
    .pipe(
      tap((bikeride: BikerideModel) => console.log('bikeride a été ajouté')),
      catchError(this.handleError<BikerideModel>('saveBikeride'))
    );
  }

  getBikeride(id:number): Observable<any> {
    return this.http.get('http://localhost:3000/bikerides/' + id)
    .pipe(
      tap((bikeride: BikerideModel) => console.log('bikeride id')),
      catchError(this.handleError<BikerideModel>('getBikeride'))
    );
  }
  
  deleteBikeride(id:number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/bikerides/delete' + id);
  }

  //editBikeride(id: number, bikeride: any): Observable<any> {
  //  return this.http.put<any>('http://localhost:3000/bikerides/edit' + id)
  //  .pipe(
  //    tap(_ => console.log('bikeride  a été modifié')),
  //    catchError(this.handleError<any>('updateBikeride'))
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






