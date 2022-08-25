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

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    if (token) {
      const authReq = request.clone({
        headers: request.headers.set(
          'Authorization', `bearer ${token}`
        )
      });
      return next.handle(authReq);
    } else {
      return next.handle(request)
    }
  }
}
