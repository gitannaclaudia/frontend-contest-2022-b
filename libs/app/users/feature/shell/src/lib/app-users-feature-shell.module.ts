import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFeatureShellComponent } from './users-feature-shell/users-feature-shell.component';
import { RouterModule } from '@angular/router';
import { AppUsersFeatureListModule } from "@frontend-contest/app/users/feature/list";
import { AppUsersFeatureEditModule } from "@frontend-contest/app/users/feature/edit";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersFeatureShellComponent,
        children: [
          {
            path: ':userId/edit',
            loadChildren: () =>
              import('@frontend-contest/app/users/feature/edit').then(
                (m) => m.AppUsersFeatureEditModule
              ),
          },
          {
            path: 'create',
            loadChildren: () =>
              import('@frontend-contest/app/users/feature/edit').then(
                (m) => m.AppUsersFeatureEditModule
              ),
          },
          {
            path: '',
            pathMatch: 'full',
            loadChildren: () =>
              import('@frontend-contest/app/users/feature/list').then(
                (m) => m.AppUsersFeatureListModule
              ),
          },
        ],
      },
    ]),
    AppUsersFeatureListModule,
    AppUsersFeatureEditModule,
    MatDialogModule
  ],
  providers: [
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DATA, useValue: []},
  ],
  declarations: [UsersFeatureShellComponent],
})
export class AppUsersFeatureShellModule {}
