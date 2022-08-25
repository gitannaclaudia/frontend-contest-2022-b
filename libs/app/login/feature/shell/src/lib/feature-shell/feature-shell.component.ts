import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { Authenticate } from "@frontend-contest/shared-api-interfaces";
import { AppStateActions, AppStateSelectors } from "@frontend-contest/shared/app/data-access";
import { FeatureLoginComponent } from "@frontend-contest/app/login/feature/login";

@Component({
  selector: 'fc-feature-shell',
  templateUrl: './feature-shell.component.html',
  styleUrls: ['./feature-shell.component.scss']
})
export class FeatureShellComponent implements OnInit {
  public getState?: Observable<AppStateSelectors.AppState>;
  public errorMessage?: string;
  public subscription?: Subscription;

  constructor(private _store: Store) {}

  ngOnInit(): void {
    this.getState?.subscribe((state) => {
      this.errorMessage = state.authState.errorMessage;
    })
  }

  public subscribeToEmitter(componentRef: FeatureLoginComponent){
    componentRef.submitted.subscribe((auth) => {
      this.login(auth);
    });
  }

  public unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public login(auth: Authenticate) {
    this._store.dispatch(AppStateActions.signIn(auth));
  }
}
