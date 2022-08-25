import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from "@frontend-contest/shared-api-interfaces";
import { Observable } from "rxjs";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AppUsersService } from "@frontend-contest/app/users/data-access";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { AppStateActions, AppStateSelectors } from "@frontend-contest/shared/app/data-access";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UsersFeatureEditComponent } from "@frontend-contest/app/users/feature/edit";

@Component({
  selector: 'fc-users-feature-list',
  templateUrl: './users-feature-list.component.html',
  styleUrls: ['./users-feature-list.component.scss'],
})
export class UsersFeatureListComponent implements OnInit {
  @Output() listUsers: EventEmitter<unknown> = new EventEmitter<unknown>();
  public users?: User[];
  public userEmail: string | null = localStorage.getItem('email');
  public user?: User;
  public getState?: Observable<any>;
  public errorMessage = null;
  public isAuthenticated = false;

  constructor(
    private _service: AppUsersService,
    private _dialog: MatDialog,
    private _store: Store
  ) {
    this.getState = this._store.select(AppStateSelectors.selectAppStateState);
  }

  ngOnInit(): void {
    this.getState?.subscribe((state) => {
      this.isAuthenticated = state?.isAuthenticated;
      this.user = state?.user;
      this.errorMessage = state?.errorMessage;
    })
    this.list();
  }

  public list() {
    this.listUsers.emit();
  }

  public openDialog(user: User) {
    this._dialog.open(UsersFeatureEditComponent,{
      width: '400px',
      height: '400px',
      data: user
    });
  }

  public logout() {
    this._store.dispatch(AppStateActions.logOut());
  }
}
