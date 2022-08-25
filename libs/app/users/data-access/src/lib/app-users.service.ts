import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profile, User } from '@frontend-contest/shared-api-interfaces';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AppStateActions } from "@frontend-contest/shared/app/data-access";
import { Store } from "@ngrx/store";

@Injectable({
  providedIn: 'root',
})
export class AppUsersService {
  private token = localStorage.getItem('token');
  private loginSubject$ = new BehaviorSubject(this.token);
  constructor(private http$: HttpClient, private _store: Store) {
    if (this.token) {
      this.loginSubject$.next(this.token);
      this._store.dispatch(AppStateActions.getUser());
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
