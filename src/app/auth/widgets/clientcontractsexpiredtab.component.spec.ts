/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClientcontractsexpiredtabComponent } from './clientcontractsexpiredtab.component';

describe('ClientcontractsexpiredtabComponent', () => {
  let component: ClientcontractsexpiredtabComponent;
  let fixture: ComponentFixture<ClientcontractsexpiredtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientcontractsexpiredtabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcontractsexpiredtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
