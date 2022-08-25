import { Component } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { UsersFeatureListComponent } from "@frontend-contest/app/users/feature/list";
import { UsersFeatureEditComponent } from "@frontend-contest/app/users/feature/edit";
import { AppStateActions, AppStateSelectors } from "@frontend-contest/shared/app/data-access";
import { Store } from "@ngrx/store";
import { User } from "@frontend-contest/shared-api-interfaces";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'fc-users-feature-shell',
  templateUrl: './users-feature-shell.component.html',
  styleUrls: ['./users-feature-shell.component.scss'],
})
export class UsersFeatureShellComponent {
  public getState?: Observable<AppStateSelectors.AppState>;
  public user?: User;
  public users?: User[];
  public errorMessage?: string;
  public subscription?: Subscription;

  constructor(
    private _store: Store,
    private _dialogRef: MatDialogRef<UsersFeatureEditComponent>,
  ) {
    this.getState?.subscribe((state) => {
      this.user = state.authState.user;
      this.errorMessage = state.authState.errorMessage;
    })
  }

  public onSubscribe(componentRef: UsersFeatureListComponent) {
    componentRef.listUsers.subscribe(() => {
      this.getList();
    })
  }

  public unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public getList() {
    this._store.dispatch(AppStateActions.getListUser());
  }

  public createUser($event: User) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this._store.dispatch(AppStateActions.createUser($event));
  }

  public updateUser($event: User) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this._store.dispatch(AppStateActions.updateUser($event));
  }

  public deleteUser($event: User) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this._store.dispatch(AppStateActions.deleteUser($event));
  }
}
