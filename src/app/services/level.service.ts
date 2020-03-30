import { Injectable, ErrorHandler } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { LevelModel } from '../models/level.models';
import { ErrorhandlerService } from './error-handler.service';


const apiUrl = "http://localhost:3000/levels";

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http: HttpClient, private errorHandlerService: ErrorhandlerService) { }

  getLevels(): Observable<LevelModel[]> {
    return this.http.get<LevelModel[]>(apiUrl)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.errorHandlerService.handleError('getLevels', []))
      );
  }

  getLevel(id: number): Observable<any> {
    const url = `${apiUrl}/${id}`;

    return this.http.get(url)
    .pipe(
      tap((level: LevelModel) => console.log(`fetched level id=${id}`)),
      catchError(this.errorHandlerService.handleError<LevelModel>('getLevel'))
    );
  }

  saveLevel(level: LevelModel): Observable<LevelModel> {
    return this.http.post<LevelModel>(apiUrl, level)
    .pipe(
      tap((level: LevelModel) => console.log('Level added successfully')),
      catchError(this.errorHandlerService.handleError<LevelModel>('saveLevel'))
    );
  }

  editLevel(id: number, level: LevelModel): Observable<any> {
    const url = `${apiUrl}/${id}`;

   return this.http.put<LevelModel>(url, level)
   .pipe(
     tap(_ => console.log(`updated level id=${id}`)),
     catchError(this.errorHandlerService.handleError<any>('editLevel'))
   );
  }

  deleteLevel(id: number): Observable<any> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<any>(url).pipe(
      tap(_ => console.log(`deleted level id=${id}`)),
      catchError(this.errorHandlerService.handleError<any>('deleteLevel'))
    );
  }
} 

