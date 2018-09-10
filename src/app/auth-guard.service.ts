import { Injectable } from '@angular/core';
import { SearchComponent } from './search/search.component';

import {
  CanActivate, Router,
  ActivatedRouteSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  private isfirstNavigation = true;

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.isfirstNavigation) {
      this.isfirstNavigation = false;
      if (route.component !== SearchComponent) {
        this.router.navigateByUrl('/search');
        return false;
      }
    }
    return true;
  }
}