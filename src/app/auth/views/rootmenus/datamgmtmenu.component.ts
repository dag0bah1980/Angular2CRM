import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";

@Component({
  selector: 'ang2-crm-datamgmtmenu',
  templateUrl: './datamgmtmenu.component.html',
  styleUrls: ['./datamgmtmenu.component.css']
})
export class DatamgmtmenuComponent implements OnInit {

  private atMenu: boolean
  private path: string;
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }

  
  ngOnInit() {
    this.atMenu = false;
    /*console.log('Root:' + this._activatedRoute.root);
    console.log('Snapshot:' + this._activatedRoute.snapshot);
    console.log('Parent:' + this._activatedRoute.parent);
    console.log('Children:' + this._activatedRoute.children);
  */
    //console.log(this._router.url);
    //console.log(this._router.url.substr(this._router.url.lastIndexOf('/')+1));

    this.path = this._router.url.substr(this._router.url.lastIndexOf('/')+1);

    //console.log('var:' + this.path);
    if (this.path = 'datamgmtmenu'){      
      this.atMenu = false;
    } else {
      this.atMenu = true;
    }
    
  }

}
