import { Component } from '@angular/core';
import { SidebarnavComponent } from './sidebarnav';
import { HeaderbarComponent } from './headerbar';
import { SubheaderbarComponent } from './subheaderbar';
import { BodydetailComponent } from './bodydetail';
import { FooterbarComponent } from './footerbar';

@Component({
  moduleId: module.id,
  selector: 'Ang2CRM-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SidebarnavComponent, HeaderbarComponent, SubheaderbarComponent, BodydetailComponent, FooterbarComponent]
})

export class AppComponent {
  
}
