/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClientaddressformComponent } from './clientaddressform.component';

describe('ClientaddressformComponent', () => {
  let component: ClientaddressformComponent;
  let fixture: ComponentFixture<ClientaddressformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientaddressformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientaddressformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
