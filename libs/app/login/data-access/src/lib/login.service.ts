import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Login } from "@frontend-contest/shared-api-interfaces";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginSubject$ = new BehaviorSubject(null);
  login$ = this.loginSubject$.asObservable();
  constructor(private http$: HttpClient) {
    const login = localStorage.getItem('token');
    if (login) {
      this.loginSubject$.next(JSON.parse(login));
    }
  }

  public login(email: string, password: string): Observable<Login> {
    return this.http$.post<Login>('api/auth/login', { email, password });
  }
}
