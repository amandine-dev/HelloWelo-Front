import { tap, catchError } from 'rxjs/operators';
import { ParticipantModel } from './../models/participant.model';
import { ErrorhandlerService } from './error-handler.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:3000/participants";
const apiUrlParticipantsByBikeride = "http://localhost:3000/participants/bikeride";
const apiUrlBBP = "http://localhost:3000/participants/user"

@Injectable({
  providedIn: 'root'
})

export class ParticipantService {

  UserId: number;

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorhandlerService
  ) { }

  getParticipants(): Observable<ParticipantModel[]> {
    return this.http.get<ParticipantModel[]>(apiUrl)
      .pipe(
        tap(data => console.log(data)),

        catchError(this.errorHandlerService.handleError('getParticipants', []))
      );
  }

  getParticipant(id: number): Observable<any> {
    const url = `${apiUrl}/${id}`;

    return this.http.get(url)
      .pipe(
        tap((participant: ParticipantModel) => console.log(`fetched participant id =${id}`)),

        catchError(this.errorHandlerService.handleError<ParticipantModel>('getParticipant'))
      );
  }

  addParticipant(participant: ParticipantModel): Observable<ParticipantModel> {
    return this.http.post<ParticipantModel>(apiUrl, participant)
    .pipe(
      tap((participant: ParticipantModel) =>
      console.log('Participant added successfully')),

      catchError(this.errorHandlerService.handleError<ParticipantModel>('saveParticipant'))
    );
  }

  editParticipant(id: number, participant: ParticipantModel): Observable<any> {
    const url = `${apiUrl}/${id}`;
    
    return this.http.put<ParticipantModel>(url, participant)
    .pipe(
      tap(_ => console.log(`updated participant id=${id}`)),

      catchError(this.errorHandlerService.handleError<any>('editParticipant'))
    );
  }

  getParticipantsByBikeRide(bikeRideId: number) {
    const url = `${apiUrlParticipantsByBikeride}/${bikeRideId}`

    return this.http.get<any>(url).pipe(
      catchError(this.errorHandlerService.handleError)
    );
  }

  getBikerideByParticipant(participantId: number) {
    const url = `${apiUrlBBP}/${participantId}`

    return this.http.get<any>(url).pipe(
      catchError(this.errorHandlerService.handleError)
    );
  }

}
