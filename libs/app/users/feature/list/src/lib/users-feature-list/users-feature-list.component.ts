import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { authUser, User } from "@frontend-contest/shared-api-interfaces";
import { Observable, Subscription } from "rxjs";
import { AppUsersService } from "@frontend-contest/app/users/data-access";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { AppStateActions, AppStateSelectors } from "@frontend-contest/shared/app/data-access";
import { UsersFeatureEditComponent } from "@frontend-contest/app/users/feature/edit";
import { Router } from "@angular/router";

@Component({
  selector: 'fc-users-feature-list',
  templateUrl: './users-feature-list.component.html',
  styleUrls: ['./users-feature-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UsersFeatureListComponent implements OnInit {
  @Output() deleteUsers: EventEmitter<User> = new EventEmitter<User>();
  public users?: User[];
  public userEmail: string | null = localStorage.getItem('email');
  public user?: User;
  public authUser?: authUser;
  public getState?: Observable<any>;
  public errorMessage = null;
  public subscription?: Subscription;
  public isAuthenticated = false;
  public modalComponent?: unknown;

  constructor(
    private _service: AppUsersService,
    private _dialog: MatDialog,
    private _dialogRef: MatDialogRef<UsersFeatureEditComponent>,
    private _store: Store,
    private _router: Router
  ) {
    this.getState = this._store.select(AppStateSelectors.selectAppStateState);
    this.getState?.subscribe((state) => {
      this.isAuthenticated = state?.isAuthenticated;
      this.user = state?.user;
      this.authUser = state?.authUser;
      this.users = state?.users;
      this.errorMessage = state?.errorMessage;
    });
  }

  ngOnInit(): void {
    this.list();
  }

  public list() {
    this._store.dispatch(AppStateActions.getListUser());
  }

  public deleteUser(event: User) {
    this._store.dispatch(AppStateActions.deleteUser(event));
    this.list();
  }

  public openDialog(user: User) {
    this._dialog.open(UsersFeatureEditComponent,{
      width: '400px',
      height: '400px',
      data: user
    });
  }

  unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public logout() {
    this._store.dispatch(AppStateActions.logOut());
  }
}
