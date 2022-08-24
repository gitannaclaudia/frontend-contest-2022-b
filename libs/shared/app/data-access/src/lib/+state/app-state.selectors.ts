import { createFeatureSelector } from '@ngrx/store';
import * as fromAppState from './app-state.reducer';

export const selectAppStateState = createFeatureSelector<fromAppState.State>(
  fromAppState.appStateFeatureKey
);
