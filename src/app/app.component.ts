import { Component } from '@angular/core';
import { SidebarnavComponent } from './sidebarnav';
import { HeaderbarComponent } from './headerbar';
import { BodydetailComponent } from './bodydetail';
import { FooterbarComponent } from './footerbar';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'Ang2CRM-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SidebarnavComponent, HeaderbarComponent, BodydetailComponent, FooterbarComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {
  
}
