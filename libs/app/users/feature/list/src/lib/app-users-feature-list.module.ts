import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { UsersFeatureListComponent } from './users-feature-list';
import { RouterModule } from '@angular/router';
import { AppUsersDataAccessModule } from '@frontend-contest/app/users/data-access';
import { AuthGuard, AuthInterceptor } from "@frontend-contest/app/login/data-access";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatListModule } from "@angular/material/list";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppUsersDataAccessModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: UsersFeatureListComponent,
        children: [
          {
            path: ':userId/edit',
            loadChildren: () =>
              import('@frontend-contest/app/users/feature/edit').then(
                (m) => m.AppUsersFeatureEditModule
              ),
            outlet: 'editPanel',
            canActivate: [AuthGuard]
          },
          {
            path: 'create',
            loadChildren: () =>
              import('@frontend-contest/app/users/feature/edit').then(
                (m) => m.AppUsersFeatureEditModule
              ),
            outlet: 'createPanel',
            canActivate: [AuthGuard]
          },
        ],
        canActivate: [AuthGuard]
      },
    ]),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: APP_BASE_HREF,
      useValue: '/users'
    },
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DATA, useValue: []},
  ],
  declarations: [UsersFeatureListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    UsersFeatureListComponent
  ]
})
export class AppUsersFeatureListModule {}
