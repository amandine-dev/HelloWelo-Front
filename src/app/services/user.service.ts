import { ErrorhandlerService } from './error-handler.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.models';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


const apiUrl = "http://localhost:3000/users";


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient,
    private errorhandlerService: ErrorhandlerService
  ) { }

  save(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>('http://localhost:3000/users/signin', user);
  }

  getUser(id: number): Observable<any> {
    const url = `${apiUrl}/${id}`;

    return this.http.get(url)
    .pipe(
      tap((user: UserModel) => console.log(`fetched user id=${id}`)),
      catchError(this.errorhandlerService.handleError<UserModel>('getUser'))
    );
  }

  getUsers(): Observable<any> {
    return this.http.get(apiUrl)
    .pipe(
      tap(data=> {
        console.log(data)
      }),
      catchError(this.errorhandlerService.handleError('getUsers', []))
    );
  }

  editUser(id: number, user: UserModel): Observable<any> {
    const url = `${apiUrl}/${id}`;

   return this.http.put<UserModel>(url, user)
   .pipe(
     tap(_ => console.log(`updated bikeride id=${id}`)),
     catchError(this.errorhandlerService.handleError<any>('editUser'))
   );
  }


}




