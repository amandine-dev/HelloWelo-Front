import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { BikerideModel } from '../models/bikeride.models';
import { ErrorhandlerService } from './error-handler.service';


const apiUrl = "http://localhost:3000/bikerides";

@Injectable({
  providedIn: 'root'
})
export class AddbikerideService {

  UserId: number;

  constructor(private http: HttpClient, 
    private errorHandlerService: ErrorhandlerService,
    private authService: AuthService) { }
  //CRUD BikeRide

  getBikerides(): Observable<any> {
    return this.http.get(apiUrl)
      .pipe(
        tap(data => {
          console.log(data)
        }),
        catchError(this.errorHandlerService.handleError('getBikerides', []))
      );
  }

  getBikeride(id: number): Observable<any> {
    const url = `${apiUrl}/${id}`;

    return this.http.get(url)
      .pipe(
        tap((bikeride: BikerideModel) => console.log(`fetched bikeride id=${id}`)),
        catchError(this.errorHandlerService.handleError<BikerideModel>('getBikeride'))
      );
  }

  getUserBikeride(id: number): Observable<any> {

    this.UserId = this.authService.user.id;
    console.log(this.UserId);

    const url = `${apiUrl}/${this.UserId}`;

    return this.http.get(url)
      .pipe(
        tap((bikeride: BikerideModel) => console.log(`fetched bikeride id=${this.UserId}`)),
        catchError(this.errorHandlerService.handleError<BikerideModel>('getBikeride'))
      );
  }

  saveBikeride(bikeride: BikerideModel): Observable<BikerideModel> {
    return this.http.post<BikerideModel>(apiUrl, bikeride)
      .pipe(
        tap((bikeride: BikerideModel) => console.log('BikeRide added successfully')),
        catchError(this.errorHandlerService.handleError<BikerideModel>('saveBikeride'))
      );
  }

  editBikeride(id: number, bikeride: BikerideModel): Observable<any> {
    const url = `${apiUrl}/${id}`;

    return this.http.put<BikerideModel>(url, bikeride)
      .pipe(
        tap(_ => console.log(`updated bikeride id=${id}`)),
        catchError(this.errorHandlerService.handleError<any>('editBikeride'))
      );
  }

  deleteBikeride(id: number): Observable<any> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<any>(url).pipe(
      tap(_ => console.log(`deleted bikeride id=${id}`)),
      catchError(this.errorHandlerService.handleError<any>('deleteProduct'))
    );
  }

}






