import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import { Route } from "@angular/router";
import { FeatureLoginComponent } from "@frontend-contest/app/login/feature/login";

export const loginRoutes: Route[] = [{
  path: 'login', component: FeatureLoginComponent
}]

@NgModule({
  imports: [CommonModule],
  providers: [LoginService],
})
export class AppLoginDataAccessModule {}
