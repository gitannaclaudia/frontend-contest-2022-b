import { Component, EventEmitter, Output } from '@angular/core';
import { Authenticate } from "@frontend-contest/shared-api-interfaces";
import { LoginService } from "@frontend-contest/app/login/data-access";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'fc-feature-login',
  templateUrl: './feature-login.component.html',
  styleUrls: ['./feature-login.component.scss'],
})
export class FeatureLoginComponent  {
  @Output() submitted: EventEmitter<Authenticate> = new EventEmitter<Authenticate>();
  public hide = true;

  public loginForm: FormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _service: LoginService
  ) {}

  public login() {
    this.submitted.emit({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }
}
