import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ang2-crm-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css']
})
export class HeaderbarComponent implements OnInit {

  constructor(public authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }


  LogOut(){
    //alert("log this user out");
    this.authService.logout();
    this._router.navigate(['/']);
  }

  onClick(){
  }
}
