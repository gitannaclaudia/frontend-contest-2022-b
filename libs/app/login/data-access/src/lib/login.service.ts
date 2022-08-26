import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Login } from "@frontend-contest/shared-api-interfaces";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private token = !!localStorage.getItem('token');
  private loginSubject$ = new BehaviorSubject(this.token);
  login$ = this.loginSubject$.asObservable();
  constructor(private http$: HttpClient) {
  }

  public login(email: string, password: string): Observable<Login> {
    return this.http$.post<Login>('api/auth/login', { email, password });
  }
}
