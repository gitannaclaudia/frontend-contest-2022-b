import { createReducer, on } from '@ngrx/store';
import * as AppStateActions from './app-state.actions';
import { User } from "@frontend-contest/shared-api-interfaces";

export const appStateFeatureKey = 'appState';

export interface State {
  isAuthenticate: boolean;
  user: User | null;
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticate: false,
  user: null,
  errorMessage: null
};

export const reducer = createReducer(
  initialState,
  on(
    AppStateActions.signInSuccess,
    (state, user) => ({
      ...state,
      isAuthenticate: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        token: user.token,
      },
      errorMessage: null
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
