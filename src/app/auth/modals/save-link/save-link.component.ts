import { Component, OnInit } from '@angular/core';

import { Link } from '../../class/link';

@Component({
  selector: 'ang2-crm-save-link',
  templateUrl: './save-link.component.html',
  styleUrls: ['./save-link.component.css']
})
export class SaveLinkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  errorMessage: string;

  model = new Link('','');

  active = true;
  newLink() {
    this.model = new Link('','');
    this.active = false;
    setTimeout(() => this.active = true,0);
  }

  submitted = false;

  onSubmit() {

  }
}
