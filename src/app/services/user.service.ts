import { AuthService } from 'src/app/services/auth.service';
import { ErrorhandlerService } from './error-handler.service';
import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.models';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:3000/users";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  UserId: number;

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorhandlerService,
    private authService: AuthService
  ) { }

  save(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>('http://localhost:3000/users/signin', user);
  }

  getUser(id: number): Observable<any> {

    this.UserId = this.authService.user.id;
    console.log(this.UserId);

    const url = `${apiUrl}/${this.UserId}`;

    return this.http.get(url)
      .pipe(
        tap((user: UserModel) => console.log(`fetched participant id =${this.UserId}`)),

        catchError(this.errorHandlerService.handleError<UserModel>('getUser'))
      );
  }
}




