import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";



@Component({
  selector: 'ang2-crm-apitree',
  templateUrl: './apitree.component.html',
  styleUrls: ['./apitree.component.css']
})
export class ApitreeComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }
  ngOnInit() {
    console.log('Root:' + this._activatedRoute.root);
    console.log('Snapshot:' + this._activatedRoute.snapshot);
    console.log('Parent:' + this._activatedRoute.parent);
    console.log('Children:' + this._activatedRoute.children);
    
    this._router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      //set breadcrumbs
      let root: ActivatedRoute = this._activatedRoute.root;
      //console.log('Children' + this._activatedRoute.children);
      //console.log('Snapshot' + this._activatedRoute.snapshot);
      //this.routes = this._activatedRoute.children.toString();
      //console.log(this.activatedRoute.firstChild);
    });

    
    
  }

  routes: string;
  blah: string;
  childrenRoutes: any;

}
