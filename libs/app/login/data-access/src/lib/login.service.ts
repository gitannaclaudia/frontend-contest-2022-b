import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "@frontend-contest/shared-api-interfaces";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _http: HttpClient) {}

  public login(email: string, password: string): Observable<User> {
    return this._http.post<User>('api/auth/login', { email, password });
  }
}
