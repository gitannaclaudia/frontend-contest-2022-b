import { Component } from '@angular/core';
import { Authenticate } from "@frontend-contest/shared-api-interfaces";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppStateActions, AppStateSelectors } from "@frontend-contest/shared/app/data-access";

@Component({
  selector: 'fc-feature-login',
  templateUrl: './feature-login.component.html',
  styleUrls: ['./feature-login.component.scss'],
})
export class FeatureLoginComponent  {
  public getState?: Observable<AppStateSelectors.AppState>;
  public errorMessage?: string;
  public hide = true;

  public loginForm: FormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store
  ) {}

  public login() {
    const auth: Authenticate = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    if (this.loginForm.valid) {
      this._store.dispatch(AppStateActions.signIn(auth));
    }
  }
}
