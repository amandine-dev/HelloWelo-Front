import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  save(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>('http://localhost:3000/users', user);
  }

}


