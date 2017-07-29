import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";

@Component({
  selector: 'ang2-crm-tagdashboard',
  templateUrl: './tagdashboard.component.html',
  styleUrls: ['./tagdashboard.component.css']
})
export class TagdashboardComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    console.log('Root:' + this._activatedRoute.root);
    console.log('Snapshot:' + this._activatedRoute.snapshot);
    console.log('Parent:' + this._activatedRoute.parent);
    console.log('Children:' + this._activatedRoute.children);
  }

}
