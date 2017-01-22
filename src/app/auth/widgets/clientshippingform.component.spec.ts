/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClientshippingformComponent } from './clientshippingform.component';

describe('ClientshippingformComponent', () => {
  let component: ClientshippingformComponent;
  let fixture: ComponentFixture<ClientshippingformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientshippingformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientshippingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
