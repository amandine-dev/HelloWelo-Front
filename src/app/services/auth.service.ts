import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserModel } from '../models/user.models';

interface UserAuth {
  message: string;
  User: UserModel;
  token: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<UserModel>;
  user$: Observable<UserModel>
  private loginUrl = 'http://localhost:3000/users/login';
  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<UserModel>(null);
    const data = localStorage.getItem('user_storage');
    if (data !== "undefined") {
      const user = JSON.parse(data);
      this.userSubject.next(user);
      this.user$ = this.userSubject.asObservable();
    }
  }
  // this.authService.user
  // value === UserModel | null
  public get user(): UserModel {
    return this.userSubject.value;
  }
  public getToken() {
    return localStorage.getItem('user_token');
  }
  public login(email: string, password: string): Observable<UserModel> {
    const value = { email: email, password: password };
    return this.http.post<UserAuth>(this.loginUrl, value)
      .pipe(
        tap((data: UserAuth) => console.log(data))
      )
      .pipe(
        map((data: UserAuth) => {
          localStorage.setItem('user_storage', JSON.stringify(data.User));
          localStorage.setItem('user_token', JSON.stringify(data.token));
          this.userSubject.next(data.User);
          return data.User;
        })
      );
  }
  
  logout(): void {
    localStorage.removeItem('user_storage');
    localStorage.removeItem('user_token');
    this.userSubject.next(null);
  }
}