import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFeatureListComponent } from './users-feature-list';
import { RouterModule } from '@angular/router';
import { AppUsersDataAccessModule } from '@frontend-contest/app/users/data-access';
import { AuthGuard } from "@frontend-contest/app/login/data-access";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatListModule } from "@angular/material/list";
import { AppUsersFeatureEditModule } from "@frontend-contest/app/users/feature/edit";

@NgModule({
  imports: [
    CommonModule,
    AppUsersDataAccessModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: UsersFeatureListComponent,
        canActivate: [AuthGuard]
      },
    ]),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    AppUsersFeatureEditModule
  ],
  declarations: [UsersFeatureListComponent],
  exports: [
    UsersFeatureListComponent
  ]
})
export class AppUsersFeatureListModule {}
