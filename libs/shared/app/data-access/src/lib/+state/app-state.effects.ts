import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AppStateActions from './app-state.actions';
import { LoginService } from "@frontend-contest/app/login/data-access";
import { Router } from "@angular/router";

@Injectable()
export class AppStateEffects {

  signIn = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.signIn),
      concatMap(auth => {
        return this.loginService$.login(auth.email, auth.password)
          .pipe(map((user) => {
            return AppStateActions.signInSuccess({
              id: user.id,
              name: user.name,
              email: user.email,
              password: user.password,
              token: user.token,
            });
          }),
            catchError((error) => {
              return of(AppStateActions.singInFailure({error: error}));
            }))
      }),
    );
  });

  signInSuccess = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.signInSuccess),
      map((value) => value),
      tap(value => {
        if (value.name && value.token) {
          localStorage.setItem('token', value.token);
          localStorage.setItem('name', value.name);
        }
        this.router$.navigateByUrl('/users');
      })
    )
  }, { dispatch: false });

  signInFailure = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.singInFailure)
    )
  }, { dispatch: false })

  constructor(
    private actions$: Actions,
    private loginService$: LoginService,
    private router$: Router
  ) {}
}
