import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { SharedAppDataAccessModule } from '@frontend-contest/shared/app/data-access';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard, AuthInterceptor } from "@frontend-contest/app/login/data-access";
import { APP_BASE_HREF } from "@angular/common";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedAppDataAccessModule,
    RouterModule.forRoot([
      {
        path: 'login',
        loadChildren: () =>
          import('@frontend-contest/app/login/feature/shell').then(
            (m) => m.AppLoginFeatureShellModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('@frontend-contest/app/users/feature/shell').then(
            (m) => m.AppUsersFeatureShellModule
          ),
        canActivate: [AuthGuard]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
    ]),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    BrowserAnimationsModule,
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
  bootstrap: [AppComponent],
})
export class AppModule {}
