import { createAction, props } from '@ngrx/store';
import { Authenticate, User } from "@frontend-contest/shared-api-interfaces";

export const signIn = createAction(
  '[Auth] Login',
  props<Authenticate>()
);

export const signInSuccess = createAction(
  '[Auth] Login Success',
  props<User>()
);

export const singInFailure = createAction (
  '[Auth] Login Failure',
  props<{ error: string }>()
);




