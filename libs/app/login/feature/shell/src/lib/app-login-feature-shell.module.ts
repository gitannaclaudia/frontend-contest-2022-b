import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureShellComponent } from './feature-shell';
import { RouterModule } from '@angular/router';
import { AppLoginFeatureLoginModule, FeatureLoginComponent } from '@frontend-contest/app/login/feature/login';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeatureShellComponent

      },
    ]),
    AppLoginFeatureLoginModule,
  ],
  declarations: [FeatureShellComponent],
})
export class AppLoginFeatureShellModule {
}
