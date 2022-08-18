import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFeatureListComponent } from './users-feature-list';
import { RouterModule } from '@angular/router';
import { AppUsersDataAccessModule } from '@frontend-contest/app/users/data-access';

@NgModule({
  imports: [
    CommonModule,
    AppUsersDataAccessModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: UsersFeatureListComponent,
      },
    ]),
  ],
  declarations: [UsersFeatureListComponent],
})
export class AppUsersFeatureListModule {}
