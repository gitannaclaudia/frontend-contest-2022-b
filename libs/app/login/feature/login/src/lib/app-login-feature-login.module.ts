import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureLoginComponent } from './feature-login';
import { RouterModule } from '@angular/router';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { NgxMatErrorsModule } from "ngx-mat-errors";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    NgxMatErrorsModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  declarations: [FeatureLoginComponent],
  exports: [FeatureLoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppLoginFeatureLoginModule {}
