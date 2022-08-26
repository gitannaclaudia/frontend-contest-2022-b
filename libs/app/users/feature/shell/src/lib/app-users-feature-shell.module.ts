import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { UsersFeatureShellComponent } from './users-feature-shell/users-feature-shell.component';
import { RouterModule } from '@angular/router';
import { AppUsersFeatureListModule } from "@frontend-contest/app/users/feature/list";
import { MatDialogModule } from "@angular/material/dialog";
import { AuthGuard, AuthInterceptor } from "@frontend-contest/app/login/data-access";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersFeatureShellComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadChildren: () =>
              import('@frontend-contest/app/users/feature/list').then(
                (m) => m.AppUsersFeatureListModule
              ),
            canActivate: [AuthGuard]
          },
        ],
      },
    ]),
    AppUsersFeatureListModule,
    MatDialogModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    }
  ],
  declarations: [UsersFeatureShellComponent],
})
export class AppUsersFeatureShellModule {}
