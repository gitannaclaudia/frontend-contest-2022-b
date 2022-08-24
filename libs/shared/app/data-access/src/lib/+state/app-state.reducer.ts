import { createReducer, on } from '@ngrx/store';
import * as AppStateActions from './app-state.actions';
import { User } from "@frontend-contest/shared-api-interfaces";

export const appStateFeatureKey = 'appState';

export interface State {
  isAuthenticate: boolean;
  access_token?: string;
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
  )

);
