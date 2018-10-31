import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class UserGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let loginId = route.url[1].path;
    // console.log("logId "+loginId);

    if (loginId.length < 4) {
      alert("Invalid user Id");
      this._router.navigate(['/users']);
      return false;
    }

    return true;
  }
  constructor(private _router: Router) { }

}
