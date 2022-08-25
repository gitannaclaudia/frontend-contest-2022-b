import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFeatureEditComponent } from './users-feature-edit';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from "@angular/material/dialog";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { NgxMatErrorsModule } from "ngx-mat-errors";
import { MatButtonModule } from "@angular/material/button";

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
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    NgxMatErrorsModule,
    MatButtonModule,
  ],
  declarations: [UsersFeatureEditComponent],
})
export class AppUsersFeatureEditModule {}
