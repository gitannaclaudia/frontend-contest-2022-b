import { createReducer, on } from '@ngrx/store';
import * as AppStateActions from './app-state.actions';
import { authUser, User } from "@frontend-contest/shared-api-interfaces";

export const appStateFeatureKey = 'appState';

export interface State {
  isAuthenticate: boolean;
  access_token?: string;
  users?: User[];
  authUser?: authUser;
  user?: User;
  errorMessage?: string;
}

export const initialState: State = {
  isAuthenticate: false,
  access_token: '',
};

export const reducer = createReducer(
  initialState,
  on(
    AppStateActions.signInSuccess,
    (state, user) => ({
      ...state,
      isAuthenticate: true,
      access_token: user.access_token,
    })
  ),
  on(
    AppStateActions.singInFailure,
    (state) => ({
      ...state,
      errorMessage: 'Incorrect email and/or password'
    })
  ),
  on(
    AppStateActions.getUserSuccess,
    (state, authUser) => ({
      ...state,
      isAuthenticate: true,
      authUser: authUser,
      errorMessage: undefined
    })
  ),
  on(
    AppStateActions.getUserFailure,
    (state) => ({
      ...state,
      isAuthenticate: true,
      errorMessage: 'Error trying to get user, try again'
    })
  ),
  on(
    AppStateActions.getListUserSuccess,
    (state, user) => ({
      ...state,
      isAuthenticate: true,
      users: user.users
    })
  ),
  on(
    AppStateActions.getListUserFailure,
    (state) => ({
      ...state,
      isAuthenticate: true,
      errorMessage: 'Error trying to get user list, try again'
    })
  ),
  on(
    AppStateActions.createUserSuccess,
    (state, user) => ({
      ...state,
      isAuthenticate: true,
      user: user
    })
  ),
  on(
    AppStateActions.createUserFailure,
    (state) => ({
      ...state,
      isAuthenticate: true,
      errorMessage: 'Error trying to create user, try again'
    })
  ),
  on(
    AppStateActions.updateUserSuccess,
    (state, user) => ({
      ...state,
      isAuthenticate: true,
      user: user
    })
  ),
  on(
    AppStateActions.updateUserFailure,
    (state) => ({
      ...state,
      isAuthenticate: true,
      errorMessage: 'Error trying to update user, try again'
    })
  ),
  on(
    AppStateActions.deleteUserSuccess,
    (state) => ({
      ...state,
      isAuthenticate: true,
    })
  ),
  on(
    AppStateActions.deleteUserFailure,
    (state) => ({
      ...state,
      isAuthenticate: true,
      errorMessage: 'Error trying to update user, try again'
    })
  )

);
