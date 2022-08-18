import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureShellComponent } from './feature-shell';
import { RouterModule } from '@angular/router';
import { FeatureLoginComponent } from '@frontend-contest/app/login/feature/login';

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
  ],
  declarations: [FeatureShellComponent],
})
export class AppLoginFeatureShellModule {}
