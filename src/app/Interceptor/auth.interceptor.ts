import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('user_token')
      let newToken = token.substring(1);
      newToken = newToken.substring(0,newToken.length-1);
      console.log(newToken);

      if (newToken) {
        req = req.clone({
          headers: req.headers.set('Authorization', 'Bearer' + newToken),
        })
        return next.handle(req);
      }else {return next.handle(req)}
  }
}
