import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AppStateEffects } from './app-state.effects';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe('AppStateEffects', () => {
  let actions$: Observable<any>;
  let effects: AppStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        AppStateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AppStateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
