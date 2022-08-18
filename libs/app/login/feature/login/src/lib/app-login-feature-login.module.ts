import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureLoginComponent } from './feature-login';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FeatureLoginComponent],
  exports: [FeatureLoginComponent],
})
export class AppLoginFeatureLoginModule {}
