import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AppStateActions from './app-state.actions';
import { Router } from "@angular/router";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { LoginService } from "@frontend-contest/app/login/data-access";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AppUsersService } from "@frontend-contest/app/users/data-access";

@Injectable()
export class AppStateEffects {

  signIn = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.signIn),
      concatMap(auth => {
        return this.loginService$.login(auth.email, auth.password)
          .pipe(map((token) => {
            return AppStateActions.signInSuccess({
              access_token: token.access_token,
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
        if (value.access_token) {
          localStorage.setItem('token', value.access_token);
        }
        this.router$.navigate(['/users']);
      })
    )
  }, { dispatch: false });

  signInFailure = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.singInFailure)
    )
  }, { dispatch: false });

  getUser = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.signIn),
      concatMap(() => {
        return this.userService$.getUser()
          .pipe(map((user) => {
            localStorage.setItem('email', user.userEmail);
              return AppStateActions.getUserSuccess({
                id: user.userId,
                email: user.userEmail
              });
            }),
            catchError((error) => {
              return of(AppStateActions.getUserFailure({error: error}));
            }))
      }),
    );
  });

  getUserSuccess = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.getUserSuccess),
      map((value) => value),
      tap(value => {
        if (value.id) {
          this.router$.navigateByUrl('/users');
        }
        return;
      })
    )
  }, { dispatch: false });

  getUserFailure = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.getUserFailure)
    )
  }, { dispatch: false });

  getListUser = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.getListUser),
      concatMap(() => {
        return this.userService$.list().pipe(
          map((users) => {
            return AppStateActions.getListUserSuccess({
              users: users
            });
          }),
          catchError((error) => {
            return of(AppStateActions.getListUserFailure({ error: error }))
          })
        )
      })
    )
  });

  getListUserSuccess = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.getListUserSuccess),
      map((value) => value),
      tap(value => {
        if (value) {
          return;
        }
      })
    )
  }, { dispatch: false });

  getListUserFailure = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.getListUserFailure)
    )
  }, { dispatch: false });

  logOut = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.logOut),
      tap((user) => {
        localStorage.removeItem('token');
        this.router$.navigateByUrl('/login');
      })
    )
  }, { dispatch: false });

  createUser = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.createUser),
      concatMap((user) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.userService$.create(user.name!, user.email, user.password!).pipe(
          map((newUser) => {
            return AppStateActions.createUserSuccess({
              id: newUser.id,
              name: newUser.name,
              email: newUser.email
            });
          }),
          catchError((error) => {
            return of(AppStateActions.createUserFailure({ error: error }));
          })
        )
      })
    )
  });

  createUserSuccess = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.createUserSuccess),
      tap(value => {
        if (value) {
          return;
        }
      })
    )
  }, { dispatch: false });

  createUserFailure = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.createUserFailure)
    )
  }, { dispatch: false });

  updateUser = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.updateUser),
      concatMap((user) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.userService$.update(user.id, user.name!, user.email, user.password!).pipe(
          map((newUser) => {
            return AppStateActions.updateUserSuccess({
              id: newUser.id,
              name: newUser.name,
              email: newUser.email
            });
          }),
          catchError((error) => {
            return of(AppStateActions.updateUserFailure({ error: error }));
          })
        )
      })
    )
  });

  updateUserSuccess = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.updateUserSuccess),
      tap(value => {
        if (value) {
          return;
        }
      })
    )
  }, { dispatch: false });

  updateUserFailure = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.updateUserFailure)
    )
  }, { dispatch: false });

  deleteUser = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.deleteUser),
      concatMap((user) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.userService$.delete(user.id).pipe(
          map(() => {
            return AppStateActions.deleteUserSuccess();
          }),
          catchError((error) => {
            return of(AppStateActions.deleteUserFailure({ error: error }));
          })
        )
      })
    )
  });

  deleteUserSuccess = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.deleteUserSuccess),
      tap(value => {
        if (value) {
          return;
        }
      })
    )
  }, { dispatch: false });

  deleteUserFailure = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppStateActions.deleteUserFailure)
    )
  }, { dispatch: false });

  constructor(
    private actions$: Actions,
    private loginService$: LoginService,
    private userService$: AppUsersService,
    private router$: Router
  ) {}
}
