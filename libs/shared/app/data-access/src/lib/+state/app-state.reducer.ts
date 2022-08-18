import { Action, createReducer, on } from '@ngrx/store';
import * as AppStateActions from './app-state.actions';

export const appStateFeatureKey = 'appState';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(AppStateActions.loadAppStates, state => state),

);
