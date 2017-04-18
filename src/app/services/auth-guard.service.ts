import { Injectable }     from '@angular/core';
import { CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot }    from '@angular/router';
import { AuthService }      from './auth.service';
import { AuthenticaterService }      from './authenticater.service';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'angular2-cookie';
import { JwtHelper } from 'angular2-jwt';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private _cookieService:CookieService) {}
  //constructor(private authenticaterService: AuthenticaterService, private router: Router) {}


  _jwtHelper: JwtHelper = new JwtHelper();
  whatTime: any;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    let url: string = state.url;
    console.log('AuthGuard#canActivate called. IsLoggedIn is:' + this.authService.isLoggedIn.toString());
    //console.log('AuthGuard#canActivate called. IsLoggedIn is:' + this.authenticaterService.userLoggedIn.toString());
    //original login:
    //return this.checkLogin(url);
    //if (localStorage.getItem('currentUser')) {
     if(!!this._cookieService.get('USER')) {
        // logged in so return true
        
        // Note:  I think at this point, I should also check if the expiry of the token has been reached before returning true.
        //        I will output some console logs to see if I can get the expiry from the JWT and the current time.


        console.log('JWT Expiry Timestamp: ' + this._jwtHelper.getTokenExpirationDate(this._cookieService.get('token')));
        this.whatTime = new Date();
        if(this.whatTime < this._jwtHelper.getTokenExpirationDate(this._cookieService.get('token'))) {
          console.log('Now: ' + this.whatTime);
          return true;
        }
      
        
    }
 
    // not logged in so redirect to login page
    this.router.navigate(['/newlogin']);
    this._cookieService.remove('USER');
    this._cookieService.remove('token');
    return false;
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

