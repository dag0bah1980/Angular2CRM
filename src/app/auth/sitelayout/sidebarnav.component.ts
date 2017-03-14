import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'ang2-crm-sidebarnav',
  templateUrl: './sidebarnav.component.html',
  styleUrls: ['./sidebarnav.component.css']
})
export class SidebarnavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(){
  }

  onNavigateClick(url){
    url='/auth/'+url;
    console.log('went into onNavigateClick');
    this.router.navigate([url]);
    console.log(url);
  }
}
