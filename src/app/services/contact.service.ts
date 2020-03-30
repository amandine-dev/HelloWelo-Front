import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError as observaleThrowError} from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { ContactModel } from './../models/contact.models';
import { ErrorhandlerService } from './error-handler.service';

const apiUrl = "http://localhost:3000/contacts";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorhandlerService
  ) { }

  saveContact(contact: ContactModel): Observable<ContactModel> {
    return this.http.post<ContactModel>(apiUrl, contact)
    .pipe(
      tap((contact: ContactModel) => console.log('Message send successfully')),
      catchError(this.errorHandlerService.handleError<ContactModel>('saveContact'))
    );
  }
}
