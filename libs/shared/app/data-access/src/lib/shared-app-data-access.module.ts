import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAppState from './+state/app-state.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppStateEffects } from './+state/app-state.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromAppState.appStateFeatureKey,
      fromAppState.reducer
    ),
    EffectsModule.forFeature([AppStateEffects]),
  ],
})
export class SharedAppDataAccessModule {}
