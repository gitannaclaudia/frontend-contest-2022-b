import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile, User } from '@frontend-contest/shared-api-interfaces';
import { Store } from "@ngrx/store";

@Injectable({
  providedIn: 'root',
})
export class AppUsersService {
  private token$?: boolean;
  constructor(private http$: HttpClient, private _store: Store) {
  }

  public async getUserToken() {
    this.token$ = !!localStorage.getItem('token');
    if (this.token$) {
      await this.getUser();
    }
  }

  public getUser(): Observable<Profile> {
    return this.http$.get<Profile>('api/auth/profile')
  }

  public list(): Observable<User[]> {
    return this.http$.get<User[]>('api/users');
  }

  public create(name: string, email: string, password: string): Observable<User> {
    return this.http$.post<User>('api/users', {name, email, password});
  }

  public update(id: number, name: string, email: string, password: string): Observable<User> {
    return this.http$.patch<User>('api/users/' + id, {name, email, password});
  }

  public delete(id: number): Observable<unknown> {
    return this.http$.delete<unknown>('api/users/' + id);
  }
}
