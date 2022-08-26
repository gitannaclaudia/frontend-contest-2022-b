import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureShellComponent } from './feature-shell';
import { RouterModule } from '@angular/router';
import { AppLoginFeatureLoginModule, FeatureLoginComponent } from '@frontend-contest/app/login/feature/login';
import { AuthGuard } from "@frontend-contest/app/login/data-access";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeatureShellComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: FeatureLoginComponent,
          },
        ],
      },
    ]),
    AppLoginFeatureLoginModule,
  ],
  declarations: [FeatureShellComponent],
})
export class AppLoginFeatureShellModule {
}
