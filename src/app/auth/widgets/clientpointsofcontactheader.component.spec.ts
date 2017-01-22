/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClientpointsofcontactheaderComponent } from './clientpointsofcontactheader.component';

describe('ClientpointsofcontactheaderComponent', () => {
  let component: ClientpointsofcontactheaderComponent;
  let fixture: ComponentFixture<ClientpointsofcontactheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientpointsofcontactheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientpointsofcontactheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
