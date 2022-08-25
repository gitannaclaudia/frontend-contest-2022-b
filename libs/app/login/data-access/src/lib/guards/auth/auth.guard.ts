import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { LoginService } from '../../login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.loginService.login$.pipe(
      map(token => {
        if (token) {
          // eslint-disable-next-line no-debugger
          debugger;
          return true;
        } else {
          this.router.navigate(['/login']);
          return  false;
        }
      })
    );
  }
}
