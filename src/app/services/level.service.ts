import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { LevelModel } from '../models/level.models';


@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http: HttpClient) { }

  getLevels (): Observable<LevelModel[]> {
    return this.http.get<LevelModel[]>('http://localhost:3000/levels')
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError('getLevels', []))
      );
  }

  saveLevel (level: LevelModel): Observable<LevelModel> {
    return this.http.post<LevelModel>('http://localhost:3000/levels/post', level)
    .pipe(
      tap((level: LevelModel) => console.log('level ajouté')),
      catchError(this.handleError<LevelModel>('saveLevels'))
    );
  }

  getLevel(id:number): Observable<any> {
    return this.http.get('http://localhost:3000/levels/' + id)
    .pipe(
      tap((bikeride: LevelModel) => console.log('bikeride id')),
      catchError(this.handleError<LevelModel>('getLevel'))
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:3000/levels/delete/' + id);
  }

  //update(id: number, level: any ): Observable<any> {
  //  return this.http.put<void>('http://localhost:3000/level/edit/' + id);
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

