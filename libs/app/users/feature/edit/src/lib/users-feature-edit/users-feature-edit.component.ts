import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppUsersService } from "@frontend-contest/app/users/data-access";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { User } from "@frontend-contest/shared-api-interfaces";
import { Store } from "@ngrx/store";
import { AppStateActions, AppStateSelectors } from "@frontend-contest/shared/app/data-access";

@Component({
  selector: 'fc-users-feature-edit',
  templateUrl: './users-feature-edit.component.html',
  styleUrls: ['./users-feature-edit.component.scss'],
})
export class UsersFeatureEditComponent implements OnInit{
  public id: number | undefined;
  public hide = true;
  public getState?: Observable<any>;
  public errorMessage?: string | null;
  public routeName?: string;


  public userForm:FormGroup = this._fb.group({
    name: [this.user?.name ?? '', [Validators.required]],
    email: [this.user?.email ?? '', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(5)]]
  });

  constructor(
    private _fb: FormBuilder,
    private _service: AppUsersService,
    private _dialogRef: MatDialogRef<UsersFeatureEditComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User,
    private _store: Store,
  ) {
    this.routeName = this.id != 0 ? 'editPanel' : 'createPanel';
    this.getState = this._store.select(AppStateSelectors.selectAppStateState);
  }

  ngOnInit() {
    this.getState?.subscribe((state) => {
      this.errorMessage = state?.errorMessage;
    });
  }

  public save() {
    const user: User = {
      id: this.id,
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      password: this.userForm.value.password
    }
    if (this.userForm.valid && !this.user) {
      this._store.dispatch(AppStateActions.createUser(user));
    } else if (this.userForm.valid && this.user) {
      user.id = this.user.id;
      this._store.dispatch(AppStateActions.updateUser(user));
    }
    this._dialogRef.afterClosed().subscribe(() => {
      this._store.dispatch(AppStateActions.getListUser());
    });
    this._dialogRef.close('ok');
  }

  public close() {
    this._dialogRef.close('ok');
  }
}
