import { Injectable }     from '@angular/core';
import { CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot }    from '@angular/router';
import { AuthService }      from './auth.service';
import { AuthenticaterService }      from './authenticater.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  //constructor(private authenticaterService: AuthenticaterService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    let url: string = state.url;
    console.log('AuthGuard#canActivate called. IsLoggedIn is:' + this.authService.isLoggedIn.toString());
    //console.log('AuthGuard#canActivate called. IsLoggedIn is:' + this.authenticaterService.userLoggedIn.toString());
    return this.checkLogin(url);
  }

  checkLogin(url: string): Observable<boolean> | boolean  {
    console.log('CheckLogin in AuthGuard:' + this.authService.isLoggedIn);
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
    //return true;
    
  }


}

