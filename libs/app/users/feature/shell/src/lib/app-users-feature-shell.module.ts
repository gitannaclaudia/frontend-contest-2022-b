import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFeatureShellComponent } from './users-feature-shell/users-feature-shell.component';
import { RouterModule } from '@angular/router';

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
  ],
  declarations: [UsersFeatureShellComponent],
})
export class AppUsersFeatureShellModule {}
