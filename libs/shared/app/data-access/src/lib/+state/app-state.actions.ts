import { createAction, props } from '@ngrx/store';
import { Authenticate, Login, Profile, User } from "@frontend-contest/shared-api-interfaces";

export const signIn = createAction(
  '[Auth] Login',
  props<Authenticate>()
);

export const signInSuccess = createAction(
  '[Auth] Login Success',
  props<Login>()
);

export const singInFailure = createAction (
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const getUser = createAction (
  '[Auth] Get User'
);

export const getUserSuccess = createAction (
  '[Auth] Get User Success',
  props<User>()
);

export const getUserFailure = createAction (
  '[Auth] Get User Failure',
  props<{ error: string}>()
);

export const getListUser = createAction (
  '[Auth] Get List User'
);

export const getListUserSuccess = createAction (
  '[Auth] Get List User Success',
  props<{ users: User[] }>()
);

export const getListUserFailure = createAction (
  '[Auth] Get List User Failure',
  props<{ error: string}>()
);

export const logOut = createAction (
  '[Auth] Logout'
);

export const createUser = createAction (
  '[User] Create User',
  props<User>()
);

export const createUserSuccess = createAction (
  '[User] Create User Success',
  props<User>()
);

export const createUserFailure = createAction (
  '[User] Create User Failure',
  props<{ error: string }>()
);

export const updateUser = createAction (
  '[User] Update User',
  props<User>()
);

export const updateUserSuccess = createAction (
  '[User] Update User Success',
  props<User>()
);

export const updateUserFailure = createAction (
  '[User] Update User Failure',
  props<{ error: string }>()
);

export const deleteUser = createAction (
  '[User] Delete User',
  props<User>()
);

export const deleteUserSuccess = createAction (
  '[User] Delete User Success'
);

export const deleteUserFailure = createAction (
  '[User] Delete User Failure',
  props<{ error: string }>()
);



