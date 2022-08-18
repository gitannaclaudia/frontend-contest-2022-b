import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFeatureEditComponent } from './users-feature-edit';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: UsersFeatureEditComponent,
      },
    ]),
  ],
  declarations: [UsersFeatureEditComponent],
})
export class AppUsersFeatureEditModule {}
