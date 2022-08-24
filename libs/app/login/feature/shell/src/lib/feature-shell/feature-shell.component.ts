import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Authenticate } from "@frontend-contest/shared-api-interfaces";
import {AppStateActions} from "@frontend-contest/shared/app/data-access";

@Component({
  selector: 'fc-feature-shell',
  templateUrl: './feature-shell.component.html',
  styleUrls: ['./feature-shell.component.scss'],
})
export class FeatureShellComponent implements OnInit {
  public getState?: Observable<any>;
  public errorMessage?: string;

  constructor(private _store: Store) {}

  ngOnInit(): void {
    this.getState?.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    })
  }

  public login(auth: Authenticate) {
    this._store.dispatch(AppStateActions.signIn(auth));
  }
}
